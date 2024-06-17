import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/img/3d/machine1.jpg";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
        <img className="logoHeader" src={Logo} alt="logo"></img>
        <ul className="navbar-links">
          <li className="navbar-item">
          </li>
          <li className="navbar-item">
          </li>
        </ul>
      </div>
        
    );
};

export default Header;