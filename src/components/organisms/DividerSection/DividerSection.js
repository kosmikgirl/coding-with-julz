import React from "react";
import "./DividerSection.scss";
import CodingJulz from "../../../assets/images/coding-julz.png";

import { AnimatedTitle } from "../../molecules/AnimatedTitle/AnimatedTitle";

export const DividerSection = () => {
  const frontEndTitle = "Front-end+Developer+&+Mentor";

  return (
    <section className="divider-container">
      <div className="divider-title">
        <h2 className="title-desktop">
          {frontEndTitle.split("").map((letter) => {
            return <AnimatedTitle letter={letter} />;
          })}
        </h2>
        <h2 className="title-mobile">Front-end Developer &#38; Mentor</h2>
        <h4>
          I design and code beautifully simple things, and I love what I do.
        </h4>
      </div>
      <div className="divider-vector">
        <img src={CodingJulz} alt="Coding Girl" />
      </div>
      <div className="divider-content">
        <div className="divider-text">
          <h2> Hi, I’m Julz. Nice to meet you.</h2>
          <p>
            Since the beginning of my journey as a Front End Developer nearly 6
            years ago, I've done remote work for agencies, consulted for
            startups, and collaborated with talented people to create amazing
            digital applications and landing pages. I'm naturally curious, and
            continuously working on improving my tech skills never forgetting
            have fun on the road!
          </p>
        </div>
      </div>
    </section>
  );
};
