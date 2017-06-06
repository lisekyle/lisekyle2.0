import React, { Component } from 'react';

export class Section extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return (
        <div>
          <div className="container">
            <div className="section">
              <div className="section__title">
                <h5 className="mono">{this.props.title}</h5>
              </div>
              <div className="section__body">
                  {this.props.children}
              </div>
            </div>
          </div>
          <div className="line__wrapper">
            <div className={`line ${this.props.noLine ? 'line--no-line' : ''}`}></div>
          </div>
        </div>
      )
    }
}

export default Section;
