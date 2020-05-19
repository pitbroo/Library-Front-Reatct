import React from 'react';
import { Component } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

class Footer extends Component {


    render() {
        return (
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">bibliotekakorona.com <i>Wyporzycz naszą książkę!</i> Jesteśmy internetową biblioteką do wyporzyczania książek z dostawą do domu. Książka, którą wypożyczysz będzie u Ciebie w ciągu 48h. Możesz z niej korystać przez 20 dni. Możesz również wypożyczyć e-ksiązkę!</p>
                        </div>
                        <Categories />
                        <QuickLinks />
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2020 Wszelkie zastrzeżone.<br></br>
                                <a href="#">Corona</a>.
                            </p>
                        </div>
                        

                    </div>
                </div>
            </footer>
        )
        function Categories() {
            return (
                <div class="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul class="footer-links">
                        <CategoriesItem item="Książki kryminalne" />
                        <CategoriesItem item="Romans" />
                        <CategoriesItem item="Książki kryminalne" />
                        <CategoriesItem item="Książki Przygodowe" />
                        <CategoriesItem item="Książki sensacyjne" />
                        <CategoriesItem item="Książki Autobiograficzne" />
                    </ul>
                </div>
            )
        }
        function CategoriesItem({ item }) {
            return (
                <li><a href=""> {item} </a></li>
            )
        }
        function QuickLinks() {
            return (
                <div class="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                        <QuickLinksItem item="O nas" />
                        <QuickLinksItem item="Regulamin" />
                        <QuickLinksItem item="Logowanie" />
                        <QuickLinksItem item="Rejestracja" />
                        <QuickLinksItem item="O Twórcach" />
                    </ul>
                </div>
            )
        }
        function QuickLinksItem({ item }) {
            return (
                <li><a href="">{item}</a></li>
            )
        }
    }

}

export default Footer