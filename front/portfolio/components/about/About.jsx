import React from "react";
import "./about.css";
import me from '../../src/assets/me.jpg'

const About = () => {
  return (
    <>
      <div className="about_section">
        <div className="header bebas-neue-regular">
          {" "}
          <h1>
            <span>Hello!</span>{" "}
            <span className="bold" style={{ color: "white" }}>
              I'm Tyrell,
            </span>{" "}
            <span> Junior Full Stack Developer</span>{" "}
             
          </h1>
       
        </div>
        <div className="image">   <img className="mypic" src={me} alt="" /></div>
        <div className="aboutme ">
          <h3 className="header bebas-neue-regular">
            A short summary About me...{" "}
          </h3>
          <p className="bebas-neue-regular">
            {" "}
            I'm 26 from <span className="bold">Harlem, NY</span>. I graduated
            from the{" "}
            <span>
              {" "}
              Per Scholas software development & engineering program in April
              2024{" "}
            </span>
            specializing in the MERN stack which this portfolio is made in! I started my
            journey into web development a little over{" "}
            <span className="bold">8 months ago</span> from a close friend of
            mine once I learned a new way to break things down and create
            something, ive always the kind of person to open something up to see
            how it works and put it back together again and being a developer
            fuels that while also stimulating me creatively and it allows me to
            use my head to solve problems.{" "}
            <span>
              I have foundations in content creation, graphic design, editing
              and some marketing
            </span>
            , in my professional roles some of the skills I've developed are{" "}
            <span className="bold-red">leadership</span>,{" "}
            <span className="bold-red">team</span> building,{" "}
            <span className="bold-red">community</span> building and
            user/customer experience, I like to work passionately and be
            reliable and I have many colleagues that can vouch for that. Some of
            my hobbies and interests include fashion, music, skateboarding,
            gaming and making content and my hope is to be able to join a team
            or a company to make beautiful projects surrounding something that
            i'm highly passionate in.
          </p>
        </div>
        <div className="contact ">
          <a
            href="https://docs.google.com/document/d/1KEkCxR6eU1x7PWA99RHF2izeleCX0ENhyCcCy1jmqsE/edit?usp=sharing"
            target="blank"
          >
            <button className="about-btn bebas-neue-regular"> Resume</button>
          </a>
          <a href="mailto:tyrellcoleman43@gmail.com" target="blank">
            <button className="about-btn bebas-neue-regular">Email</button>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
