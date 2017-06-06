import React, { Component } from 'react';
import BackButton from '../components/BackButton';

export class FullPage extends Component {
    render() {
      return (
        <div className="container__wrapper--bg about--color">
          <BackButton/>
          <div className="full-page">
            <div className="container">
              <div className="full-page__wrapper">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default FullPage;
