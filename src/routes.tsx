import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop";

import { Home } from "./components/home";
import { About } from "./components/about-us";
import { Services } from "./components/services";
import { Clients } from "./components/clients";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact-us";
import { Navigation } from "./components/navigation";

export default class Routes extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about-us" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact-us" component={Contact} />
                </Switch>
                </ScrollToTop>
             </Router> 
        );
    }
}

