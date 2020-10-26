import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../components/images/raspberry logo cropped.jpg";

const Header = () => {
  return (
      <div className="ui segment">
        <img src={logo} alt="Logo"/>
      </div>
  );
};

export default Header;
