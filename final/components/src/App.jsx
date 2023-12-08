import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import TextContentPage from './TextContentPage';
import CardsPage from './CardsPage';
import PanelsPage from './PanelsPage';
import OtherPage from './OtherPage';
import FluffyPage from './FluffyPage';
import BarkleyPage from './BarkleyPage';
import Modal from './Modal';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    };
  return (
    <>
      <BrowserRouter>
      <a href="#main" className="skiplink">Skip to main content</a>
        <Header />
        <button onClick={toggleTheme} style={{ position: 'absolute', top: 0, right: 0 }}>Change theme color</button>
        <nav>
        <div className="hamburger menu-toggle" onClick={toggleNav}></div>
            <ul className={`nav-list ${navActive ? 'active' : ''}`}>
            <li>
              <Link to="/" aria-label="Home page">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/cards" aria-label="Go to Cards">Famous Alumni</Link>
              {/* Dropdown content */}
              <ul className="dropdown-content">
                <li><Link to="/fluffy">Fluffy</Link></li>
                <li><Link to="/barkley">Barkley</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/panels" aria-label="Go to check courses">Our Courses</Link>
            </li>
            <li>
              <Link to="/modal" aria-label="Go to Contact Us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TextContentPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/panels" element={<PanelsPage />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/other-page" element={<OtherPage />} />
          <Route path="/fluffy" element={<FluffyPage />} />
          <Route path="/barkley" element={<BarkleyPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

