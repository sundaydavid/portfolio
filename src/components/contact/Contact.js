import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xg4n1bl",
        "template_a73hetf",
        form.current,
        "mUzHOzVIVAtiej1jg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          {" "}
          I have had the opportunity to work with a few organizations.
          <br />
          Some of the notable organizationsi have worked with include:
        </p>
        <div className="clientImgs">
          <img
            src="https://irs.ebsgov.org/assets/images/logo.jpeg"
            alt="clientImg"
            className="clientImg"
          />
          {/* <img src={fullstack} alt="clientImg" className="clientImg" /> */}
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any job opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            className="email"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            rows={5}
            className="msg"
            placeholder="your Message"
          />
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a href="https://web.facebook.com/bianca.sunny.397/">
              <img
                className="link"
                src="https://static.vecteezy.com/system/resources/previews/009/673/694/non_2x/glossy-facebook-3d-render-icon-free-png.png"
                alt=""
              />
            </a>
            <a href="https://github.com/sundaydavid">
              <img
                className="link"
                src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/sunday-david-951369266">
              <img
                className="link"
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
                alt=""
              />
            </a>
            <a href="https://x.com/Sunday_David_U?t=LImnpTdP5uy4-oRw90M8vA&s=09">
              <img
                className="link"
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/91/ef/67/91ef67ae-4877-1286-a4d6-fb04f6f37e9e/ProductionAppIcon-2x-4-0-0-85-220.png/1200x630bb.png"
                alt=""
              />
            </a>
            <a href="https://wa.me/message/OHCJXEQFXCUOB1">
              <img
                className="link"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                alt=""
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
