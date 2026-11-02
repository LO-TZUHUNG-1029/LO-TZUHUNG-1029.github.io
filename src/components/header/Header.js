import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  educationInfo,
  featuredProject,
  bigProjects,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {skillsSection.display && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {educationInfo.display && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {workExperiences.display && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {(featuredProject.display || bigProjects.display) && (
            <li>
              <a href={featuredProject.display ? "#featured" : "#projects"}>
                Projects
              </a>
            </li>
          )}
          {achievementSection.display && (
            <li>
              <a href="#achievements">Awards</a>
            </li>
          )}
          {resumeSection.display && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;