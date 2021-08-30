import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Profile</Link>
    <Link to="/rockets">Rockets</Link>
    <Link to="/missions">Missions</Link>
    <Link to="/dragons">Dragons</Link>
  </nav>
);

export default Header;
