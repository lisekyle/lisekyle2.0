import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class BackButton extends Component {
    render() {
      return (
        <div className="back-button">
          <div className="back-button__wrapper">
            <Link to={'/'}>back</Link>
          </div>
        </div>
      )
    }
}

export default BackButton;
