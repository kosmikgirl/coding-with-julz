import React, { useState } from "react";
import "./NavBar.scss";
import Hamburger from "hamburger-react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { useScrollSections } from 'react-scroll-section';


export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const sections = useScrollSections();

  return (
    <Router>
      <nav>
        <ul className="nav-container">
          <div className={`${isOpen ? "responsive-menu" : "desktop-menu"}`}>
            <button className="mobile-toggle">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#5f6366" />
            </button>
            {sections.map(({ id, onClick, selected }) => (
              <li key={id} onClick={onClick} selected={selected}>
                <Link to={`/${id}`}>{id.replaceAll('-', ' ')}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </Router>
  );
};
