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
        <Routes />  {/* Your Project Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

