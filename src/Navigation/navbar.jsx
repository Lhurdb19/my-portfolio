import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <Link to={'/'}>Portfolio</Link>

      <div className={`nav-link ${isMobile ? 'mobile active' : ""}`} onClick={ () => setIsMobile(!isMobile)}>
        <Link to="/project" onClick={()=> setIsMobile(false)}>Project</Link>
        <Link to="/hero" onClick={()=> setIsMobile(false)}>Hero</Link>
      </div>
      <div className="toggle-menu" onClick={() => setIsMobile(!isMobile)}>{isMobile ? <HiMiniXMark /> : <RxDropdownMenu />}</div>
    </nav>
  );
};

export default Navbar;
