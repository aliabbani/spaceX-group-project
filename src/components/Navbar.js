import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <>
      <nav className="navBar">
        <div className="left-nav">
          <img src={logo} alt="logo" className="logo-nav" />
          <h1 className="main-title">Space Travelers Hub</h1>
        </div>
        <ul className="nav-elements">
          {links.map((link) => (
            <li className="right-nav-li" key={link.id}>
              <NavLink to={link.path} className="left-nav-a" activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="line-bot" />
    </>
  );
};

export default Navbar;
