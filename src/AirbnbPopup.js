import React, { Component } from 'react';

class AirbnbPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed">

        <h2>Airbnb Filter Hierarchy Project</h2>]
        <button class="close-button" onClick={this.props.handler}>×</button><br/>

        <br/>

        <p><em>Rethinking the filter experience. <br/>An <a href="https://airbnb.com/">Airbnb</a> client project done during the Northwestern Bay Area Immersion Program.</em><br/><br/>
        Teammates: <a href="https://www.linkedin.com/in/bridgetchia/">Bridget Chia</a>, <a href="https://www.linkedin.com/in/katherineliu2020/">Katherine Liu</a><br/>
        Mentor: <a href="https://www.linkedin.com/in/gracevorreuter">Grace Vorreuter</a> </p>
        <br/>
        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>The Problem</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">

        <p className="m-0 m-bottom-0">
        Speaking to our mentor and other Airbnb users led us to believe that<strong> lessening the fatigue and frustration that guests experience while searching would help them successfully complete bookings more often and more quickly.</strong>
        &nbsp;Looking at the list of 155+ filters that can be applied within the "More Filters" tab when guests are searching for homes, we recognized that providing every possible criterion with equal weighting under potentially ambiguous groupings was not the best way to help guests narrow their search results.
   </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>My Role</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">Much of the work for this project was done as a group; some of my individual responsibilites included running a <strong>survey</strong> on perceptions of the search and filter processes of Airbnb, creating <strong>high-fidelity mockups in Figma</strong> for user testing, and being the primary <strong>visual designer</strong> for presentation materials.
        </p>
        </div>

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Design Process</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <h4 className="m-0 m-bottom-5">Research</h4>
        <p className="m-0 m-bottom-5">We started trying to solve this problem by trying to understand the current guest journey when trying to book an Airbnb.</p>
        <img src="/img/journey.png" width="150%" className="p-top-0"/>
        <p className="m-0 m-bottom-5">Right now, it divides itself pretty neatly into these five steps: <strong>starting</strong> with navigating on the Airbnb website, <strong>entering details</strong> like # of guests, location, and date, <strong>filtering</strong> the search results from that initial
        inquiry, <strong>browsing</strong> once the relevant filters have narrowed the search, and finally <strong>booking</strong> with a host once all of the details have been confirmed.  </p>
        <p className="m-0 m-bottom-5">We knew that our idea of focus was going to be contained within the process following entering trip details and before guests book, but besides that we weren't sure how to approach the problem.</p>
        <p className="m-0 m-bottom-5">To get more insight into how guests currently experience the search process, we turned to <strong>user interviews</strong> and a <strong>survey about the search experience</strong> with 55 participants who were around the core age demographic for Airbnb users. From those methods, we came to three main conclusions:
        <br/><br/>
        <ol>
        <li><strong>Guests perceive the stock of available Airbnbs, and filters, as generally overwhelming.</strong> The majority of guests we talked to said that they felt the process of finding an Airbnb took longer than that of a hotel, which was concerning to us from a UX and business perspective. </li>
        <li><strong>Guests tend to use around five filters when they search, and prefer to use a combination of filters and manual search.</strong>&nbsp;Balancing the feeling of freedom with a manageable number of options is key.</li>
        <li><strong>Guests aren't very aware of the filter options available to them, and find some of them confusing or unnecessary.</strong> Conversations where we pulled up the "More Filters" tab in front of the guest often led to reactions like, "That's a filter?" or "Who would ever filter for hangers?"</li>
        </ol>
        </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>User Testing</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0 p-bottom-5">Once we better understood the pain points in searching for an Airbnb, we set about testing prototypes for changes to the existing system. We did this at three levels, each testing a different issue with a slightly different level of fidelity.</p>
        <p className="m-0 p-bottom-5">We first wanted to see if there were any immediate improvements we could make by updating the category names that currently hold all of the filters on Airbnb. To do this, we started with a card sorting exercise that helped us to see how guests consider the list of filters according to their mental model:</p>
        <img src="/img/cardsorting.jpg" width="150%" className="p-top-0"/>
        <p className="m-0 p-bottom-5"><em>The results of one of our card sorts.</em></p>

        <p className="m-0 p-bottom-5">We then combined these results with our findings on guest behavior to create new and updated category lists, and recruited participants to try and match filters to different paper and Sharpie-written versions of the categories. However, we learned here that guests have widely varying ways of thinking about Airbnb which significantly affect their mental organization of filters; examples like "bed sheets" waffled
        between "Basics" and "Amenities", and participants were split between considering "Accessibility" as a function of location and an amenity.</p>
        <p className="m-0 p-bottom-5">That initial test discouraged us from the idea that there was a perfect listing and order of filters that would make it easy for all users to navigate the "More Filters" tab with ease, so we started thinking of more advanced features that could assist guests. One idea we had was to have the filters reorder themselves as guests started to choose filters, based on their choices:</p>
        <img src="/img/crib2.gif" width="150%" className="p-top-0"/>
        <p className="m-0 p-bottom-5"><em>As the guest chooses the "Crib" filter, the "High Chair" filter and the safety-related filters come to the top of the category, making it easier for the guest to see them since they'll likely consider these choices if they need a crib.</em></p>
        <p className="m-0 p-bottom-5">Though this idea showed some promise when we built it out in Figma and ran users through an initial usability test, users remarked that they felt like they were losing control over their search. They also felt strange that filters which were somewhat but not directly related to their choice (for example, "Smoke Detector" with the "Crib" filter) were moving. We had imagined this would help them to read quickly through the list of filters, but it instead left them skeptical at the way the system worked.</p>
        <p className="m-0 p-bottom-5">To counteract the feeling of lost control that users expressed in these tests, we then ran users through a new flow where they would be asked to select permanent filters that would be associated with their profiles.</p>
        <img src="/img/permanent.png" width="150%" className="p-top-0"/>
        <p className="m-0 p-bottom-5">Once again, though, we were met with new goals met and new drawbacks. Though this idea made a lot of sense to us, as we thought it would resolve the burdens of putting in the same preferences every time, we didn't take into account that guests wouldn't understand our intentions if they were asked to add these permenant filters during the onboarding process.</p>

        <p className="m-0">Discussing the results from our testing from our testing led us to notice that we were fixated on perfecting filters and were constantly surprised by the reactions of the people using them. This was frustrating until we came to a bit of a breakthrough: why were we so focused on filters just because our goal was to get people to listings as quickly as possible? What if we could think of a way to <strong>remove the filter step</strong> &nbsp;from the guest journey altogether?</p>

        </div>


        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Final Prototype Flow/Screens</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <img src="/img/finalscreen.png" width="150%" className="p-top-0"/>
        <p className="m-0 m-bottom-5"><em>The final mockup for our proposed changes.</em></p>
        <p className="m-0 m-bottom-5">This was the inspiration behind our final mockup, which was the one we ended up proposing to Airbnb as a solution. We wanted to use <strong>automatically applied, context-aware filters</strong> to quickly connect users with the right listings by pre-applying filters based on the guest's search details and past interactions.</p>
        <p className="m-0 m-bottom-5">Pre-applied filters would show in the blue bar on the left, with recommended filters waiting to be applied in the bar next to it. We kept the "Home Type" and "Price" selectors since they're the most commonly used search modifiers, and added listing-by-listing nice-to-haves like "Hot Tub" and "Pool" at the bottom of each individual listing.</p>
        <p className="m-0 m-bottom-5">Though our team didn't have any AI experts, we imagine that data points like location, # of guests, and dates can be used to infer logical/illogical filter choices, and that information from past bookings, past searches, and similar searches by other guests could be used as a baseline model to select the relevant filters.</p>
        <img src="/img/filters.png" width="150%" className="p-top-0"/>
        <p className="m-0 m-bottom-5">And given that we had seen a focus on freedom and understanding in our user testing, combined with the current societal focus on understanding data usage/algorithmic transparency, we felt it was important to include a feature that informed users on how these decisions were made. I built an HTML/CSS mockup for this that showed the intended hover effect, which would show users the factors that contributed to the filter being automatically applied.</p>

        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>What I Learned</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0 m-bottom-5">Coming to this solution was the end of a long, hectic path. I was tested in a wide variety of design skills from ideation to choosing the right research and prototyping methods, as well as wrapping up our work in high-quality deliverables and mockups. Here were some of my key takeaways:</p>
        <ul>
        <li><strong>The best way to prove something is by showing it to users.</strong> Our group learned to avoid the trap of disagreeing on what we thought the user would want by making our ideas real and actually showing them to people. Instead of debating in our heads, we turned to pencil and paper and called up users to talk about how they felt. </li>
        <li><strong>New ideas come when assumptions are challenged.</strong> When we had ideation sessions or tried to come up with new concepts, the things we came up with usually flowed naturally from what we talked about before. But we made a real and new kind of progress by identifying the similarities in all of the ideas we chose and asking ourselves if those had to be true in every scenario. This method of thinking helped us to see the problem in a new light that grounded our work, ideas, and assumptions in the guest problem that we first set out to solve.</li>
        </ul>
        <p className="m-0 m-bottom-5">This project was delivered to Airbnb after a 10-week period, but I had a lot of fun working on it and could easily imagine the steps that it would take to implement it gradually. There are different steps, bits, and pieces of our solution and test results that could be used to improve search and filtering for Airbnb, getting guests to the right listings the first time they search.</p>
        <img src="/img/firsttime.png" width="150%" className="p-top-0"/>

        </div>
      </div>
    );
  }
}

export default AirbnbPopup;
