import React from 'react'
import { useState, useEffect } from "react";
import "./quality.css";
import ScrollReveal from 'scrollreveal';

function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) =>{
        setToggleState(index);
    }

    useEffect(() => {
        const sr = ScrollReveal({
          reset: true,
          distance: '60px',
          duration: 1000,
          delay: 400,
        });
    
        sr.reveal('.title_quatily', { delay: 500, origin: 'left' });
        sr.reveal('.sub_quality', { delay: 500, origin: 'left' });
        sr.reveal('.qualification_container', { delay: 500, origin: 'bottom', interval: 200 });
      }, []);
  return (
     <section className='qualification section'>
        <h2 className='section_title title_quatily'>Qualification</h2>
        <span className='section_subtitle sub_quality'>My personal journey</span>

        <div className='qualification_container contenedor'>
            <div className='qualification_tabs'>
                <div className={toggleState === 1 ? "qualification_active" : "qualification_button button--flex "}
                onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification_icon'></i>
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification_active" : "qualification_button button--flex "}
                onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification_icon'></i>
                    Work
                </div>
            </div>

            <div className='qualification_sections'>
                {/* ===============QUALIFICATION CONTENT 1============== */}
                <div className={toggleState === 1 ? "qualification_content qualification_active2" : "qualification_content "}>
                    {/* ===============QUALIFICATION 1============== */}
                    <div className='qualification_data'>
                        <div>
                            <h3 className='qualification_title'>System Engineer</h3>
                            <span className='qualification_subtitle'>UCA - Central American University</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2014 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    {/* ===============QUALIFICATION 2============== */}
                    <div className='qualification_data'>
                        <div></div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                        <div>
                            <h3 className='qualification_title'>English Language</h3>
                            <span className='qualification_subtitle'>ELI - English Language Institution</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2015 - 2017
                            </div>
                        </div>
                    </div>

                    {/* ===============QUALIFICATION 3============== */}
                    <div className='qualification_data'>
                        <div>
                            <h3 className='qualification_title'>Operator Micro Computer</h3>
                            <span className='qualification_subtitle'>International Lincoln Nicaragua</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2011 - 2012
                            </div>
                        </div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    {/* ===============QUALIFICATION 4============== */}
                    <div className='qualification_data'>
                        <div></div>

                        <div>
                            <span className='qualification_rounder'></span>
                            {/* <span className='qualification_line'></span>*/}
                        </div>

                        <div>
                            <h3 className='qualification_title'>Computer Repairer</h3>
                            <span className='qualification_subtitle'>C.C.C Comercial Training Center</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2011 - 2012
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* ===============QUALIFICATION CONTENT 2============== */}
                <div className={toggleState === 2 ? "qualification_content qualification_active2" : "qualification_content "}>
                    {/* ===============QUALIFICATION 1============== */}
                    <div className='qualification_data'>
                        <div>
                            <h3 className='qualification_title'>C# Developer</h3>
                            <span className='qualification_subtitle'>Financiera NEFICSA(Exportar e Importar columnas de Excel a una BD sql usando C#)</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2023
                            </div>
                        </div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>

                    {/* ===============QUALIFICATION 2============== */}
                    <div className='qualification_data'>
                        <div></div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                        <div>
                            <h3 className='qualification_title'>Frontend Designer Android</h3>
                            <span className='qualification_subtitle'>DAIN (Infographics Aplication Developed)</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2017
                            </div>
                        </div>
                    </div>

                                        {/* ===============QUALIFICATION 1============== */}
                                        <div className='qualification_data'>
                        <div>
                            <h3 className='qualification_title'>Web Developer</h3>
                            <span className='qualification_subtitle'>ASOCHIVIDA (Chichigalpa) - Social Work</span>
                            <div className='qualification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2016
                            </div>
                        </div>
                        <div>
                            <span className='qualification_rounder'></span>
                            <span className='qualification_line'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>

     
  )
}

export default Qualification
