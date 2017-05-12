import React, { Component } from 'react';

export class Footer extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title--wrapper">
            <h6 className="mono gray">{this.props.title}</h6>
          </div>
          <div className="section--body">
            
          </div>
        </div>
      )
    }
}

export default Footer;
