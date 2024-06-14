import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container" >
        <div className="about" >
          <div className="pfp">
          <h1 className='kanit-regular'>Tyrell Coleman</h1>
          </div>
          <div className="text">
            <h2 className='kanit-regular'>About Me</h2>
            <p className='dosis'>Hello! I'm Tyrell, I'm 26 from Harlem, NY. I graduated from the Per Scholas software development & engineering program in April 2024 specializing in the MERN stack which this portfolio will be made in! I consider myself a jack of all trades because I like to do everything but Im currently a security profesional looking to transition into the tech space for a new career. I've developed the passion for web development a little over 6 months ago from a close friend of mine once I learned a new way to express myself creatively. I have foundations in content creation, graphic design, editing and some marketing, in my professional roles some of the skills I've developed are leadership, team building, community building and user/customer experience, I like to be reliable and I have many old colleagues that can vouch for that. Some of my hobbies and interests include making clothes, music, skateboarding, gaming and making content and my hope is to be able to join a team or a company to make beautiful projects surrrounding something I am highly passionate in. Heres a link to my <a target='blank' href="https://github.com/TyrellC97?ocid=AIDcmmcwpj1e5v_SEM__k_CjwKCAjw1K-zBhBIEiwAWeCOF75E2UmObM2WUb2Pnea-lTbdqPSsC0EdGWBIxUrpDw-GsmBXOdJi2xoCCOAQAvD_BwE_k_">Github</a> and some of my favorite projects so far are the <a target='blank' href="https://github.com/TyrellC97/rubiks-cube">Rubiks Cube</a> and my final project for Per Scholas <a target='blank' href="https://final-capstone-frontend-y54c.onrender.com/">Vibeout</a> a full stack MERN application meant to be a mock social media platform.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
