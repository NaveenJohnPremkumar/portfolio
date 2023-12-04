import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is NaveenJohn</h2>
        <div className="prompt">
          <p>A computer science student with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/naveenjohn-premkumar/"><LinkedInIcon /> </a>
          <EmailIcon />
          <a href="https://github.com/NaveenJohnPremkumar"> <GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, Flutter, NPM, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Flask, RShiny, MySQL, MongoDB, Hadoop, AWS , SQLite, REST API
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, R, Kotlin, MATLAB</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
