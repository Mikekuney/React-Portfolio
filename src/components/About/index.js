import React from 'react'
// importing image
import profileImage from "../../assets/images/Profile.jpg";

// About component
function About() {
  return (
    <section className='profile'>
      <div className='aboutme' id="about">
        <h1> About Me!</h1>
      </div>
      <div>
        <img
          src={profileImage}
          alt="about-me"
          className="profile-image"
        />
      </div>
      <div className='left'>
        <p>
         
        </p>
      </div>
    </section>
  )
}

export default About;