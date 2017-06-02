import React, { Component } from 'react';
import styleguide_thumb from '../images/styleguide_thumb2.jpg';
import homepage_thumb from '../images/homepage_thumb2.jpg';
import nav_thumb from '../images/nav_thumb2.jpg';
import case_thumb from '../images/casestudies_thumb.jpg';
import okovi_thumb from '../images/okovi_thumb2.jpg';
import { Link } from 'react-router-dom';

export class ProjectList extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    render() {
      return (
        <div id="work" className="container">
          <div className="projects__grid">
            <Link to="/design-language">
              <div className="projects__image">
                <img src={styleguide_thumb}/>
              </div>
            </Link>
            <div className="projects__image--text">
              <h4>Building a Design Language</h4>
              <p>Establishing a style guide and design language at EdSurge. Helped improve workflow and communication on the product team. </p>
              <h5 className="mono">Case Study, Project Lead, Research, UX, UI Design</h5>
              <Link to="/design-language"><h5 className="fancy-underline">VIEW</h5></Link>
            </div>
          </div>
          <div className="projects__grid">
            <Link to="/homepage">
              <div className="projects__image">
                <img src={nav_thumb}/>
              </div>
            </Link>
            <div className="projects__image--text">
              <h4>Global Navigation</h4>
              <p>Lead efforts to help make navigating EdSurge easier for different user groups to find what they need on the site.</p>
              <h5 className="mono">Case Study, Project Lead, Research, UX, UI Design</h5>
              <Link to="/navigation"><h5 className="fancy-underline">VIEW</h5></Link>
            </div>
          </div>
          <div className="projects__grid">
            <Link to="/homepage">
              <div className="projects__image">
                <img src={homepage_thumb}/>
              </div>
            </Link>
            <div className="projects__image--text">
              <h4>Homepage Redesign</h4>
              <p>By using different user research techniques, I aimed to restore brand impression and trust amongst our audience at EdSurge.</p>
              <h5 className="mono">Case Study, Research, UX, UI Design</h5>
              <Link to="/homepage"><h5 className="fancy-underline">VIEW</h5></Link>
            </div>
          </div>
          <div className="projects__grid">
            <Link to="/design-language">
              <div className="projects__image">
                <img src={okovi_thumb}/>
              </div>
            </Link>
            <div className="projects__image--text">
              <h4>OKOVI</h4>
              <p>Art direction and development of a website that gives fans a sneak preview of a new album from Sacred Bones Records.</p>
              <h5 className="mono">ART DIRECTION, UX, WEB DEVELOPMENT, ANIMATION</h5>
              <Link to="/video-teaser"><h5 className="fancy-underline">VIEW</h5></Link>
            </div>
          </div>
        </div>
      )
    }
}

export default ProjectList;
