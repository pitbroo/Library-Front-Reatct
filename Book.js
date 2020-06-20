import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import './Book.css';


const list = []

class Book extends React.Component {

    constructor() {
        super();

        this.state = {
            filteredBooks: list
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => this.setState({
                filteredBooks: data
            }))
    }


    printD = () => {
        fetch('http://localhost:8080')
            .then(response => response.json())
            .then(data => this.setState({
                filteredBooks: data
            }))
    }

    DelateprintD = () => {
        this.setState({
            filteredBooks: []
        })
    }

    filterbooks(e) {
            const text = e.currentTarget.value;
            const filteredBooks = this.getFilteredBooksForText(text)
            this.setState({
                filteredBooks
            })
    }
    
    getFilteredBooksForText(text) {
        const filteredBooks = this.state.filteredBooks;
        return filteredBooks.filter(book => book.title.toLowerCase().includes(
            text.toLowerCase()
            ))
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <button type="button" className="ui blue button" onClick={this.printD} >Pokaż bazę Książek i autorów</button>
                <button type="button" className="ui blue button" onClick={this.DelateprintD} >Schowaj bazę Książek i autorów</button>
                <input placeholder="Wyszukaj książkę..  "  onInput={this.filterbooks.bind(this)} />
                <BooksList books={this.state.filteredBooks} />
            </div>
        );
    }
}
const BooksList = ({ books }) => {
    if (books.length > 0) {
        return (
        <div className="sixty">    
            <div className="ui celled list">
                <ul >
                    {books.map(book =>
                        <div className="item">
                            <li className="header" key={book}>{book.id}. {book.title} </li>
                            <li><b>Autorzy: </b>{book.author}</li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
        );
    }

    // <li className="header"> {book.id}.  {book.title}</li>
    //             <li className="contenet">Autorzy: {book.author}</li>



    return (
        <p>Brak księżek!</p>
    );
};

export default Book