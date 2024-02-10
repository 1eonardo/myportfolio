import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
    <h1 style={{
        position: 'absolute',
        marginBottom: 'var(--mb-1)',
        paddingLeft: '2.5rem',
        fontFamily: 'var(--about-name-font)',
        fontSize: 'var(--h3-font-size)',
        fontWeight: 'var(--font-normal)',
        top: '0.2rem',
        color: '#22c194'
    }}>
      <Typewriter
        options={{
            strings : ["Web Developer", "Dev ReactJS", "Dev Front-end"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
        }}     
      />
    </h1>
    </>
  )
}

export default Type
