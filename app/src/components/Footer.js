import React, { Component } from 'react';

export class Footer extends Component {
    render() {
      return (
        <div className="section">
          <div className="section__title--wrapper">
            <h6 className="mono gray">{this.props.title}</h6>
          </div>
          <div className="section--body">
            <ul className="footer__top">
              <li><a href="mailto:lisekyle@gmail.com">Email</a></li>
              <li><a href="resume.pdf">Resumé</a></li>
              <li><a href="portfolio.pdf">Full-Resolution Portfolio</a></li>
            </ul>
            <ul className="footer__bottom">
              <li><a href="https://dribbble.com/lisekylechapman">dribbble</a></li>
              <li><a href="https://www.linkedin.com/in/lisekylechapman">linkedin</a></li>
              <li><a href="https://www.behance.net/lisekyle">behance</a></li>
              <li><a href="http://codepen.io/kyletta/">codepen</a></li>
              <li><a href="https://github.com/lisekyle">github</a></li>
            </ul>
          </div>
        </div>
      )
    }
}

export default Footer;
