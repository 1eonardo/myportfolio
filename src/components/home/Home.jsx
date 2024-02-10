import React from 'react';
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from './ScrollDown';
import { motion } from "framer-motion"

const Home = () => {
  return (
    <section className='home section' id="home">
        <div className='home_container contenedor grid'>
            <div className='home_content grid'>
                <Social />
                <div className="bg-[--bg-home-color1] absolute rounded-full blur-[70px] -z-10 w-[30rem] h-[20rem] ml-[35rem] mt-[-20px] blurcircle"></div>
                <div className="bg-[--bg-home-color2] absolute rounded-full blur-[70px] -z-10 w-[50rem] h-[25rem] ml-[-10rem] mt-[-20px] blurcircle2"></div>
                <motion.div initial={{ opacity:0 }} animate={{opacity:1, transition:{duration:1}}} className='home_img'></motion.div>
                
                <Data/>
            </div>

            <ScrollDown />
            
        </div>
    </section>
  )
}

export default Home
