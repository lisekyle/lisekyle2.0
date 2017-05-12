import React, { Component } from 'react';
import BackButton from '../components/BackButton';

export class SubPageHeader extends Component {
    render() {
      return (
        <div>
          <BackButton/>
          <div className="subpage__header">
            <img src={this.props.image}/>
              <div className="subpage__header--wrapper">
                <h2>{this.props.title}</h2>
                <h4 className="mono">{this.props.subtitle}</h4>
              </div>
          </div>
        </div>
        )
    }
}

export default SubPageHeader;
