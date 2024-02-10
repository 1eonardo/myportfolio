import React, { useState } from 'react';
import "./header.css";
import "./headerstyle.css";
import {Link} from 'react-scroll';
import { motion } from "framer-motion"

const Header = () => {

    /*============Tonggle Menu==================*/

    const[Toggle, showMenu] = useState(false); 

       /*============Dark & Light Mode==================*/
       let clickedClass = "active";
       const body = document.body;
       const lightTheme = "light";
       const darkTheme = "dark";
       let theme;
     
       if (localStorage) {
         theme = localStorage.getItem("theme");
       }
     
       if (theme === lightTheme || theme === darkTheme) {
         body.classList.add(theme);
       } else {
         body.classList.add(lightTheme);
       }
     
       
       const switchTheme = (e) => {
        if (theme === darkTheme) {
          body.classList.replace(darkTheme, lightTheme);
          e.target.classList.remove(clickedClass);
          localStorage.setItem("theme", "light");
          theme = lightTheme;
        } else {
          body.classList.replace(lightTheme, darkTheme);
          e.target.classList.add(clickedClass);
          localStorage.setItem("theme", "dark");
          theme = darkTheme;
        }
      };
      

       const [activeLink, setActiveLink] = useState('');

       const links = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'quality', label: 'Experience' },
        { id: 'projects', label: 'Portfolio' },
        { id: 'footer', label: 'footer' },
      ];

      const handleScroll = () => {
        const scrollY = window.scrollY;
        for (const link of links) {
          const section = document.getElementById(link.id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              setActiveLink(link.id);
              break;
            }
          }
        }
      };
    
      window.addEventListener('scroll', handleScroll);

      
  return (
    <motion.header initial={{y:-200}} animate={{y:0, transition:{duration:1}}} className='header'>
        <nav className="nav contenedor">
        <div className='nav_icon_before'></div>     

            <div className={Toggle ? "nav_menu show-menu" : 
            "nav_menu"}>
                <ul className="nav_list grid">
                {links.map(link => (
                      <li className="nav_item" key={link.id}>
                        <Link
                          to={link.id}
                          smooth={true}
                          duration={500}
                          className={`nav_link ${activeLink === link.id ? 'active' : ''}`}
                          onClick={() => setActiveLink(link.id)}
                        >
                          <i className={`uil uil-${link.id} nav_icon`}></i>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                      <button
                        className={theme === darkTheme ? "dark switch active" : "dark switch"}
                        id="darkMode"
                        onClick={(e) => switchTheme(e)}
                      >
                        <span className='darkicon'><i className='uil-sun'></i></span>
                        <span className='darkicon'><i className='uil-moon'></i></span>
                      </button>

                </ul>


                <i className="uil uil-times nav_close" 
                onClick={() => showMenu(!Toggle)}
                ></i>
            </div>
           
            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>               
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </motion.header>
  )
}

export default Header
