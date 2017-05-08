import React, { Component } from 'react';

export class SectionA extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title--wrapper">
            <h6 class="mono gray">{this.props.title}</h6>
          </div>
          <div className="section--body">
            <p>{this.props.link}</p>
            <p>{this.props.body}</p>
            <p>{this.props.link_2}</p>
            <p>{this.props.body_2}</p>
          </div>
        </div>
      )
    }
}

export default SectionA;
