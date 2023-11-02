import React from "react";
import "./skill.css";
import mobileApp from "../../assets/mobDev.png";
import websiteDve from "../../assets/webdev.jpg";
import backendDev from "../../assets/backend.jpeg";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I'm responsible for designing, developing, testing, deploying and
        maintaining of software applications and systems, in collaboration with
        other team members or any other firm being employ
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={websiteDve} alt="skillImgs" className="skillBarImg" />
          <div className="skillBartext">
            <h2>Full Stack Developer</h2>
            <p>I work mostly as a fullstack software engineer by turning the ideas into finishing product</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mobileApp} alt="skillImgs" className="skillBarImg" />
          <div className="skillBartext">
            <h2>Mobile Application Development</h2>
            <p>I build both single and cross platform applications with the help of Java and Flutter</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backendDev} alt="skillImgs" className="skillBarImg" />
          <div className="skillBartext">
            <h2>Backend Engineer</h2>
            <p>I generate Apis and integrate other security measures in both web and mobile applications using SPRINGBOOT </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
