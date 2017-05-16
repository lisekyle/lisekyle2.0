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
            <p className="margin0btm">A senior developer and I took the initiative to take a step back and look at the areas where our product development was lacking. We quickly recognized that most of the time waste happened during the hand-off between design and development.</p>
          </div>
        </Section>
        <Section title={"Final"} noLine>
          <div className="section__body--wrapper">
            <p className="margin-bottom">blah blah i started sketching and then moved to wireframes</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal1}/>
            <div className="image--subpage--description">
                <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
              </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal2}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal3}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={navfinal4}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={mobilenavfinal}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>

        </Section>
      </div>
    </div>
  )
}

export default navigation;
