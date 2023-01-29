import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Services from "./pages/Services";
import Events from "./pages/Events";
import "./sass/main.scss";
import Contact from "./pages/Contact";

function App() {
    const location = useLocation();
    return (
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    );
}

export default App;
