import React, {useState, useEffect } from 'react'
import './project.css';
import Menu from '../projects/Menu';
import ScrollReveal from 'scrollreveal';

const Projects = () => {

    const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' is the default category
    const allProjects = Menu; // Store all projects separately

    // Initialize items state with all projects
    const [items, setItems] = useState(allProjects);

    const filterItem = (categItem) => {
        setSelectedCategory(categItem);

        if (categItem === 'all') {
            setItems(allProjects); // If 'All' is selected, show all projects
        } else {
            const updateItems = allProjects.filter((curElem) => {
                return curElem.category === categItem;
            });
            setItems(updateItems);
        }
    };

    useEffect(() => {
        const sr = ScrollReveal({
          reset: true,
          distance: '60px',
          duration: 1000,
          delay: 400,
        });
    
        sr.reveal('.title_work, .section_about-subtitle, .project_categories', { delay: 500, origin: 'left' });
        sr.reveal('.porfolio_container', { delay: 500, origin: 'bottom', interval: 200 });

      }, []);
  return (
    <section className='work section contenedor' id='portfolio'>
        <h2 className='section_title title_work'>Portfolio</h2>
        <span className="section_about-subtitle">Most recent work</span>

        <div className='project_categories'>
            <button className={`category_btn text-xs ${selectedCategory === 'all' ? 'active-work' : ''}`} onClick={() => filterItem('all')}>ALL</button>
            <button className={`category_btn text-xs ${selectedCategory === 'reactjs' ? 'active-work' : ''}`} onClick={() => filterItem('reactjs')}>ReactJs</button>
            <button className={`category_btn text-xs ${selectedCategory === 'landingPage' ? 'active-work' : ''}`} onClick={() => filterItem('landingPage')}>Landing Page</button>
            <button className={`category_btn text-xs ${selectedCategory === 'mobile' ? 'active-work' : ''}`} onClick={() => filterItem('mobile')}>Mobile Apps</button>
            <button className={`category_btn text-xs ${selectedCategory === 'angular' ? 'active-work' : ''}`} onClick={() => filterItem('mobile')}>Angular</button>
        </div>


        <div className='contenedor porfolio_container'>
            {
                items.map((elem) =>{
                    const {name, img, description, lenguage, linkCode, linkDemo} = elem;

                    return (
                        <article className='project_item'>

                            <div className='portfolio_item-image'>
                            <img src={img} alt={name} className='project_img'/>
                            </div>

                            <h3 className='project_title'>{name}</h3>
                            <p className='project_description'>
                                {description}
                            </p>
                            
                            <h3 className='project_lenguages'>{lenguage}</h3>
            
                            <div className='container_btn'>                    
                                <a href={linkCode} className='btndemo' target='_blank' rel='noopener noreferrer'>
                                    Code <i className="uil uil-github nav_icon2"></i>
                                </a>
                                <a href={linkDemo}className='btndemo btn-primary' target='_blank' rel='noopener noreferrer' >
                                    Live Demo <i className="uil uil-arrow-up-right nav_icon2"></i>
                                </a>
                            </div>
                        </article>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Projects
