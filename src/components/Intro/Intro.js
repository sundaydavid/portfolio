import React from "react";
import "./intro.css";
import bg from "../../assets/me.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sunday David,</span>
          <br />A Software Engineer
        </span>
        <p className="introPara">
          The goal isn't to build software. The goal is to build an idea <br />
          with a willingness to allow it to sprout out a brighter
          <br /> essence. I'm currently building an e-commerce website
          <br />
          that will allow users to select the store they will like to make their
          purchase.
          <br />
          I'm working with a team of young graduate 2023
        </p>
        <Link>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="btn"
          >
            👨‍💻 Hire Me
          </button>
        </Link>
      </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
