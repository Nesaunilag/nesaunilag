import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import Home1Page from './pages/Home1';
import Home2 from './pages/Home2';
import About from './pages/About';
import Executives from './pages/About/Executives';
import EventsPage from './pages/Events';
import BlogPost from "./pages/BlogPost";
import Alumni from './pages/About/Alumni';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Error404 from './pages/Error404';
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
            path: '/blog/:id',
            element: <BlogPost />,
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
        },
        {
            path: '*',
            element: <Error404 />
        },
        {
            path: '/event',
            element: <Event />,
        }
    ]);
    return element;
};

export default ProjectRoutes;
