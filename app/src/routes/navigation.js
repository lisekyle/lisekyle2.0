import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import subpage from '../images/subpage.jpg';
import fonts from '../images/fonts.jpg';
import pattern from '../images/navigation_pattern.jpg';


export const navigation = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          image={subpage}
          title={"Global Navigation"}
          subtitle={"Research, UX, UI Design"}
          />
        <Section title={"Problem"}>
          <div className="section__body--wrapper">
            <p className="margin0btm">A senior developer and I took the initiative to take a step back and look at the areas where our product development was lacking. We quickly recognized that most of the time waste happened during the hand-off between design and development.</p>
          </div>
        </Section>
        <Section title={"Wireframes"}>
          <div className="section__body--wrapper">
            <p className="margin-bottom">blah blah i started sketching and then moved to wireframes</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={fonts}/>
            <div className="image--subpage--description">
                <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
              </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={fonts}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
          <div className="image--subpage --multiple margin0btm">
            <img src={fonts}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
        </Section>
        <Section title={"Final"}>
          <div className="section__body--wrapper">
            <p className="margin-bottom">blah blah i started sketching and then moved to wireframes</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={pattern}/>
            <div className="image--subpage--description">
                <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
              </div>
          </div>
          <div className="image--subpage --multiple">
            <img src={pattern}/>
            <div className="image--subpage--description">
              <small className="mono">Compiling our global typeface elements. We noticed that we needed a different typeface for article pages for optimal readability.</small>
            </div>
          </div>
          <div className="image--subpage --multiple margin0btm">
            <img src={pattern}/>
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
