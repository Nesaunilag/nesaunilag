import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Executives from './pages/About/Executives';
import Alumni from './pages/About/Alumni';
import Event from './pages/Events/Event';

const ProjectRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/executives',
            element: <Executives />,
        },
        {
            path: '/alumni',
            element: <Alumni />,
        },
        {
            path: '/event',
            element: <Event />,
        }
    ]);
    return element;
};

export default ProjectRoutes;
