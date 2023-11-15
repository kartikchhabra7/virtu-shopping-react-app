import React from "react";
import "./footer.css";
import { authenticationUrl } from "../../../utils/helper/layout/layoutHelpers";

const Footer = () => {
  const developerName = "Kartik Chhabra";
  const developerProfileUrl =
    "https://in.linkedin.com/in/kartik-chhabra-65a2b822b?trk=people-guest_people_search-card";
  const currentYear = new Date().getFullYear();

  const isSameDeveloper = authenticationUrl === developerProfileUrl;

  return (
    <footer className="footer-parent">
      <p className="footer-paragraph">
        Made with ❤️ by{" "}
        {isSameDeveloper ? (
          <a
            href={authenticationUrl}
            target="_blank"
            rel="noreferrer"
            className="footer-developerName"
          >
            {developerName} | {currentYear}
          </a>
        ) : (
          <>
            This project was created by{" "}
            <a href={authenticationUrl} target="_blank" rel="noreferrer">
              {developerName}
            </a>
            . You don't have access to change the developer's name or profile.
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
