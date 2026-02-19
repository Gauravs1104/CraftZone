import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Import the new ProductDetailPage component
import Navbar from './components/Navbar'; // Import the new Navbar component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Use the new Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} /> {/* New route for product details */}
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} My Craft Store. All rights reserved.</p>
          <div className="social-links">
            <a href="https://youtube.com/@shivanitiwari-t9s?si=BODOigWjuTkjtGiB" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> 
            </a>
            <a href="https://www.instagram.com/shivanihandmade?igsh=cGVwcmUzY2o5NTJx" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> 
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> 
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
