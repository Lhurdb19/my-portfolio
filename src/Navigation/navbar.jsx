import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <Link to={'/'}>HEJIDEV</Link>

      <div className={`nav-link ${isMobile ? 'mobile active' : ""}`} onClick={ () => setIsMobile(!isMobile)}>
        <Link to="/about" onClick={()=> setIsMobile(false)}>About</Link>
        <Link to="/project" onClick={()=> setIsMobile(false)}>Project</Link>
      </div>
      <div className="toggle-menu" onClick={() => setIsMobile(!isMobile)}>{isMobile ? <HiMiniXMark /> : <RxDropdownMenu />}</div>
    </nav>
  );
};

export default Navbar;
