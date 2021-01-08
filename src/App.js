import './App.css';
import {Route} from 'react-router-dom';
import React from "react";

import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home";
import {About} from './pages/About';
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Route exact
                path={'/'}
                component={Home} />
            <Route exact
                path={'/about'}
                component={About} />
            <Route exact
                path={'/projects'}
                component={Projects} />
            <Route exact
                path={'/contact'}
                component={Contact} />
            <Navbar />
        </div>
    );
}

export default App;
