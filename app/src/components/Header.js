import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="header__wrapper">
            <h4>lise kyle chapman</h4>
          </div>
          <ul className="nav--right">
            <li><a href="#work">about</a></li>
            <li><a href="#work">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
      )
    }
}

export default Header;
