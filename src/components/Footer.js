import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon href="https://www.instagram.com/naveenjohnp/"/>
        <LinkedInIcon href="https://www.linkedin.com/in/naveenjohn-premkumar/"/>
      </div>
      <p> © 2023 NaveenJohn Premkumar. All rights reserved.</p>
      <p> Contact Me: naveenjp@umich.edu</p>
        
    </div>
  );
}
export default Footer;
