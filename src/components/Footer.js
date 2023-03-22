import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer__content">
        <p>&copy; Copyright 2023, Meal Master</p>
        <a href="https://github.com/DesislavaMetodieva/meal-master">
          <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </a>
      </div>
    </>
  );
};

export default Footer;
