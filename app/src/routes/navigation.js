import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import subpage from '../images/subpage.jpg';
import elements from '../images/elements.jpg';
import typography from '../images/typography.jpg';
import pattern from '../images/navigation_pattern.jpg';


export const navigation = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          image={subpage}
          title={"Global Navigation"}
          subtitle={"Global navigation subheading goes here!"}
          />
        <Section title={"My Role"}>
          <p className="margin0btm">I acted as lead designer on this project and worked closely with a senior full-stack developer and a select few designers from my team for feedback and iterative work. My role shifted between the project manager, researcher, strategist and implementer over the course of the project.</p>
        </Section>
        <Section title={"Problem"}>
          <p>A senior developer and I took the initiative to take a step back and look at the areas where our product development was lacking. We quickly recognized that most of the time waste happened during the hand-off between design and development.</p>
          <p>It was also becoming increasingly difficult for the team to keep up with the growing number of products in development, leaving us with mountains of design and technical debt that accumulated over the past years. <span className="bold">Our reactive product cycle needed to be broken.</span></p>
          <p>After reading the uber-inspiring post <a href="http://airbnb.design/building-a-visual-language/">Building a Visual Langauge</a> by Airbnb's Karri Saarinen, I knew EdSurge needed a <span className="bold">unified design system</span>. Saarinen sums up perfectly what our product team's biggest pain point was at the time:</p>
          <blockquote>Working in software development and design, we are often required to ship one-off solutions... These one-off solutions aren’t inherently bad, but if they aren’t built upon a solid foundation, we eventually nd ourselves having to pay back accrued technical and design debts.</blockquote>
          <p className="margin0btm">So my teammate and I decided to do just that: establish a solid foundation and design language shared across the product team. Since this was such a massive undertaking; we agreed to start on a smaller scale and develop a component-based, modular style guide acting as a guideline for designers and developers.</p>
        </Section>
        <Section title={"Wireframes"}>
          <p>blah blah i started sketching and then moved to wireframes</p>
          <div className="image--subpage">
            <img src={elements}/>
          </div>
          <div classname="image--subpage">
            <img src={typography}/>
          </div>
          <div classname="image--subpage">
            <img src={typography}/>
          </div>
        </Section>
        <Section title={"Final"}>
          <p>then i did some super ugly designs it was great bye</p>
          <div classname="image--subpage">
            <img src={pattern}/>
            <small>Global navigation pattern built out with our style guide MVP</small>
          </div>
          <div classname="image--subpage">
            <img src={pattern}/>
            <small>Global navigation pattern built out with our style guide MVP</small>
          </div>
          <div classname="image--subpage">
            <img src={pattern}/>
            <small>Global navigation pattern built out with our style guide MVP</small>
          </div>
          <div classname="image--subpage">
            <img src={pattern}/>
            <small>Global navigation pattern built out with our style guide MVP</small>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default navigation;
