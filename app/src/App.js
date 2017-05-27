import React, { Component } from 'react';
import styleguide_thumb from './images/styleguide_thumb.jpg';
import homepage_thumb from './images/homepage_thumb.jpg';
import nav_thumb from './images/nav_thumb.jpg';
import case_thumb from './images/casestudies_thumb.jpg';
import okovi_thumb from './images/okovi2_thumb.jpg';
import hex_thumb from './images/hex2_thumb.jpg';
import './App.scss';
import Header from './components/Header';
import Animation from './components/Animation';
import Section from './components/Section';
import { Link } from 'react-router-dom'
import mixitup from 'mixitup';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header/>
          <Animation/>
          <Section title={"Hi, I'm Lise"}>
            <div className="section__body--wrapper">
              <p className="margin0btm">I'm a designer with a background in frontend development and art. I hail from the great Midwest (which is probably why you'll think I say "bagel" strangely), where I went to school for design. I have 3+ years designing and coding with a broad range of teams: from small startups to large enterprises, helping them shape problems, think through solutions, and design beautiful user experiences.</p>
            </div>
          </Section>

          <Section title={"Work"}>
            <div id="work">
              <div className="controls">
                <button class="filter" data-filter="all">All</button>
                <button class="filter" data-filter=".product-ux">Product + UX</button>
                <button class="filter" data-filter=".visual-branding">Visual + Branding</button>
                <button class="web" data-filter=".web">Web Development</button>
              </div>
              <div className="projects__grid mix product-ux">
                <Link to="/design-language">
                  <div className="projects__image">
                    <img src={styleguide_thumb}/>
                    <div className="projects__image--wrapper">
                      <h4 className="margin0btm">Building a Design Language</h4>
                      <h5 className="mono">Project Lead, Research, UX, UI Design</h5>
                      <small className="mono small--sub">EdSurge, 2016</small>
                    </div>
                  </div>
                </Link>
                </div>
                <div className="projects__grid">
                  <Link to="/video-teaser">
                    <div className="projects__image mix visual-branding web">
                      <img src={okovi_thumb}/>
                      <div className="projects__image--wrapper">
                        <h4 className="margin0btm">Music Video Teaser</h4>
                          <h5 className="mono">Visual Design, UX, Web Development</h5>
                          <small className="mono small--sub">Sacred Bones Records, 2017</small>
                      </div>
                    </div>
                  </Link>
                  </div>
                <div className="projects__grid mix product-ux">
                  <Link to="/homepage">
                    <div className="projects__image">
                      <img src={homepage_thumb}/>
                      <div className="projects__image--wrapper">
                        <h4 className="margin0btm">Homepage Redesign</h4>
                          <h5 className="mono">Research, UX, UI Design</h5>
                          <small className="mono small--sub">EdSurge, 2016</small>
                      </div>
                    </div>
                  </Link>
                  </div>
                <div className="projects__grid mix product-ux">
                  <Link to="/navigation">
                    <div className="projects__image">
                      <img src={nav_thumb}/>
                      <div className="projects__image--wrapper">
                        <h4 className="margin0btm">Global Navigation</h4>
                          <h5 className="mono">Project Lead, Research, UX, UI Design</h5>
                          <small className="mono small--sub">EdSurge, 2017</small>
                      </div>
                    </div>
                  </Link>
                  </div>
                  <div className="projects__grid mix visual-branding">
                    <Link to="/hex-shadows">
                      <div className="projects__image">
                        <img src={hex_thumb}/>
                        <div className="projects__image--wrapper">
                          <h4 className="margin0btm">Hex Shadows</h4>
                            <h5 className="mono">Package Design, Art Direction</h5>
                            <small className="mono small--sub">2015</small>
                        </div>
                      </div>
                    </Link>
                    </div>

            </div>
          </Section>

          <Section title={"Contact"} noLine>
            <div id="contact" className="footer">
              <ul className="footer--top">
                <li className="underline--small"><a href="mailto:lisekyle@gmail.com">Email</a></li>
                <li className="underline--small"><a href="https://www.dropbox.com/s/uo7it8qmdj5s7g3/lisekylechapman_resume2017_2.pdf?dl=0" target="_blank">Resumé</a></li>
                <li className="underline--small"><a href="https://www.dropbox.com/sh/mtlaw0ic7she340/AACQwjoMU8qVw5sZBL_EmzCfa?dl=0" target="_blank">Full-Resolution Portfolio</a></li>
              </ul>
              <ul className="footer--bottom">
                <li><a href="https://dribbble.com/lisekylechapman" target="_blank">dribbble</a></li>
                <li><a href="https://www.linkedin.com/in/lisekylechapman" target="_blank">linkedin</a></li>
                <li><a href="https://www.behance.net/lisekyle" target="_blank">behance</a></li>
                <li><a href="http://codepen.io/kyletta/" target="_blank">codepen</a></li>
                <li><a href="https://github.com/lisekyle" target="_blank">github</a></li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
