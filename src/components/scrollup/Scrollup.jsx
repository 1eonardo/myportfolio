import React from 'react';
import './scrollup.css';
import { Link } from 'react-scroll';

const Scrollup = () => {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }
  window.addEventListener('scroll', scrollUp);

  return (
    <Link to="home" smooth={true} duration={500} className="scrollup" id="scroll-up">
       <i className="uil uil-arrow-up scrollup_icon"></i>
    </Link>
  );
};

export default Scrollup;
