import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
      const isActiveHash = (hash) => window.location.hash.indexOf(hash) !== -1;
      const isActivePath = (path) => window.location.pathname.indexOf(path) !== -1;

      console.log([isActiveHash('work'), isActiveHash('contact'), isActivePath('about')])

      return (
        <div className="header">
          <div className="header__wrapper">
            <h4>lise kyle chapman</h4>
          </div>
          <ul className="nav--right">
            {!isActivePath('about') && <li><Link className="fancy-underline" to="/about">about</Link></li>}
            {!isActiveHash('work') && <li><a className="fancy-underline" href="#work">portfolio</a></li>}
            {!isActiveHash('contact') && <li><a className="fancy-underline" href="#contact">contact</a></li>}
          </ul>
        </div>
      )
    }
}

export default Header;
