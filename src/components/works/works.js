import React from "react";
import "../works/works.css";
import admin from "../../assets/admind.png";
import crypto from "../../assets/crypto.png";
import dogf from "../../assets/dogf.jpeg";
import gpt from "../../assets/gpt.png";
import pos from "../../assets/pos.png";
import stripe from "../../assets/stripe.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I have been trying my best to integrate and also learn new things with
        the time i have. Some of my project are listed below. You can check my
        repo for more by clicking the button below
      </span>
      <div className="worksimages">
        <img src={admin} alt="worksss" className="worksImg" />
        <img src={crypto} alt="worksss" className="worksImg" />
        <img src={dogf} alt="worksss" className="worksImg" />
        <img src={gpt} alt="worksss" className="worksImg" />
        <img src={pos} alt="worksss" className="worksImg" />
        <img src={stripe} alt="worksss" className="worksImg" />
      </div>

      <a href="https://github.com/sundaydavid">
        <button className="worksBtn">See more</button>
      </a>
    </section>
  );
};

export default Works;
