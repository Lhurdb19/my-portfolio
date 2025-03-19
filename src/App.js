import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/navbar';
import Projects from './Components/Projects/project';
import Hero from './Components/Hero/hero';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Experience from './Components/Experiences/experience';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/hero" element={<Hero />} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
