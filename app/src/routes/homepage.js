import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/SubPageHeader';
import Section from '../components/Section';
import header from '../images/styleguide/header.jpg';
import painpoint1 from '../images/homepage/painpoint1.jpg';
import painpoint2 from '../images/homepage/painpoint2.jpg';
import painpoint3 from '../images/homepage/painpoint3.jpg';
import impression1 from '../images/homepage/impression1.jpg';
import impression2 from '../images/homepage/impression2.jpg';
import iteration1 from '../images/homepage/iteration1.jpg';
import iteration2 from '../images/homepage/iteration2.jpg';
import iteration3 from '../images/homepage/iteration3.jpg';


export const homepage = () => {
  return (
    <div className="app">
      <div className="container">
        <SubPageHeader
          title={"Research and listening to users"}
          subtitle={"Re-evaluating brand impression with user feedback"}
          />
        <Section title={"My Role"}>
          <div className="section__body--wrapper">
            <p className="margin0btm">I led an effort to re-evaluate our homepage and improve the design after an unsatisfactory launch. <span className="bold">I tested stakeholder assumptions and collected user feedback by conducting research interviews, A/B testing, and competitive analysis.</span> The final design was based on findings from this research and internal critiques.</p>
          </div>
        </Section>
        <Section title={"Problem"}>
          <div className="section__body--wrapper">
            <p>During the last year, the company began the shift of its core business from media and news to products tailored for the edtech industry. <span className="bold">Prior to my involvement, a redesign of the homepage was initiated to reflect this change.</span></p>
            <p>The first iteration of the project had an intense timeline. Because of this, little to no user testing happened before or during the process. When the homepage launched, there was an intense backlash from the loyal community of users: readership and page views took a sharp drop, and users sent emails complaining.</p>
            <blockquote>"I used to visit the homepage everyday, but now I just feel trapped when I go there. Thankully you didn't change the newsletters..."</blockquote>
            <blockquote>"What's going on with the new site? Are you being sponsored now? It no longer feels like a friendly site; just a sales pitch."</blockquote>
            <p className="margin0btm">After the launch, I was brought on to re-evaluate the homepage design. My challenge was working within a pretty aggressive timeline (two weeks), and to keep most of the UI elements the same due to engineering restrictions. <span className="bold">My goal for the project was to restore our brand impression, and re-establish trust amongst our audience.</span></p>
          </div>
        </Section>
        <Section title={"Strategy"}>
          <div className="section__body--wrapper">
            <p>The company has a very broad user base that spans from educators to companies, but our core audience consists of readers interested in all things edtech. Most concerning was that users felt we were pivoting away from being a reputable source of news, resources, and products, and instead becoming a revenue-driven "edtech" company; trying to push products they did not need to make a sale. </p>
            <p>I felt very strongly that user testing should be our priority. I started off by asking my co-workers who work in close collaboration with our audience on social media to gather some off-the-cuff impressions. After gathering insights and sharing with the Director of Product, I compiled them into a list of pain points with testable assumptions.</p>
          </div>
          <div className="image--subpage --multiple">
            <img src={painpoint1}/>
          </div>
          <div className="section__body--wrapper">
            <h4>Pain Point: Not Enough News</h4>
            <p>Users felt there was not enough news on the homepage. They also didn't associate the news cards with containing actual news stories. Some people thought they were merely a series of advertisements.</p>
            <p className="margin0btm"><span className="bold">Testable assumptions:</span>
              <ul>
                <li>Decrease the hero section height, and try moving news cards above the fold.</li>
                <li>Add more sections with cards throughout the homepage.</li>
                <li>Add author bylines and timestamps to cards.</li>
              </ul>
            </p>
          </div>
          <div className="image--subpage">
            <img src={painpoint2}/>
          </div>
          <div className="section__body--wrapper">
            <h4>Pain Point: Confusing Call-to-Action</h4>
            <p>Users were frustrated that the "Get Started" call-to-action button took them to a sign-up form for our newsletter. They felt the language was misleading and led to mistrust in our news quality.</p>
            <p><span className="bold">Testable assumptions:</span>
              <ul>
                <li> Rethink our value proposition. "Make better choices is edtech" sounds like we are selling something. Feedback was also given that it feels like we are talking "down" to users (i.e. telling them they aren't already making valid choices).</li>
                <li>Take out the "Get Started" button and replace it with a more detailed explanation of EdSurge's values and mission statement.</li>
                <li>Move the newsletter sign-up lower on the page, after users have scrolled a bit and feel like we are trustworthy.</li>
              </ul>
            </p>
          </div>
          <div className="image--subpage">
            <img src={painpoint3}/>
          </div>
          <div className="section__body--wrapper">
            <h4>Pain Point: Voice and Tone Feels Unfocused </h4>
            <p>The voice and tone of copy, along with imagery and layout of the website looks like a sales pitch for an edtech product. There is a general lack of understanding about what EdSurge's focus is as a company. </p>
            <p><span className="bold">Testable assumptions:</span>
              <ul>
                <li>Consolidate product cards to look more uniform, re-think imagery and use of illustration. </li>
                <li>Re-arrange the UX to not read so "product" by taking out the icons and copy below the fold.</li>
                <li>Work with marketing to come up with a different tone of voice.</li>
              </ul>
            </p>
          </div>
        </Section>
        <Section title={"Testing"}>
          <div className="section__body--wrapper">
            <p>Our goal for user testing was exploratory and impression based. Because of that, we decided to run two different tests: a question-based impression test with non-users and research interviews with our current audience. <span className="bold">We wanted to measure core users' general attitudes surrounding the new homepage design versus the one that was currently up.</span></p>
          </div>
          <div className="section__body--wrapper">
            <h4>Impression Test</h4>
            <p>A timed test with simple questions from a small selection of random users not familiar with our brand. We used a third party service and gathered feedback from 25-30 people, aged 18-65, with a college-level education. We wanted to measure whether our not our homepage gave an accurate first impression of EdSurge's brand to non-users.</p>
          </div>
          <div className="image--subpage --grid">
            <img src={impression1}/>
            <div className="image--subpage--description">
                <small className="mono">Before: A more scattered response which felt unfocused.</small>
            </div>
          </div>
          <div className="image--subpage --grid">
            <img src={impression2}/>
            <div className="image--subpage--description">
                <small className="mono">After: Response was more focused, and emphasized "news".</small>
            </div>
          </div>
          <div className="section__body--wrapper">
            <h4>User Research</h4>
            <p>We gathered a selection of 15 users from our core audience that were willing to speak with me while looking at a mock-up of our homepage in InVision. The users consisted of edtech company representatives, teachers in K-12, administrators of school districts, and university professors. The interviews took anywhere from 10-20 minutes.</p>
            <p className="margin0btm"><span className="bold">User Interview Questions</span>
              <ol>
                <li>Tell me how you are connected to EdSurge, how long you have been connected and a bit about your background.</li>
                <li>Please take a look at the image in front of you. While you scroll through it, describe your stream-of-consciousness, gut-reaction to this page. There are no wrong answers.</li>
                <li>How would you describe what's changed, if anything? (about EdSurge, not regarding UX design)</li>
                <li>Does this change the relationship that you want to have with EdSurge? If so, how?</li>
                <li>Does this change what you would introduce EdSurge to someone else? If so, how?</li>
              </ol>
            </p>

          </div>
        </Section>
        <Section title={"Iteration"} noLine>
          <div className="section__body--wrapper">
            <p className="--margin-middle">Throughout our user testing, I created around fifteen different iterations based on feedback we were receiving. At the end of testing, I distilled them into three distinct versions and presented my findings to the stakeholders.</p>
          </div>
          <div className="section__body--wrapper">
            <h4>Iteration One</h4>
          </div>
          <div className="image--subpage --small">
            <img src={iteration1} />
          </div>
          <div className="section__body--wrapper">
            <p className="happy-face"><span className="bold">What worked:</span>
              <ul>
                <li>Users connected that we were doing news rather than just selling a product.</li>
                <li>Users felt there was more balance between product hooks and news stories.</li>
                <li>Users were happy that the “Get Started” button was no longer present. An overwhelming amount of people felt expressed that the previous call-to-action made them question our quality of news.</li>
              </ul>
            </p>
            <p className="sad-face --margin-middle"><span className="bold">What didn't work:</span>
              <ul>
                <li>Users still many questions about our header image and what our value proposition meant.</li>
                <li>Users were still unsure about the difference between our news stories and products we offered.</li>
                <li>Users did not connect to the "Who We Help" section at the bottom of the page, and felt it was placed too low.</li>
              </ul>
            </p>
          </div>
          <div className="section__body--wrapper">
            <h4>Iteration Two</h4>
          </div>
          <div className="image--subpage --small">
            <img src={iteration2} />
          </div>
          <div className="section__body--wrapper">
            <p className="happy-face"><span className="bold">What worked:</span>
              <ul>
                <li>There was a great response to the new value proposition. Lots of users were commenting: "That’s how I view EdSurge."</li>
                <li>Users felt they had a better understanding what an article was based on the author byline and timestamp.</li>
                <li>Users responded well to the subscribe call-out being further down the page.</li>
              </ul>
            </p>
            <p className="sad-face --margin-middle"><span className="bold">What didn't work:</span>
              <ul>
                <li>A bit too much callout for sponsored articles. Users were actively saying: "Oh, I’d avoid that."</li>
                <li>Users bothered by the illustration style of our icons, and sometimes the use of icons in general. Users commented on the "edtech company" nature of them.</li>
              </ul>
            </p>
          </div>
          <div className="section__body--wrapper">
              <h4>Iteration Three (Final)</h4>
          </div>
          <div className="image--subpage --small">
            <img src={iteration3} />
          </div>
          <div className="section__body--wrapper">
            <p className="happy-face"><span className="bold">What worked:</span>
              <ul>
                <li>Users liked the cleaner layout and felt it was easier to navigate.</li>
                <li>Users liked the number of news cards in the second section. Some comments were: "I will come to the homepage way more now!" and "The homepage doesn’t feel like a dead end anymore."</li>
              </ul>
            </p>
            <p className="sad-face margin0btm"><span className="bold">What didn't work:</span>
              <ul>
                <li>The copy for the "Who We Help" needs to include more of our audience, specifically those who work in higher education.</li>
              </ul>
            </p>
          </div>
      </Section>
      </div>
    </div>
  )
}

export default homepage;
