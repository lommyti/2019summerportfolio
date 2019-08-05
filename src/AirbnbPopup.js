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

          <p>
            <em>
              Building a pet payments system. <br />
              An <a href="https://airbnb.com/">Airbnb</a> client project done
              during the Northwestern Bay Area Immersion Program.
            </em>
            <br />
            <br />
            Teammates: Erica Cantor, Idrees Kamal
            <br />
          </p>
        </div>
        <img
          src="/img/airbnbbanner.png"
          width="70%"
          className="p-top-0 m-l-5 mobile-w-100 mobile-m-l-0"
        />
        <br />

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
          <h6>Context</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <p className="m-0 m-bottom-0">
            Through investigating Airbnb hosts’ problems with guests traveling
            with pets, we found that recurring issues with their ability to
            ensure the safety of their listings interfered with making hosting
            pets a gratifying experience. We used a combination of interviews,
            surveys, and analysis of the Airbnb community forums to validate
            these problems and find a solution in{" "}
            <strong>
              a nightly pet fee, dependent on the number of pets, charged at
              time of payment
            </strong>
            . After communicating with product specialists and researchers, we
            proposed this as a solution combined with exploratory visions for a
            pet profile to the overall Airbnb Experience Research team.
          </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
          <h6>My Role</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <p className="m-0">
            I worked with two other students to put this project together: my
            individual contributions included creating and distributing a survey
            to 23 Airbnb hosts over various platforms, visual design for
            presentation materials, and initial UI mockups created in Figma.
          </p>
        </div>

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
          <h6>Design Process</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <p className="m-0 m-bottom-5">
            As a team, we found that pet owners were a market of opportunity for
            problem-solving within Airbnb: they’re prioritized in the search and
            navigation process with a “Pets Allowed” filter, but the care for
            the experience of pet travelers ends there.{" "}
          </p>{" "}
          <p className="m-0 m-bottom-5">
            Our initial plan was to focus on the travelers, but searching the
            Airbnb community forum showed us overwhelming evidence that hosts
            are the ones who often have to deal with the repercussions of these
            problems. This was especially important because damage caused by
            pets is not covered by Airbnb’s normal host guarantee, so we wanted
            to address their problems by identifying the blockers that stopped
            this experience from being valuable and joyful for hosts.
          </p>
          <p className="m-0 m-bottom-5">
            We sent out a survey by connecting with Airbnb hosts across forums
            and Facebook groups to get a sense of the landscape and their
            attitudes towards pets. In follow-up phone interviews, three hosts
            recounted for us the ways that they had created their own solutions
            to feeling safe and secure in accepting travelers with pets. We
            found that Airbnb hosts had to go through a manual process to ask
            guests if they were planning on bringing pets, and that many of them
            had already opted to collect a pet fee or deposit through the same
            process that they would use to collect damages (the Airbnb
            Resolution Center).{" "}
          </p>
          <img src="/img/petquotes.jpg" width="125%" className="p-top-0" />
          <p className="m-0">
            However, before deciding that a pet fee was the solution to all of
            these problems, we needed to think about edge cases.
          </p>
          <p className="m-0 m-bottom-5">
            <img src="/img/edgecases.jpg" width="125%" className="p-top-0" />
            <br />
            <br />
            Accounts of multiple pets coming to stay for 3+ months helped us to
            retain the belief that we needed to create a flexible solution that
            could fit owners of all kinds of listings. This, combined with a
            series of questions in our survey asking hosts to compare different
            types of pet fees and deposits, we found that a nightly fee
            dependent on the number of pets made the most sense.{" "}
          </p>
          <p className="m-0 m-bottom-5">
            Providing hosts security by allowing them to collect it at the time
            of payment (rather than waiting for the guest to accept the payment
            on the Resolution Center) and suggesting to incorporate this into
            the regular payment flow would make our suggestions significantly
            more valuable than the existing workaround systems. And in talking
            to Airbnb, we found that this solution had the added bonus of
            relieving traffic to the Resolution Center, where pet fee requests
            were already one of the most popular types of transactions.{" "}
          </p>
          <img src="/img/nightlyfee.jpg" width="125%" className="p-top-0" />
          <p className="m-0 m-bottom-5">
            This pet fee advancement showed promise, but in reflecting on our
            goals of making this both informative and joyful, we felt like the
            process remained <strong>impersonal</strong>.{" "}
          </p>
          <p className="m-0 m-bottom-5">
            To add to the goal of making it a more empathetic process, we built
            out some initial mockups for a pet profile to see what it would look
            like for guests to provide information about their pets as well.
            This was a visionary part of the project that showed more of what
            this project could look like as something implementable on the
            Airbnb platform, and gave us a chance to plaster dog pictures all
            around our project too!
          </p>
          <img src="/img/petprofile1.jpg" width="125%" className="p-top-0" />
          <img src="/img/petprofile2.jpg" width="125%" className="p-top-0" />
          <img src="/img/petprofile3.jpg" width="125%" className="p-top-0" />
        </div>

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
          <h6>Results</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <p className="m-0 m-bottom-5">
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
      </div>
    );
  }
}

export default AirbnbPopup;
