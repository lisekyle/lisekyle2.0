import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BackButton extends Component {
    render() {
      const isActiveHash = (hash) => window.location.hash.indexOf(hash) !== -1;

      return (
        <div className="container">
          <div className="back-button">
            <div className="back-button__wrapper">
              <h5 className="back-button__text"><Link to={'/'}>back to portfolio</Link></h5>
            </div>
          </div>
        </div>

      )
    }
}

export default BackButton;
