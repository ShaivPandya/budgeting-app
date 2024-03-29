import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <Link to="/">
          <h1>
            <img src={require('../../assets/biller_logo.png')} alt="logo" />
            <p>Treasury</p>
          </h1>
        </Link>
      </div>
    </header>
  );
}
