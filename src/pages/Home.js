import React from "react";

import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, I am Balqis!</h2>
        <div className="prompt">
          <p>
            I am a passionate Multimedia Computing student with a strong
            determination to build a career as a front-end developer. My skills
            encompass both design and programming. I have acquired most of these
            skills through self-learning and continuous growth throughout my
            studies. Feel free to get in touch via email. Have a nice day!
          </p>
          <a
            href="https://www.linkedin.com/in/balqiszulkafli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills : </h1>
        <ol className="list">
          <li className="item">
            <h3>Front-End</h3>
            <span>Beginner : Flutter, HTML, CSS, React</span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>Beginner : Javascript, C++, Java, </span>
          </li>
          <li className="item">
            <h3>Tools</h3>
            <span>Canva, Jira, GitHub, VSC, DrawIO </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
