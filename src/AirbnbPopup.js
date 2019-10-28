import React, { Component } from "react";

class AirbnbPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed">
        <div className="w-25 mobile-w-100">
          <h2>Airbnb </h2>
          <button class="close-button" onClick={this.props.handler}>
            ×
          </button>
          <br />

          <br />

          <p className="m-top-0">
            <strong>Summary:</strong>
            <br />
            Exploring payment and web UI options for traveling with a pet
            through Airbnb.
            <br />
            <br />
            <strong>Teammates:</strong> <br />
            <a href="https://www.linkedin.com/in/erica-cantor-273a12147/">
              Erica Cantor
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/idreeskamal/">Idrees Kamal</a>
            <br /> <br />
            <strong>Timeline:</strong>
            <br />
            10 weeks
            <br />
            <br />
            <strong>Key Results:</strong>
            <br />
            &middot; 15/23 hosts surveyed were interested in the proposed
            feature <br />
            <br />
            &middot; Research was shared with Airbnb Experience Research team
          </p>
        </div>
        <img
          src="/img/airbnbbanner.png"
          width="70%"
          className="p-top-0 m-l-5 mobile-w-100 mobile-m-l-0"
        />
        <br />

        <div className="w-30 p-10 p-top-5 p-right-2 align-right mobile-w-100 mobile-align-left mobile-padding-0">
          <h6>📖</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100 mobile-padding-0">
          <h6>Context</h6>
          <p className="m-0 m-bottom-0">
            Through investigating Airbnb hosts’ problems with guests traveling
            with pets, we found that it was difficult to make hosting pets a
            gratifying experience. We used a combination of interviews, surveys,
            and analysis of the Airbnb community forums to validate these
            problems and find a solution in{" "}
            <strong>
              a nightly pet fee, dependent on the number of pets, charged at
              time of payment
            </strong>
            . After communicating with product specialists and researchers, we
            proposed this as a solution combined with exploratory visions for a
            pet profile to the Airbnb Experience Research team.
          </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-2 align-right mobile-align-left mobile-padding-0 mobile-w-100">
          <h6>🤸</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100 mobile-padding-0">
          <p className="m-0 m-bottom-5">
            <h6>My Role</h6>My individual contributions included creating and
            distributing a survey to 23 Airbnb hosts over various platforms,
            visual design for presentation materials, and initial UI mockups
            created in Figma.
          </p>
        </div>

        <div className="w-80 p-10 p-top-5 p-right-2 p-bottom-0 align-left mobile-w-100 mobile-p-10">
          <h6>
            How might we help Airbnb hosts to easily accept pet travelers?
          </h6>
        </div>
        <br />
        <div className="w-30 p-10 p-top-5 p-right-2 align-right mobile-align-left mobile-padding-0 mobile-w-100">
          <h6>📝</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100 mobile-padding-0">
          <p className="m-0 m-bottom-5">
            <h6>Design Process</h6>
            As a team, we discovered that pet owners were a market of
            opportunity for problem-solving within Airbnb: they’re prioritized
            in the search and navigation process with a “Pets Allowed” filter,
            but the care for the experience of pet travelers ends there.
            Considering the experience of Airbnb has barely begun when guests
            are searching for listings, there are still many touch points at
            which a guest interested in traveling with their pet might encounter
            friction.
          </p>{" "}
          <strong>
            <h5>From Travelers to Hosts</h5>
          </strong>
          <p className="m-0 m-bottom-5">
            Our initial plan was to focus on the travelers, but searching the
            Airbnb community forum showed us overwhelming evidence that{" "}
            <strong>
              hosts are the ones who often have to deal with the repercussions
              of these problems.
            </strong>
            &nbsp; This was especially important because damage caused by pets
            is not covered by Airbnb’s normal host guarantee, so we wanted to
            address their problems by identifying the blockers that stopped this
            experience from being valuable and joyful for hosts.
          </p>
          <img
            src="/img/numbers.png"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
          <p className="m-0 m-bottom-5">
            To dig deeper in understanding hosts, we sent out a survey by across
            forums and Facebook groups to get a sense of their attitudes towards
            pets. In follow-up phone interviews, three hosts recounted for us
            the ways that they had created their own solutions to feeling safe
            and secure in accepting travelers with pets. We found that Airbnb
            hosts had to go through a manual process to ask guests if they were
            planning on bringing pets, and that many of them had already opted
            to collect a pet fee or deposit.{" "}
          </p>
          <img
            src="/img/petquotes2.png"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
          <p className="m-0">
            However, before deciding that a one-time, flat pet fee was the
            solution to all of these problems, we tried to consider edge cases.
            Our research showed that Airbnb hosts vary significantly in their
            involvement and in the ways that they value their spaces: from
            live-in hosts who would love to host pets and empathize with the
            frustrations that can come with pet travel, to hosts who make their
            living on Airbnb and are already thinking about the extra cleaning
            fees they'll have to pay to prep for the next guest. &nbsp;
            <strong>
              Though we often thought about cases where a single pet would be on
              vacation for a few days, accounts of multiple pets coming to stay
              for 3+ months helped us to retain the belief that we needed to
              create a flexible solution that could fit owners of all kinds of
              listings.{" "}
            </strong>
          </p>
          <p className="m-0 m-bottom-5">
            <img
              src="/img/edgecases.jpg"
              width="125%"
              className="p-top-0 mobile-w-100 mobile-m-l-0"
            />
            <br />
            This, combined with a series of survey questions asking hosts to
            compare different fees / deposits, led us to believe that{" "}
            <strong>
              a nightly fee dependent on the number of pets made the most sense.{" "}
            </strong>
          </p>
          <img
            src="/img/nightlyfee.jpg"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
          <p className="m-0 m-bottom-5">
            Providing hosts security by allowing them to collect it at the time
            of payment would make our suggestion significantly more valuable
            than existing workarounds. And in talking to Airbnb, we found that
            this solution had the added bonus of relieving traffic to the
            Resolution Center, where pet fee requests were already one of the
            most popular types of transactions.{" "}
          </p>
          <p className="m-0 m-bottom-10">
            This pet fee system showed promise, but in reflecting on our goals
            of making this both informative and joyful, we felt like the process
            remained <strong>impersonal</strong>.{" "}
          </p>{" "}
          <strong>
            <h5>Creating a Pet Profile</h5>
          </strong>
          <p className="m-0 m-bottom-5">
            To add to our goal of making it a more empathetic process, we built
            out initial mockups for a pet profile to visualize the process of
            guests adding pets as well. This was a visionary part of the project
            that showed more of what this could look like implemented on the
            Airbnb platform, and gave us a chance to plaster dog pictures
            everywhere too!
          </p>
          <img
            src="/img/petprofile1.jpg"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
          <img
            src="/img/petprofile2.jpg"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
          <img
            src="/img/petprofile3.jpg"
            width="125%"
            className="p-top-0 mobile-w-100 mobile-m-l-0"
          />
        </div>

        <div className="w-30 p-10 p-top-5 p-right-2 align-right mobile-align-left mobile-padding-0 mobile-w-100">
          <h6>🔢</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100 mobile-padding-0">
          <p className="m-0 m-bottom-5">
            <h6>Results</h6>
            <img
              src="/img/airbnbflow.jpg"
              width="125%"
              className="p-top-2 p-bottom-2 mobile-w-100 mobile-m-l-0"
            />
            This solution was developed with the needs of Airbnb hosts in mind,
            so our success metric for the project was contingent on host buy-in.
            By the end of the project we heard that{" "}
            <strong>
              {" "}
              15/23 of hosts that we worked with would be interested in using
              this feature, 3 of whom don't even accept pets right now.
            </strong>
          </p>
          <p className="m-0 m-bottom-5">
            Since this project was done as part of the Northwestern University
            Bay Area Immersion Program, we passed this research onto the
            Experience Research team at the end of 10 weeks.
          </p>{" "}
        </div>
        <div className="w-80 m-10 m-bottom-2 m-top-2 p-10 p-top-5 align-center p-bottom-0 mobile-w-80 mobile-m-0">
          <h6 onClick={this.props.prevHandler} className="fake-link">
            PREVIOUS CASE STUDY:
            <br />
            BRAINTREE
          </h6>
        </div>
      </div>
    );
  }
}

export default AirbnbPopup;
