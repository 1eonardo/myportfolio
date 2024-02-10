import React, { useEffect } from 'react';
import './skills.css';
import ScrollReveal from 'scrollreveal';

const Skills = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          reset: true,
          distance: '60px',
          duration: 1000,
          delay: 400,
        });
    
        sr.reveal('.section_subtitle', { delay: 500, origin: 'left' });
        sr.reveal('.skills_container', { delay: 500, origin: 'bottom', interval: 200 });
      }, []);
  return (
    <section className="skills section" id='skills'>
      
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills_container contenedor grid">
            <div>

        {/* ===============Acordion 1============== */}
                <div className="skills_content">
                    
                    <input type="radio" name="tab" id="tab-1" defaultChecked={true}/>
                    <label htmlFor='tab-1'>
                        
                        <i className="uil uil-brackets-curly skills_icon"></i>

                        <div>
                            <h1 className="skills_titles">Frontend developer</h1>
                            <span className="skills_subtitle">More that 1 years</span>
                        </div>

                        <i className="uil uil-angle-down skills_arrow"></i>
                    </label>

                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">HTML</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_html"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_css"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_js"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">React</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_react"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Tailwind</h3>
                                <span className="skills_number">40%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_tailwind"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Framer Motion</h3>
                                <span className="skills_number">40%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_framer"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Gsap</h3>
                                <span className="skills_number">40%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_gsap"></span>
                            </div>
                        </div>

                    </div>
              
                </div>

        {/* ===============Acordion 2============== */}
                <div className="skills_content">
                    
                    <input type="radio" name="tab" id="tab-2"/>
                    <label htmlFor='tab-2'>
                        <i className="uil uil-server-network skills_icon"></i>

                        <div>
                            <h1 className="skills_titles">Backend developer</h1>
                            <span className="skills_subtitle">More that 1 years</span>
                        </div>

                        <i className="uil uil-angle-down skills_arrow"></i>

                    </label>

                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">PHP</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_php"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Mysql</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_mysql"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Node Js</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_nodejs"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Typescript</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_type"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Firebase</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percentage skills_fire"></span>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>

        {/* ===============Acordion 3============== */}

            <div>
                <div className="skills_content">
                        
                        <input type="radio" name="tab" id="tab-3"/>
                        <label htmlFor='tab-3'>
                            <i className="uil uil-swatchbook skills_icon"></i>

                            <div>
                                <h1 className="skills_titles">Others</h1>
                                <span className="skills_subtitle">More that 1 years</span>
                            </div>

                            <i className="uil uil-angle-down skills_arrow"></i>
                        </label>
                     
                        <div className="skills_list grid">
                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">C# .net</h3>
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_csharp"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">SQL server</h3>
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sql"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Bunifu Framework C#</h3>
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_bunifu"></span>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </div>
            
        </div>
    </section>
  )

}

export default Skills
