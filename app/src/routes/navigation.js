import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import navfinal1 from '../images/nav/nav_final_1.jpg';
import navfinal2 from '../images/nav/nav_final_2.jpg';
import navfinal3 from '../images/nav/nav_final_3.jpg';
import navfinal4 from '../images/nav/nav_final_4.jpg';
import mobilenavfinal from '../images/nav/mobile_final.jpg';



export const navigation = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          title={"Global Navigation"}
          subtitle={"Research, UX, UI Design"}
          />
        <Section title={"Problem"}>
          <div className="section__body--wrapper">
            <p className="margin0btm">As EdSurge began to pivot towards a media website, our navigation needed some updating. The old navigation used a hamburger menu and segregated the site by EdSurge branded products, i.e. "EdSurge News" etc.  There needed to be an easier way to navigate the site, and separate news from services offered.</p>
          </div>
        </Section>
        <Section title={"Final"} noLine>
          <div className="section__body--wrapper">
            <p className="margin-bottom">Working with the product owner, we came up with a simpler information architecture that sorted the site into three different groups: News, What We Do, and Higher Ed. Stakeholders also expressed having easy access to our newsletter subscription and company dashboard.</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal1}/>
            <div className="image--subpage--description">
                <small className="mono">"News" and "What We Do" have dropdowns that activate on hover.</small>
              </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal2}/>
            <div className="image--subpage--description">
              <small className="mono">The news dropdown gives an explanation of the news coverage, quick links to topics, and two modular cards that can be swapped out with different content depending on what the editorial team wants to advertise. </small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal3}/>
            <div className="image--subpage--description">
              <small className="mono">The products dropdown outlines services offered with brief explanations. There are also two modular cards in this section that can be swapped out for different content. </small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal4}/>
            <div className="image--subpage--description">
              <small className="mono">"Higher Ed" is a different website altogether, so there is an arrow indicating the user will go to a different site on hover.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={mobilenavfinal}/>
            <div className="image--subpage--description">
              <small className="mono">Mobile screens show a much more simplified and easy to navigate site menu. </small>
            </div>
          </div>

        </Section>
      </div>
    </div>
  )
}

export default navigation;
