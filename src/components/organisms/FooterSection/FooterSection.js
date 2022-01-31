import React from "react";
import "./FooterSection.scss";

const socialMedia = ["Twitter", "LinkedIn", "GitHub", "Email"];

export const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inspirational">
        <p>
          Collect moments, not things. And always do it with love, hard-work,
          and inspiration
        </p>
      </div>
      <div className="footer-social">
        <ul>
          {socialMedia.map((social) => {
            return <li>{social}</li>;
          })}
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Handcrafted with &#9825; by me &copy; codingwithjulz</p>
      </div>
    </footer>
  );
};
