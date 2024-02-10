import React from 'react';
import {Link} from 'react-scroll';
import { motion } from "framer-motion"

const ScrollDown = () => {
  return (
    <motion.div initial={{ x: -300, opacity:0 }} animate={{x:0, opacity:1, transition:{ duration: 1, staggerChildren: 0.1}}} 
    className='home_scroll'>
    <Link to="about" smooth={true} duration={500} className="home_scroll-button
      button--flex">
        <span className='home_scroll-name'>Tech Stack</span>
        <h className="signo"> | </h>
        <i className='bx bxl-html5 home_html5'></i>
        <i className='bx bxl-css3 home_css'></i>
        <i className='bx bxl-javascript home_js'></i>
        <i className='bx bxl-react home_react' ></i>
        <i className='bx bxl-tailwind-css home_tail' ></i>
        <i className='bx bxl-sass home_sass'></i>
        <i className='bx'>
          <svg className='bx home_framer'
            height="19px" 
            viewBox="3.7 3.7 43.6 43.6" 
            width="17px" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" 
            fill="#59529d"/>
            <path d="m47.3 25.5v21.8l-10.9-10.9z" 
            fill="#5271b4"/>
            <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" 
            fill="#bb4b96"/>
          </svg>
        </i>
        
    </Link>
    </motion.div>
  )
}

export default ScrollDown
