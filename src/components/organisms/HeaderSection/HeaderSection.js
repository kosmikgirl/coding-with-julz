import React, { useEffect } from "react";
import { NavBar } from "../../molecules/NavBar/NavBar";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./HeaderSection.scss";

import JulzLogo from "../../../assets/logos/julz-logo2.png";

import IntroGif from "../../../assets/gifs/intro-gif.mp4";

gsap.registerPlugin(TextPlugin);

export const HeaderSection = () => {
  useEffect(() => {
    const words = ["Julz.", "A Traveler.", "A Developer.", "A Human?"];
    gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });
    let boxTl = gsap.timeline();

    boxTl
      .to(".box", {
        duration: 1,
        width: "20vh",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hi", {
        duration: 1,
        y: "9vw",
        ease: "power3.out",
        onComplete: () => {
          masterTl.play();
        },
      })
      .to(".box", { duration: 1, height: "9vh", ease: "elastic.out" })
      .to(".box", { duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1 });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".text", { duration: 1, text: word });
      masterTl.add(tl);
    });
  }, []);

  return (
    <header className="header-container">
      <NavBar />
      <img src={JulzLogo} className="principal-logo" alt="logo" />
      <h1 className="copywriting-animation">
        <span className="box"></span>
        <span className="hi">Hi, I'm</span>
        <span className="text"></span>
        <span className="cursor">_</span>
      </h1>
      <video autoPlay muted loop className="header-ilustration">
        <source src={IntroGif} type="video/mp4" />
      </video>
    </header>
  );
};
