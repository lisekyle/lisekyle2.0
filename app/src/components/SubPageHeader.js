import React, { Component } from 'react';

export class SubPageHeader extends Component {
    render() {
      return (
        <div className="subpage__header">
          <img src={this.props.image}/>
          <h1>{this.props.title}</h1>
          <h4 className="mono">{this.props.subtitle}</h4>
        </div>
      )
    }
}

export default SubPageHeader;
