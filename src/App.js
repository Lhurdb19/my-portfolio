import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa'; // Import scroll icon
import WelcomeScreen from './Components/Welcome/welcomescreen';
import Navbar from './Navigation/navbar';
import Projects from './Components/Projects/project';
import Hero from './Components/Hero/hero';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Experience from './Components/Experiences/experience';
import Overlay from './Components/Overlay/overlay';
import About from './Components/About/about';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path="/project" element={<Projects />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Overlay />
          <Footer />

          {/* Scroll-to-Top Button */}
          {/* {showScrollBtn && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          )} */}
        </Router>
      )}

      {/* Styles for Scroll Button */}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 50px;
          right: 50px;
          width: 30px;
          height: 30px;
          background: #ebc9a0;
          color: #0b2311;
          border: none;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          opacity: 0.9;
        }

        .scroll-to-top:hover {
          background: #d6a972;
          transform: scale(1.1);
        }
        
      `}
      
      </style>
    </>
  );
}

export default App;
