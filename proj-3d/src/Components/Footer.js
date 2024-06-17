import React from "react";
import Logo from "../assets/img/infoccase3D.jpg";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-text"> © Infoccase3D Campus Dev 2024</div>
        <img className="logoFooter" src={Logo} alt="logo" />
      </div>
    </footer>
  );
}
  