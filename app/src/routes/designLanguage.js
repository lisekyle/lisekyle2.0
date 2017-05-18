import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import header from '../images/styleguide/header.jpg';
import colors from '../images/styleguide/colors.jpg';
import fonts from '../images/styleguide/fonts.jpg';
import mobilefonts from '../images/styleguide/mobile_fonts2.jpg';
import cards from '../images/styleguide/cards.jpg';
import pattern from '../images/styleguide/navigation_pattern.jpg';
import trello from '../images/styleguide/trello.jpg';


export const designLanguage = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          image={header}
          title={"Building a Design Language"}
          subtitle={"Correcting the reactive product cycle by adopting a unified design system"}
          />
        <Section title={"My Role"}>
          <div className="section__body--wrapper">
            <p className="margin0btm">I acted as lead designer on this project and worked closely with a senior full-stack developer and a select few designers from my team for feedback and iterative work. My role shifted between the <span className="bold">project manager, researcher, strategist and implementer</span> over the course of the project.</p>
          </div>
        </Section>
        <Section title={"Problem"}>
          <div className="section__body--wrapper">
            <p>A senior developer and I took the initiative to take a step back and look at the areas where our product development was lacking. We quickly recognized that most of the time waste happened during the hand-off between design and development.</p>
            <p>It was also becoming increasingly difficult for the team to keep up with the growing number of products in development, leaving us with mountains of design and technical debt that accumulated over the past years. <span className="bold">Our reactive product cycle needed to be broken.</span></p>
            <p>After reading the uber-inspiring post <a href="http://airbnb.design/building-a-visual-language/">Building a Visual Langauge</a> by Airbnb's Karri Saarinen, I knew EdSurge needed a <span className="bold">unified design system</span>. Saarinen sums up perfectly what our product team's biggest pain point was at the time:</p>
            <blockquote>Working in software development and design, we are often required to ship one-off solutions... These one-off solutions aren’t inherently bad, but if they aren’t built upon a solid foundation, we eventually find ourselves having to pay back accrued technical and design debts.</blockquote>
            <p className="margin0btm">So my teammate and I decided to do just that: establish a solid foundation and design language shared across the product team. Since this was such a massive undertaking; we agreed to start on a smaller scale and develop a component-based, modular style guide acting as a guideline for designers and developers.</p>
          </div>
        </Section>
        <Section title={"Strategy"}>
          <div className="section__body--wrapper">
            <p>Our primary goal for the style guide was resiliency. Because our needs were always evolving, we strived for a modular approach: creating "living" components and patterns that could be modified individually.</p>
            <p className="margin0btm">We decided to follow a simplified version of <a href="http://atomicdesign.bradfrost.com/">Brad Frost's Atomic Design</a>. We broke up our style guide into three categories:</p>
          </div>

            <div className="categories-grid">
              <div className="categories-grid__block">
                <div className="categories-grid__block--wrapper">
                  <h4>Elements</h4>
                  <ul>
                    <li>Colors</li>
                    <li>Typefaces</li>
                    <li>Tyopgraphic Scale</li>
                    <li>Grid</li>
                    <li>Spacing</li>
                  </ul>
                </div>
                </div>
                <div className="categories-grid__block middle">
                  <div className="categories-grid__block--wrapper">
                    <h4>Components</h4>
                    <ul>
                      <li>Buttons</li>
                      <li>Lists</li>
                      <li>Tables</li>
                      <li>Forms</li>
                      <li>Link Elements</li>
                    </ul>
                  </div>
                </div>
                <div className="categories-grid__block">
                  <div className="categories-grid__block--wrapper">
                    <h4>Patterns</h4>
                    <ul>
                      <li>Global Navigation</li>
                      <li>Article Pages</li>
                      <li>Blockquotes</li>
                      <li>FAQs</li>
                      <li>Author Bios</li>
                    </ul>
                  </div>
                </div>
              </div>

          <div className="section__body--wrapper">
            <p className="margin0btm">As the project began unfolding, I quickly realized how valuable it would be to do a design "audit" with the design team (another pillar of Atomic Design). We discovered quite a few holes in our visual language which lead to some productive brainstorming sessions that ended up improving the look and feel of EdSurge's brand.</p>
          </div>
          <div className="image--subpage margin0btm">
            <img src={colors}/>
            <div className="image--subpage--description">
                <small className="mono">We started off with over 20 shades of gray in our codebase! Our first priority was narrowing down a solid color palette</small>
            </div>
          </div>

          <div className="image--subpage">
            <img src={fonts}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We decided on a seperate, more readable serif for articles.</small>
            </div>
          </div>
          <div className="section__body--wrapper">
            <p className="margin0btm">There were no mobile patterns to speak of when the project started, and since 40% of EdSurge's user base is on a mobile device, I made the decision to design our components and patterns mobile first. I started with taking a looking at how we set up our grids and typography on mobile, and then moved onto bigger components such as buttons.</p>
          </div>
          <div className="image--subpage margin0btm">
            <img src={mobilefonts}/>
              <div className="image--subpage--description">
                <small className="mono">Setting up font sizes for desktop and mobile.</small>
              </div>
          </div>
        </Section>
        <Section title={"Execution"}>
          <div className="section__body--wrapper">
            <p>Our MVP of the style guide included basic elements and some components to hit the ground running. With a solid foundation in place, the product team was able to prototype and experiment with ideas at a faster pace and a lower cost.</p>
            <p className="margin0btm">As for the design team, our feedback sessions went from nitpicking over padding and type choices to focusing on overall concepts and user experiences. The quality of our work has vastly improved, as well as our relationship with the engineering team. We no longer have to worry about how our designs are implemented because we have a shared visual language.</p>
          </div>
          <div className="image--subpage margin0btm">
            <img src={cards}/>
            <div className="image--subpage--description">
              <small className="mono">Homepage cards pattern built out with the first iteration of the style guide.</small>
            </div>
          </div>
          <div className="image--subpage margin0btm">
            <img src={pattern}/>
            <div className="image--subpage--description">
              <small className="mono">Global navigation pattern built out with our style guide.</small>
            </div>
          </div>
        </Section>
        <Section title={"Conclusion"} noLine>
          <div className="section__body--wrapper">
            <p className="margin0btm">Building and maintaining a design language is an ongoing (and sometimes never-ending) process, but I am happy to have been a part of getting it off the ground. As the design lead, I learned how to prioritize decisions, and involve the right people at the right time. Working on an evolving project is a tricky thing to Navigate: <span class="bold">my biggest lessons was cultivating patience, and keeping in mind that every decision wasn’t final; just necessary to keep momentum.</span></p>
          </div>
          <div className="image--subpage">
            <img src={trello}/>
            <div className="image--subpage--description">
              <small className="mono">Future plans for iteration, so the styleguide doesn't turn into a <a href="https://twitter.com/jina/status/638850299172667392">"zombie styleguide"</a></small>
            </div>
          </div>
          <div className="section__body--wrapper">
            <p className="margin0btm">With our style guide project, we introduced a new way of thinking to the product team. Historically, our product cycles bordered on waterfall; and many of our designers and developers had grown accustomed to little communication during the development process. To mitigate this, my fellow developer and I decided to lead by example: we shared our pairing sessions on Slack, posted examples of wireframes and user flows using our new style guide, and made plans to facilitate a product team offsite where we could talk about our new system, and strategize better ways to work together.</p>
          </div>
      </Section>
      </div>
    </div>
  )
}

export default designLanguage;
