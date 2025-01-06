import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import Home1Page from './pages/Home1';
import Home2 from './pages/Home2';
import About from './pages/About';
import Executives from './pages/About/Executives';
import EventsPage from './pages/Events';
import Alumni from './pages/About/Alumni';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

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
            path: '/events',
            element: <EventsPage />,
        },
        {
            path: '/gallery',
            element: <Gallery />,
        },
        {
            path: '/contact',
            element: <Contact />,
        }
    ]);
    return element;
};

export default ProjectRoutes;
