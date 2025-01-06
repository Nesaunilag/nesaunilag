import axios from 'axios';

// Base URL for the API
const API = axios.create({
  baseURL: 'https://faculty-backend-55jd.onrender.com',
});

// API Methods
export const getScholars = () => API.get('/scholars');
export const getExecutives = () => API.get('/getExecutives');
export const getSpotLight = () => API.get('/getSpotLight');
export const getGallery = () => API.get('/getGallery');
export const getUpcomingEvents = () => API.get('/upcomingEvents');
export const getBlogPosts = () => API.get('/blogPosts');
