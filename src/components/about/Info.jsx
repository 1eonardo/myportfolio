import React from 'react'
import "./about.css";

const Info = () => {

  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <span className='about_info-title'>04+</span>
            <span className='about_info-name'>Years experience</span>
        </div>
        <div className='about_box'>
            <span className='about_info-title'>30+</span>
            <span className='about_info-name'>Completed project</span>
        </div>
        <div className='about_box'>
            <span className='about_info-title'>6+ | 5+</span>
            <span className='about_info-name'>Skills {`\tLanguage`} & framworks</span>
        </div>
    </div>
  )
}

export default Info
