import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import header from '../images/okovi/header.png';
import moodboard from '../images/okovi/moodboard.jpg';
import graphic1 from '../images/okovi/graphic1.jpg';
import graphic2 from '../images/okovi/graphic2.jpg';
import graphic3 from '../images/okovi/graphic3.jpg';
import graphic4 from '../images/okovi/graphic4.jpg';
import userflow from '../images/okovi/userflow.jpg';
import teaser from '../images/okovi/teaservid.gif';
import okovivid from '../images/okovi/okovi.mp4';


export const designLanguage = () => {
  return (
    <div className="app">
        <SubPageHeader
          type={"ART DIRECTION, UX, WEB DEVELOPMENT, ANIMATION"}
          title={"O K O V I"}
          subtitle={"Capturing the mood of a music video with UX and web animation"}
          image={header}
          />

      <Section title={"My Role"}>
        <div className="section__body--wrapper">
          <p>I worked closely with a client from Sacred Bones Records to help define the mood and creative direction of a music video teaser and corresponding website.<span className="bold"> I art directed, created user flows, animated prototypes and hand-coded the final site.</span></p>
          <p className="margin0btm">Check out the <a href="http://zolajesus.com/okovi" target="_blank">live version</a>.</p>
        </div>
      </Section>
      <Section title={"Problem"}>
        <div className="section__body--wrapper">
          <p>I was approached to help promote a new album being released by Sacred Bones in Fall 2017. The goal of the project was to give a select group of fans a sneak preview of the new album by showing them a 30-second video trailer they could access by entering a unique code they received in the mail.  <span className="bold">The website and video was to mimic the artist's ethos in mood and atmosphere, while clearly leading the fan to view and share the video on social media.</span></p>
          <p className="margin0btm">This project contained three different parts:
            <ul>
              <li>Help establish an aesthetic vision using animation, video, and UI to evoke the artist's brand.</li>
              <li>Come up with a user flow that supports seamlessly from entering the unique code to viewing and sharing the video.</li>
              <li>Develop and code the website using React.js in order to support the needs of animation, form validation, endpoints and sharing functionalities.</li>
            </ul>
          </p>
        </div>
      </Section>
      <Section title={"Aesthetic Vision"}>
        <div className="section__body--wrapper">
          <h4>Establishing a Visual Direction</h4>
          <p className="margin0btm">I started the project by meeting with the client to talk about the feeling she wanted to evoke from the website and video. We talked about her brand, style and how she portrayed herself as an artist. From there, I created a mood board and list of words to describe her artistic essence. </p>
        </div>
        <div className="image--subpage">
          <img src={moodboard}/>
        </div>
        <div className="section__body--wrapper">
          <p className="margin0btm">After establishing a solid direction, I came up with graphic imagery, a logotype, UI elements and animated concepts inspired by the video and mood board.</p>
        </div>
        <div className="image--subpage margin0btm">
          <img src={graphic3}/>
        </div>
        <div className="image--subpage margin0btm">
          <img src={graphic4}/>
        </div>
        <div className="image--subpage margin0btm">
          <img src={graphic1}/>
        </div>
        <div className="image--subpage margin0btm">
          <img src={graphic2}/>
        </div>
        <div className="image--subpage margin0btm">
          <img src={teaser}/>
        </div>
      </Section>
      <Section title={"UX & Animation"}>
        <div className="section__body--wrapper">
          <h4>User Experience Flow</h4>
          <p className="margin0btm">To ensure a reliable user experience, I created a UX flow to illustrate how the user would go from the postcard with the unique code to the share screen for the video. </p>
        </div>
        <div className="image--subpage">
          <img src={userflow}/>
        </div>
        <div className="section__body--wrapper">
          <h4>Creating a mood with animation</h4>
          <p>Based off of client conversations, I knew that animation on the website was essential to further establish the ethereal atmosphere of the artist and her album.</p>
          <p className="margin0btm">I based my animation concept off of a couple of fundamental principles, aiming to keep my animation mysterious and elegant.
            <ul>
              <li><span className="bold">Timing and Anticipation</span>: Helps users follow your animated story by creating a comprehension hierarchy. Slowing down the beginning of an important animation helps users pay attention to it.</li>
              <li><span className="bold">Follow-through</span>: Makes parts of the bigger, structured object (e.g., the website container) follow the motion of their “parent” (first) element in an organic and realistic way.</li>
            </ul>
          </p>
          <p className="margin0btm">Both of these principles guided me in animating different parts of the website, including the page transitions, form elements, and text animating on and off the page. Although none of these animations were functional, they aided in accomplishing the goal of creating a mood. Below is an example of the intro sequence I animated with Principle App.</p>
          <div className="image--subpage margin0btm">
            <video controls>
              <source src={okovivid} type="video/mp4" />
            </video>
          </div>
        </div>
      </Section>
      <Section title={"Web Development"} noLine>
        <div className="section__body--wrapper">
          <p className="margin0btm">I developed the website using React.js, CSS animations ES6 Javascript. This was my first time using React, and I learned a lot. I used <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a> as the basis for my project, and <a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a> for page transitions. Check out the GitHub <a href="https://github.com/lisekyle/okovi" target="_blank">here</a></p>
        </div>
    </Section>
    </div>
  )
}

export default designLanguage;
