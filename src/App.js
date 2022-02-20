import './App.css';
import {useRoutes} from 'react-router-dom';
import React from "react";

import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home";
import {About} from './pages/About';
import {WebsiteComingSoon} from "./pages/WebsiteComingSoon";
import {SideBar} from "./components/navigation/SideBar";

const routes = [
    {
        element: <Home />,
        path: '/'
    },
    {
        element: <About />,
        path: '/about'
    },
    {
        element: <Projects />,
        path: '/projects'
    },
    {
        element: <Contact />,
        path: '/contact'
    }
];

const App = () => {
    const elements = useRoutes(routes);

    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        return (
            <div className="App">
                <SideBar />
                {elements}
            </div>
        )
    }

    return (
        <WebsiteComingSoon />
    );
}

export default App;
