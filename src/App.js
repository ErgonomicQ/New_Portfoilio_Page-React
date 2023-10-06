import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
