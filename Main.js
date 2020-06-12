import React from 'react';
import { Component } from 'react';
import App from './App';
import Book from './Book.js';
import './Main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Carousel from 'react-bootstrap/Carousel';
import biblio1 from './img/biblio1.jpg';
import biblio2 from './img/biblio2.jpg';
import biblio3 from './img/biblio3.jpg';
import Contact from './Contact';

class Main extends Component {

    render() {
        return (
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/Books" component={Book} />
                <Route path="/Login" component={Login} />
                <Route path="/Contact" component={Contact} />

            </main>
        );
    }
}
function Home() {
    return (
        <section>
            <br></br>
            <div className="container1">
            <h3>Witaj na naszej stronie. Jesteśmy najlepszą na świecie biblioteką,
                 a w ddoatku wykorzystujemy najnowsze technologie: React JS, Spring oraz SQL
            </h3>
            </div>
            <SliderBoodstrap />
            <div className="container1">
            <h4>Możesz wypożyczyć u nasz książkę, wypić pyszną herbatę oraz poczytać prasę, jeśli masz ochotę jesteś zawsze mieli widziany w naszej bibliotece. Mamy najciekawsze
            tytuły książek z róznych kategorii. U nas każdy znajdzie coś dla siebie. Jeżeli nie wiesz co wypożyczyć chętnie Ci doradzimy. Możesz też skorzystać z losowego generatora książek.
           </h4>
           </div>
           <div className="container1">
            <h1>
                Godziny Otwarcia:
                <br/>
            <h3>
                Poniedziałek - Piątek 8:00-17:00<br/>
                Sobota - 9:00-14:00<br/>
                Niedziela - Zamknięte<br/>
                <br/>
                <u>Koronawirus - Otwarte całą dobę!</u>
            </h3>
            </h1>
            </div>
        </section>
    )
}
function SliderBoodstrap() {
    return (
        <div className="Slider">


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={biblio1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Nasza Biblioteka jest najlepsza!</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={biblio2}
      alt="Secound slide"
    />

    <Carousel.Caption>
      <h3>Nasza Biblioteka jest super!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={biblio3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Wypożycz coś!</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Main