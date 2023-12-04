import React, { useState, useRef } from 'react'

import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { saveAs } from "file-saver";
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Tap again', 'Helllo', 'You found this', 'I added this...', 'because it seemed cool', `so here's something`, 'did you know that...', `You can't breathe and talk.`, 'the earth is 71% water.', `It snows in the Sahara Desert
`,]
  const textContent = useRef();
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/file/d/1OTwRfawYFCC9gOO9iLRrwyZ7W0wWN11e/view?usp=sharing",
    )
  }

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      // something will be here soon
      setTimeout(() => {
        textContent.current.style.display = 'none'
        animateScroll.scrollTo(350)
        setNumber(1)
      }, 1000);
    }
  }

 


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Hi, I'm Pratik Shringarpure!
          </span>
          <span>
            <span>
              👋🏾
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              Tap again
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Web Developer',
            "Don't Forget to Scroll"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          
          <a  className="btn1" href="mailto:shringarpure95@gmail.com" >Hire me</a>
         
          <a  href="https://drive.google.com/file/d/1OTwRfawYFCC9gOO9iLRrwyZ7W0wWN11e/view?usp=sharing" className='btn2'>View Resume</a>
         
          </div>
      </div>

    </div >
  )
}

export default Home;
