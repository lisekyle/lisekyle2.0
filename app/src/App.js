import React, { Component } from 'react';
import nav_thumb from './images/nav_thumb.jpg';
import './App.scss';
import Header from './components/Header';
import Animation from './components/Animation';
import Section from './components/Section';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header/>
          <Animation/>
          <Section title={"Hi, I'm Lise"}>
            <div className="section__body--wrapper">
              <p className="margin0btm">A product designer and former front-end developer that hails from the Midwest (which is why you'll probably think I say the word "bag" strangely). I have 3+ years designing and coding with a broad range of teams: from small startups to large enterprises, helping them shape problems, think through solutions, and design beautiful user experiences.</p>
            </div>
          </Section>
          <Section title={"Case Studies"}>
            <div className="section__body--wrapper">
              <h4 className="link underline--big"><Link to="/design-language">Building a Design Language</Link></h4>
              <p>This was a self-initiated project that began out of a need a senior developer and I recognized within the product team. We were given some time to take a step back and rethink our design process, style guide elements, and how we worked with the development team.</p>
            </div>
            <div className="section__body--wrapper">
              <h4 className="link underline--big"><Link to="/design-language">Research & Listening to Users</Link></h4>
              <p className="margin0btm">This was a self-initiated project that began out of a need a senior developer and I recognized within the product team. We were given some time to take a step back and rethink our design process, style guide elements, and how we worked with the development team.</p>
            </div>
          </Section>
          <Section title={"Projects"}>
            <div className="projects__grid">
              <Link to="/navigation">
                <div className="projects__image">
                  <img src={nav_thumb}/>
                  <div className="projects__image--wrapper">
                    <h4 className="margin0btm">Global Navigation</h4>
                    <h5 className="mono">Research, UX, UI Design</h5>
                  </div>
                </div>
              </Link>
              </div>
              <div className="projects__grid">
                <Link to="/navigation">
                  <div className="projects__image">
                    <img src={nav_thumb}/>
                    <div className="projects__image--wrapper">
                      <h4 className="margin0btm">Glitch Selfie Cube</h4>
                      <h5 className="mono">Web Development, Weirdness</h5>
                    </div>
                  </div>
                </Link>
                </div>
                <div className="projects__grid">
                  <Link to="/navigation">
                    <div className="projects__image">
                      <img src={nav_thumb}/>
                      <div className="projects__image--wrapper">
                        <h4 className="margin0btm">Article Page Iterations</h4>
                        <h5 className="mono">Research, UX, UI Design</h5>
                      </div>
                    </div>
                  </Link>
                  </div>
                  <div className="projects__grid">
                    <Link to="/navigation">
                      <div className="projects__image">
                        <img src={nav_thumb}/>
                        <div className="projects__image--wrapper">
                          <h4 className="margin0btm">Mood App Feature</h4>
                          <h5 className="mono">Research, UX, UI Design</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="projects__grid">
                    <Link to="/navigation">
                      <div className="projects__image">
                        <img src={nav_thumb}/>
                        <div className="projects__image--wrapper">
                          <h4 className="margin0btm">Misc. Projects</h4>
                          <h5 className="mono">Branding, Illustration</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
              </Section>
          <Section title={"Contact"}>
            <div className="footer">
              <ul className="footer--top">
                <li className="underline--small"><a href="mailto:lisekyle@gmail.com">Email</a></li>
                <li className="underline--small"><a href="resume.pdf">Resumé</a></li>
                <li className="underline--small"><a href="portfolio.pdf">Full-Resolution Portfolio</a></li>
              </ul>
              <ul className="footer--bottom">
                <li><a href="https://dribbble.com/lisekylechapman">dribbble</a></li>
                <li><a href="https://www.linkedin.com/in/lisekylechapman">linkedin</a></li>
                <li><a href="https://www.behance.net/lisekyle">behance</a></li>
                <li><a href="http://codepen.io/kyletta/">codepen</a></li>
                <li><a href="https://github.com/lisekyle">github</a></li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
