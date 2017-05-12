import React, { Component } from 'react';

export class Section extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title">
            <h5 className="mono">{this.props.title}</h5>
          </div>
          <div className="section__body">
            <div className="section__body--wrapper">
              {this.props.children}
            </div>
          </div>
          <div className="line"></div>
        </div>
      )
    }
}

export default Section;
