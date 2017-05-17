import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import casestudies1 from '../images/casestudies/casestudies1.jpg';
import casestudies2 from '../images/casestudies/casestudies2.jpg';
import casestudies3 from '../images/casestudies/casestudies3.jpg';
import casestudies4 from '../images/casestudies/casestudies4.jpg';
import casestudiesvideo from '../images/casestudies/casestudies.mp4';



export const casestudies = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          title={"Interactive Case Studies"}
          subtitle={"UX, UI Design, Web Development"}
          />
        <Section title={"Problem"}>
          <div className="section__body--wrapper">
            <p>This project is a feature for a long-form journalism piece. The article outlines an education framework called "SAMR" (Substitution, Augmentation, Modification and Redefinition) that helps teachers come up with efficient ways to use technology in the classroom.</p>
            <p className="margin0btm">The journalists interviewed teachers that taught Math, ELA, and Assessment around the country using the SAMR framework. <span className="bold">My task was to lay out the case studies in an engaging format that was easily accessible. I was also responsible for the front-end development and animation of this project.</span> </p>
          </div>
        </Section>
        <Section title={"Final"} noLine>
          <div className="section__body--wrapper">
            <p className="margin-bottom">I decided to make an interactive table that gives the user a visible indication of where they are in the framework by highlighting the corresponding method (S, A, M, R) and the subject (Math, ELA, Assessment). From there, the user can click on the case study and where they can read and share the story.</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={casestudies1}/>
            <div className="image--subpage--description">
                <small className="mono">Table layout that shows the title of the case study, the method/subject and a photo of the author. Each row and column represent a different combination of the method (S, A, M, R) and the subject (Math, ELA, Assessment).</small>
              </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={casestudies2}/>
            <div className="image--subpage--description">
              <small className="mono">On hover, the case study highlights, as well as the corresponding method and subject (in this case, Augmentation and ELA).</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={casestudies3}/>
            <div className="image--subpage--description">
              <small className="mono">An animation indicates to the user that the article loading.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={casestudies4}/>
            <div className="image--subpage--description">
              <small className="mono">A page reveals with the case study and some additional information about the author. The user can then click the close button and be taken back to the case studies table.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
              <video controls>
                <source src={casestudiesvideo} type="video/mp4" />
              </video>
            <div className="image--subpage--description">
              <small className="mono">This animation shows the interaction of all the above screenshots. I made this prototype using <a href="http://principleformac.com/" target="_blank">Principle App</a>. I then used this as a guide for CSS animations and timing when I coded it.</small>
            </div>
          </div>

        </Section>
      </div>
    </div>
  )
}

export default casestudies;
