import './App.css';
import {useRoutes} from 'react-router-dom';
import React from "react";

import {WebsiteComingSoon} from "./pages/WebsiteComingSoon";
import {SideBar} from "./components/navigation/SideBar";
import { pageRoutes } from './utils';

const App = () => {
    const elements = useRoutes(pageRoutes);

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
