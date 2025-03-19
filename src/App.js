import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/navbar';
import Projects from './Components/Projects/project';
import Hero from './Components/Hero/hero';
import Home from './Components/Home/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
