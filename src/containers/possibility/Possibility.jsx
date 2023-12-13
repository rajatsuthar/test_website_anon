import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime enim magnam, consequuntur, doloremque vitae sit laborum nam saepe quidem excepturi dolores architecto nobis minus doloribus?
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
