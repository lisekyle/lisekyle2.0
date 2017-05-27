import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="header__wrapper">
            <h1>lise kyle chapman</h1>
            <h4 className="mono">designer who codes based in san francisco. i like making things that help and inspire people.</h4>
          </div>
            <ul className="nav--right">
              <li className="underline--small"><a href="#work">work</a></li>
              <li className="underline--small"><a href="#contact">contact</a></li>
            </ul>
        </div>
      )
    }
}

export default Header;
