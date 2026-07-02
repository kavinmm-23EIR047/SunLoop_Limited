import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Solar from './pages/Solar';
import Storage from './pages/Storage';
import EVCharging from './pages/EVCharging';
import AIPortal from './pages/AIPortal';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflowX: 'hidden'
        }}
      >
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/ess" element={<Storage />} />
            <Route path="/ev-charging" element={<EVCharging />} />
            <Route path="/ai-portal" element={<AIPortal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
