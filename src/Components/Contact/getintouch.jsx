import React from 'react';
import { PiContactlessPaymentLight } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

function Getintouch() {
  return (
    <div className="getintouch-container">
      {/* <FaHandshake className="hand-icon"/> */}
      <h4>Need a website that works?</h4>
      <h1>Let's Talk</h1>
      <a href="/contact"><p>Contact Us</p> <PiContactlessPaymentLight className='cont-icon' /></a>
      </div>
  )
}

export default Getintouch;
