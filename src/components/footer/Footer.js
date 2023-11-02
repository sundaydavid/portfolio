import React from "react";
import "./footer.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      Copyright &copy; {currentYear} Sunday David U. All rights Reserved
    </footer>
  );
};

export default Footer;
