import React, { useEffect } from 'react';
import "./about.css";
import CV from '../../assets/Curriculum_Leo.pdf';
import Info from './Info';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 1000,
      delay: 400,
    });

    sr.reveal('.section_title', { delay: 500, origin: 'left' });
    sr.reveal('._about', { delay: 500, origin: 'left' });
    sr.reveal('.info', { delay: 500, origin: 'bottom', interval: 200 });
    sr.reveal('.about_description', { delay: 500, origin: 'bottom', interval: 200 });
    sr.reveal('.button_about', { delay: 500, origin: 'bottom', interval: 200 });
    sr.reveal('.Oval', { delay: 500, origin: 'top', interval: 200 });
  }, []);

  return (
    <section className='about section' id='about'>
        <h2 className="section_title title_about">About Me</h2>
        <span className="section_about-subtitle _about">My introduction</span>
        

        <div className="about_container contenedor grid">

            <div className='Oval'>
              <div className="about_img"></div>
            </div>

            <div className="about_data">

                <div className="info">
                 <Info />
                </div>

                <p className="about_description">Passionate about 
                working on new and challenging problems. Frontend 
                Developer I create web page with UI & UX user interface, 
                adaptability to new technologies and teamwork. </p>

                <a dowload="" href={CV} className="button_about 
                button--about">Download CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
