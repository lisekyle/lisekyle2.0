import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header/>
        </div>
        <Hero/>
        <ProjectList/>
        <Footer />
      </div>
    );
  }
}

export default App;
