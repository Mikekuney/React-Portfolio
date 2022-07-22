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
         Hi, My name is Michael Kuney and i am a very enthusiastic and eag individual willin got take on new challenges.  I have been a Culinary Chef for 24+ years and studied at C.I.A., The Culinary Institute of America. i am now persuing a career in full stack web development and will be graduatig from UNC Chapel Hill's FSF Bootcamp July of 2022.  Can't wait to get out there and see where this new career will take me!!
        </p>
      </div>
    </section>
  )
}

export default About;