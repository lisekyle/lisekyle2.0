import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FullPage from '../components/FullPage';

export const about = () => {
  return (
    <div className="app">
        <FullPage>
          <div className="about">
            <h4>Hi there. I'm Lise (rhymes with "please", "sleaze", and "oh, geeez"). I'm a user-focused product designer and former front-end developer that hails from the Midwest, which is why you'll probably think I say the word "bagel" strangely.</h4>
            <h4>I've got 3+ years designing and coding with a broad range of teams: from small startups to large enterprises, helping them shape problems, think through solutions, and design beautiful user experiences.</h4>
            <h4> I started coding and designing at the age of 13: teaching myself HTML and CSS so I could make a website for the actor <a href="https://www.google.com/search?q=josh+hartnett&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiOx83X8KnUAhULxWMKHbRHBQkQ_AUICigB&biw=1547&bih=860" target="_blank">Josh Hartnett</a> (which I appropriately titled "The Josh HOTnett Fan Site"). When I'm not designing & coding my brains out, you can find me reading or sketching whilst slugging almond milk lattes in a local cafe. Oh, and sometimes I sing in a punk band. </h4>
            <h4>I'm pretty friendly and like collaborating with kewl + passionate people. Wanna grab a coffee and talk about life n junk? Hit me up on <a href="https://twitter.com/lisekyle">twitter</a>.</h4>
              <div className="about__links">
                  <ul className="footer--top">
                    <li><a className="fancy-underline" href="mailto:lisekyle@gmail.com">email</a></li>
                    <li><a className="fancy-underline" href="https://www.dropbox.com/s/uo7it8qmdj5s7g3/lisekylechapman_resume2017_2.pdf?dl=0" target="_blank">résumé</a></li>
                    <li><a className="fancy-underline" href="https://twitter.com/lisekyle">twitter</a></li>
                    <li><a className="fancy-underline" href="https://www.linkedin.com/in/lisekylechapman" target="_blank">linkedin</a></li>
                    <li><a className="fancy-underline" href="https://dribbble.com/lisekylechapman" target="_blank">dribbble</a></li>
                    <li><a className="fancy-underline" href="https://github.com/lisekyle" target="_blank">github</a></li>
                    <li><a className="fancy-underline" href="https://www.behance.net/lisekyle" target="_blank">behance</a></li>
                  </ul>
              </div>
            </div>
      </FullPage>
    </div>
  )
}

export default about;
