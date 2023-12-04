import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("2001-08-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
      👋 I'm Pratik Shringarpure. I am a recent graduate from Nutan College of Engineering in Pune, specializing in Front-End Development. With a strong foundation in HTML, CSS, and React, I am passionate about leveraging these skills to create visually stunning and user-friendly websites.I am committed to continuous learning and growth in the dynamic field of web development. I am excited to contribute my expertise to innovative projects and collaborate with like-minded professionals to deliver exceptional web experiences.
      </div>
    </div>
  )
}
export default About;
