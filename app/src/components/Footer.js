import React, { Component } from 'react';

export class Footer extends Component {
    render() {
      return (
        <div id="contact" className="footer container">
          <div className="footer__wrapper">
            <h3>currently looking for full-time & freelance</h3>
            <h3>in san francisco&mdash;</h3>
            <h4 className="footer__text--sub mono">let's be friends and work together.</h4>
            <ul className="footer--top">
              <li><a className="fancy-underline" href="mailto:lisekyle@gmail.com">email</a></li>
              <li><a className="fancy-underline" href="https://www.dropbox.com/s/uo7it8qmdj5s7g3/lisekylechapman_resume2017_2.pdf?dl=0" target="_blank">résumé</a></li>
              <li><a className="fancy-underline" href="https://www.linkedin.com/in/lisekylechapman" target="_blank">linkedin</a></li>
              <li><a className="fancy-underline" href="https://dribbble.com/lisekylechapman" target="_blank">dribbble</a></li>
              <li><a className="fancy-underline" href="https://github.com/lisekyle" target="_blank">github</a></li>
              <li><a className="fancy-underline" href="http://codepen.io/kyletta/" target="_blank">codepen</a></li>
            </ul>

          </div>
        </div>
      )
    }
}

export default Footer;
