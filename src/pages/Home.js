import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is NaveenJohn</h2>
        <div className="prompt">
          <p>A computer science student with a passion for learning and creating.</p>
          {/* LinkedInIcon with visually hidden text */}
          <a href="https://www.linkedin.com/in/naveenjohn-premkumar/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <span className="visually-hidden">LinkedIn</span>
          </a>
          <a href="https://docs.google.com/document/d/1ksp43p7g2-q_8TjGgEdeAwrcUBMPpMdL/edit?usp=sharing&ouid=114331357844534747938&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            <InsertDriveFileIcon />
            <span className="visually-hidden">Resume</span>
          </a>
          {/* GithubIcon with visually hidden text */}
          <a href="https://github.com/NaveenJohnPremkumar" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            <span className="visually-hidden">GitHub</span>
          </a>
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
