import React, { Component } from 'react';

export class SubPageSection extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title--wrapper">
            <h6 class="mono gray">{this.props.title}</h6>
          </div>
          <div className="section--body">
            {this.props.children}
          </div>
          <hr/>
        </div>
      )
    }
}

export default SubPageSection;
