import React, { Component } from 'react';

class AirbnbPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed">

        <h2>Airbnb Filter Hierarchy Project</h2>
        <button className="close-button" onClick={this.props.handler}>×</button>
        <br/>

        <p><em>Rethinking the filter experience. <br/>An <a href="https://airbnb.com/">Airbnb</a> client project done during the Northwestern Bay Area Immersion Program.</em><br/><br/>
        Teammates: <a href="https://www.linkedin.com/in/bridgetchia/">Bridget Chia</a>, <a href="https://www.linkedin.com/in/katherineliu2020/">Katherine Liu</a><br/>
        Mentor: <a href="https://www.linkedin.com/in/gracevorreuter">Grace Vorreuter</a> </p>
        <br/>
        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>The Problem</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <img src="/img/problem.png" width="150%" className="p-top-0"/>
        <p className="m-0 m-bottom-5"><em>A summary of the information we were given initially to address the problems with the filter system within the search process on Airbnb.</em></p>

        <p className="m-bottom-0">
        This initial examination of the filter system on Airbnb led us to believe that<strong> lessening the fatigue and frustration that guests experience while searching would help them to successfully complete bookings more quickly.</strong></p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>My Role</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">Much of the work for this project was done as a group; some of my individual responsibilites included running a <strong>survey</strong> on perceptions of Airbnb as a brand, investigating <strong>guest mental models</strong> with a <strong>card-sorting exercise</strong>, creating <strong>high-fidelity mockups in Figma</strong> for user testing, and being the primary <strong>visual designer</strong> for presentation materials.
        </p>
        </div>

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Design Process</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <h4 className="m-0 m-bottom-5">Research</h4>
        <img src="/img/survey.png" width="150%" className="p-top-0"/>
        <p className="m-0 m-bottom-5"><em>Part of our survey results, showing wide variance in the types of amenities that guests expect
        from Airbnb (none of which are explicitly included by selecting "Private Room!").</em></p>
        <p>To better understand Airbnb guests, their preferences in search, and the assumptions they make while searching, we conducted a survey
        that we distributed among people in our personal networks who fall into Airbnb's core user base (older than college-age). </p>
        <p>Every person surveyed (n=55) had previously browsed listings on Airbnb, and guests tended to use a moderate amount of filters in their search.
        The pictured graph was definitely the most interesting part of our results: it suggested there was validity
        to our hypothesis that<strong> guests do not have a strong understanding of the meanings of the current filters on Airbnb.</strong></p>

        <img src="/img/cardsorting.jpg" width="150%" className="p-top-5"/>
        <p>Later in the process, we used a card-sorting exercise with some of the existing Airbnb filters to better understand how guests
        perceive the current filters. </p>

        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>User Testing</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">Coming soon!</p>

        </div>


        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Final Prototype Flow/Screens</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">
Coming soon!</p>
        </div>


        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Visual Design</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">
        Coming soon! </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>What I Learned</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">Coming soon!</p>
        </div>
      </div>
    );
  }
}

export default AirbnbPopup;
