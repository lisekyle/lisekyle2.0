import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../SubPageHeader';
import SubPageSection from '../SubPageSection';
import subpage from '../images/subpage.jpg';
import elements from '../images/elements.jpg';
import typography from '../images/typography.jpg';
import pattern from '../images/navigation_pattern.jpg';


export const designLanguage = () => {
  return (
    <div className="app">
      <div className="container">
        <Link to={'/'}>Go back!</Link>
        <SubPageHeader
          image={subpage}
          title={"Building a Design Language"}
          subtitle={"Correcting the reactive product cycle by adopting a unified design system"}
          />
        <SubPageSection title={"My Role"}>
          <p>I acted as lead designer on this project and worked closely with a senior full-stack developer and a select few designers from my team for feedback and iterative work. My role shifted between the project manager, researcher, strategist and implementer over the course of the project.</p>
        </SubPageSection>
        <SubPageSection title={"Problem"}>
          <p>A senior developer and I took the initiative to take a step back and look at the areas where our product development was lacking. We quickly recognized that most of the time waste happened during the hand-off between design and development.</p>
          <p>It was also becoming increasingly difficult for the team to keep up with the growing number of products in development, leaving us with mountains of design and technical debt that accumulated over the past years. <span className="bold">Our reactive product cycle needed to be broken.</span></p>
          <p>After reading the uber-inspiring post <a href="http://airbnb.design/building-a-visual-language/">Building a Visual Langauge</a> by Airbnb's Karri Saarinen, I knew EdSurge needed a <span className="bold">unified design system</span>. Saarinen sums up perfectly what our product team's biggest pain point was at the time:</p>
          <blockquote>Working in software development and design, we are often required to ship one-off solutions... These one-off solutions aren’t inherently bad, but if they aren’t built upon a solid foundation, we eventually nd ourselves having to pay back accrued technical and design debts.</blockquote>
          <p>So my teammate and I decided to do just that: establish a solid foundation and design language shared across the product team. Since this was such a massive undertaking; we agreed to start on a smaller scale and develop a component-based, modular style guide acting as a guideline for designers and developers.</p>
        </SubPageSection>
        <SubPageSection title={"Strategy"}>
          <p>Our primary goal for the style guide was resiliency. Because our needs were always evolving, we strived for a modular approach: creating "living" components and patterns that could be modified individually.</p>
          <p>We decided to follow a simplified version of <a href="http://atomicdesign.bradfrost.com/">Brad Frost's Atomic Design</a>. We broke up our style guide into three categories:</p>
          <div classname="image--subpage">
            <img src={elements}/>
          </div>
          <p>As the project began unfolding, I quickly realized how valuable it would be to do a design "audit" with the design team (another pillar of Atomic Design). We discovered quite a few holes in our visual language which lead to some productive brainstorming sessions that ended up improving the look and feel of EdSurge's brand.</p>
          <div classname="image--subpage">
            <img src={typography}/>
            <small>Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
          </div>
          <p>There were no mobile patterns to speak of when the project started, and since 40% of EdSurge's user base is on a mobile device, I made the decision to design our components and patterns mobile first. I started with taking a looking at how we set up our grids and typography on mobile, and then moved onto bigger components such as buttons.</p>
          <div classname="image--subpage">
            <img src={typography}/>
            <small>Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
          </div>
        </SubPageSection>
        <SubPageSection title={"Execution"}>
          <p>Our MVP of the style guide included basic elements and some components to hit the ground running. With a solid foundation in place, the product team was able to prototype and experiment with ideas at a faster pace and a lower cost.</p>
          <p>As for the design team, our feedback sessions went from nitpicking over padding and type choices to focusing on overall concepts and user experiences. The quality of our work has vastly improved, as well as our relationship with the engineering team. We no longer have to worry about how our designs are implemented because we have a shared visual language.</p>
          <div classname="image--subpage">
            <img src={pattern}/>
            <small>Global navigation pattern built out with our style guide MVP</small>
          </div>
        </SubPageSection>
        <SubPageSection title={"Conclusion"}>
          <p>Building and maintaining a design language is an ongoing (and sometimes never-ending) process, but I am happy to have been a part of getting it off the ground. As the design lead, I learned how to prioritize decisions, and involve the right people at the right time. Working on an evolving project is a tricky thing to navigate: my biggest lesson was learning when and how to pick my battles, and keeping in mind that every decision wasn’t final; just necessary to keep momentum.</p>
          <p>With our style guide project, we introduced a new way of thinking to the product team. Historically, our product cycles bordered on waterfall; and many of our designers and developers had grown accustomed to little communication during the development process. To mitigate this, my fellow developer and I decided to lead by example: we shared our pairing sessions on Slack, posted examples of wireframes and user flows using our new style guide, and made plans to facilitate a product team offsite where we could talk about our new system, and strategize better ways to work together.</p>
        </SubPageSection>
      </div>
    </div>
  )
}

export default designLanguage;
