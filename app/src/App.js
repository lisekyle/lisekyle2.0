import React, { Component } from 'react';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import './App.scss';
import Header from './components/Header';
import Animation from './components/Animation';
import Section from './components/Section';
import Footer from './components/Footer';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header/>
          <Animation/>
          <Section title={"Hi, I'm Lise"}>
            <p>A product designer and former front-end developer that hails from the Midwest, which is why you'll probably think I say the word bag strangely. I've got 3+ years designing and coding with a broad range of teams: from small startups to large enterprises, helping them shape problems, think through solutions, and design beautiful user experiences.</p>
          </Section>
          <Section title={"Case Studies"}>
            <h4 className="link"><Link to="/design-language">Building a Design Language</Link></h4>
            <p>This was a self-initiated project that began out of a need a senior developer and I recognized within the product team. We were given some time to take a step back and rethink our design process, style guide elements, and how we worked with the development team.</p>
          </Section>
          <Section title={"Projects"}>
            <div classname="image--projects">
              <img src={project1}/>
            </div>
            <h4 className="link"><Link to="/navigation">Designing Global Navigation</Link></h4>
          </Section>
          <Footer
          title={"contact"}
          />
        </div>
      </div>
    );
  }
}

export default App;
