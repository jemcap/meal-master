import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Contact from './components/Contact'
// import Service from './components/service'
import About from './components/About'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* 
        <Route path="/home" element={<Home />} />
       
         */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);



