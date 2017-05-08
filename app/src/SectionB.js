import React, { Component } from 'react';

export class SectionB extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title--wrapper">
            <h6 class="mono gray">{this.props.title}</h6>
          </div>
          <div className="section--body">
            <img src={this.props.image}/>
            <p>{this.props.link}</p>
            <img src={this.props.image_2}/>
            <p>{this.props.link_2}</p>
          </div>
        </div>
      )
    }
}

export default SectionB;
