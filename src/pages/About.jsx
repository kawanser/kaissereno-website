import React from "react";
import Hero from "../components/hero/Hero";
import Introduction from "../components/hero/Introduction";
import Services from "../components/hero/Services";
import Reasons from "../components/hero/Reasons";
import Outro from "../components/hero/Outro";

const About = () => {
  return (
    <div id="about">
      <Hero />
      <Introduction />
      <Services />
      <Reasons />
      <Outro />
    </div>
  );
};

export default About;
