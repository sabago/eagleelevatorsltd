import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
import { Home } from "./components/home";
import history from './history';
import App from "./App";
import { About } from "./components/about-us";
import { Services } from "./components/services";
import { Clients } from "./components/clients";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact-us";

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="" component={Home}/>
                    <Route path="/about-us" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact-us" component={Contact} />
                </Switch>
            </Router>
        );
    }
}