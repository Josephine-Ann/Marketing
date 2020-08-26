import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


const LandingPage = () => (
    <div>
        This is from my landing page component
    </div>
);

const AboutPage = () => (
    <div>
        This is from my about page component
    </div>
);

const ProductPage = () => (
    <div>
        This is from my product page component
    </div>
);

const ContactPage = () => (
    <div>
        This is from my contact page component
    </div>
);

const NotFoundPage = () => (
    <div>
        This is from my 404 page - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <NavLink to="/" activeClassName="is-active">Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/product" activeClassName="is-active">Product</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
)

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
        </div>
    </BrowserRouter>
);

export default AppRouter;

