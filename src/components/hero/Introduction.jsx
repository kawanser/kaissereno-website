import React from "react";
import selfPortrait from "../../assets/gifs/self-portrait.gif";

const Introduction = () => {
  return (
    <div className="intro">
      <p>Who I Am</p>
      <div className="container intro-description">
        <img src={selfPortrait} alt="Kaisser Sereno self-portrait gif" />
        <p>I'm Kai</p>
        <p>
          I’m a creative full-stack developer passionate about designing and
          building modern web experiences. I focus on frontend development, UI
          design, and interactive animations—bringing ideas to life in a way
          that feels both functional and expressive.
        </p>
        <button>Check out my works →</button>
      </div>
    </div>
  );
};

export default Introduction;
