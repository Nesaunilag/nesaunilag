import './App.css'; 
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";  // Switch to HashRouter

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='pt-[20vh]'>
        <Routes />  {/* Your Project Routes */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

