import React, { Component } from 'react';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import './css/App.css';
import './css/fonts.css'
import Header from './Header';
import Animation from './Animation';
import SectionA from './SectionA';
import SectionB from './SectionB';
import Footer from './Footer';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header/>
          <Animation/>
          <SectionA
          title={"hi, i'm lise"}
          body={"A product designer and former front-end developer that hails from the Midwest, which is why you'll probably think I say the word bag strangely. I've got 3+ years designing and coding with a broad range of teams: from small startups to large enterprises, helping them shape problems, think through solutions, and design beautiful user experiences."}
          />
          <SectionA
          title={"case studies"}
          link={(<Link to='/about'>Building a Design Language</Link>)}
          body={"This was a self-initiated project that began out of a need a senior developer and I recognized within the product team. We were given some time to take a step back and rethink our design process, style guide elements, and how we worked with the development team."}
          link_2={(<Link to='/about'>Research and Listening to Your Users</Link>)}
          body_2={"This project involved quite a bit user-feedback to be successful. The first design round didn't take our entire audience into consideration, and experienced quite a bit of backlash. The second iteration listened to what users wanted, and ended up decreasing our bounce rate by and increasing the time spent on the homepage."}
          />
          <SectionB
          title={"projects"}
          image={project1}
          link={(<Link to='/about'>Building a Design Language</Link>)}
          image_2={project2}
          link_2={(<Link to='/about'>Building a Design Language</Link>)}
          />
          <Footer
          title={"contact"}
          />
        </div>
      </div>
    );
  }
}

export default App;
