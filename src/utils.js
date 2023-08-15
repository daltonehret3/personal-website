import React from "react";

import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {About} from './pages/About'

export const pageRoutes = [
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