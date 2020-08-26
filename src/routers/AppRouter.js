import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductPage from '../components/ProductPage'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route path="/product" component={ProductPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;

