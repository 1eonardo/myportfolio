import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <section className='footer'>

        <div className='footer_container'>
            <div className="footer_social">
                <a href='https://www.instagram.com/uidesignnavi/'
                className='footer_social-link' target='_blank' rel="noreferrer">
                    <i className='uil uil-instagram'></i>
                </a>

                <a href='https://www.linkedin.com/in/ing-leonardo-dev/' 
                className='footer_social-link' target='_blank' rel="noreferrer">
                <i className='uil uil-linkedin'></i>
                </a>

                <a href='https://naviux2.wixsite.com/naviuidesign'
                className='footer_social-link' target='_blank' rel="noreferrer">
                <i class='uil bx bxl-wix'></i>
                </a>
            </div>

            <div className='footer_list'>
                <li>
                    <a href='#about' 
                    className='footer_link'>About</a>
                </li>
                <li>
                    <a href='#skills' 
                    className='footer_link'>Skills</a>
                </li>
                <li>
                    <a href='#porfolio' 
                    className='footer_link'>Porfolio</a>
                </li>
                <li>
                    <a href='#contact' 
                    className='footer_link'>Contact Me</a>
                </li>
            </div>

            <span className='footer_copy'>
                Copy&#169; By Developer Leonardo. All rigths reserved
            </span>
        </div>
      </section>
    </div>
  )
}

export default Footer
