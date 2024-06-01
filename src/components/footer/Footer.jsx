import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By JayaPrakash (Full stack Developer).
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/jayaprakash2004"><FaGithub /></a>
          </span>
          
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.instagram.com/jayaprakash_sankula/"><FaInstagram /></a> 
          </span>
        
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/sankula-jayaprakash-7bba95225/"><FaLinkedin /></a> 
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;