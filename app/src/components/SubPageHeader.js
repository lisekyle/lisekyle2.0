import React, { Component } from 'react';
import BackButton from '../components/BackButton';

export class SubPageHeader extends Component {
    render() {
      return (
        <div className="container__wrapper--bg">
          <BackButton/>
          <div className="subpage__header">
            <div className="container">
              <div className="subpage__header--wrapper">
                <h5 className="mono">{this.props.type}</h5>
                <h2>{this.props.title}</h2>
                <h4 className="mono">{this.props.subtitle}</h4>
                <div className="subpage__image">
                  <img src={this.props.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default SubPageHeader;
