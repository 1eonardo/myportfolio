import React from 'react'
import Type from './Type'
import {Link} from 'react-scroll';
import { motion } from "framer-motion"

const textVariants = {
  initial:{
    x: -300,
    opacity:0
  },

  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    },
  },
};


const Data = () => {
  return (
      <motion.div variants={textVariants} initial="initial" animate="animate" className="home_data">
            <motion.h1 variants={textVariants}
            className="home_title">Leonardo Flores</motion.h1>
            <motion.h3 variants={textVariants}
            className='home_subtitle'>I'm<Type/></motion.h3>
            <motion.p variants={textVariants}
            className="home_description">I'm a person who is open to 
            new opportunities, I really like Software Development, 
            I'm very passionate and dedicated to my work.</motion.p>
            <Link to="footer" smooth={true} duration={500} className="home_scroll-button button--flex">
            <motion.a initial={{ x: -500, opacity:0 }} animate={{x:0, opacity:1, transition:{ duration: 1, staggerChildren: 0.1}}} 
            href="#footer" className="button button--flex">
                Say Hello              
            </motion.a>
            </Link>
      </motion.div>
  );
};

export default Data;
