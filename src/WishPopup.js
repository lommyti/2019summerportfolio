import React, { Component } from "react";

class WishPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed">
        <div className="w-25 mobile-w-100">
          <h2>Wish </h2>
          <button class="close-button" onClick={this.props.handler}>
            ×
          </button>
          <br />

          <br />

          <p>
            <a href="https://Wish.com/">Wish</a> "Order History" section
            redesign <br />
            <br />A design challenge for potential product design interns.
            <br />
            <br />
          </p>
        </div>
        <img
          src="/img/wishbanner.png"
          width="70%"
          className="p-top-0 m-l-5 mobile-w-100 mobile-m-l-0"
        />
        <br />

        <div className="w-30 p-10 p-top-5 p-right-2 align-right mobile-w-100">
          <h6>📖</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <h6>Summary</h6>

          <p className="m-0 m-bottom-0">
            Challenged to dig deeply into a problem in the Wish mobile app, I
            used a combination of self-walkthrough, user / non-user
            interviewing, and competitive analysis to address the unclear and
            circular <strong>Order History</strong> experience within the app,
            and outlined a redesigned solution intended to
            <strong> increase user trust and retention</strong>.
          </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-2 align-right mobile-w-100">
          <h6>🤸</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <h6>My Role</h6>

          <p className="m-0">
            I worked on this challenge (user research, competitive analysis,
            prototyping) from start to finish over the course of a week!
          </p>
        </div>

        <div className="w-30 p-10 p-top-5 p-right-2 align-right mobile-w-100">
          <h6>📝</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
          <h6>Design Process</h6>
          <p className="m-0 m-bottom-5">
            As a new user, I wasn't too familiar with the app or its potential
            flaws. Given the short time frame, I used three different methods to
            quickly understand the app from a product perspective so that I
            could hone into a specific problem to fix:
            <br />
            <ul>
              <li>
                {" "}
                <strong>Self-walkthrough</strong>
                <br />I explored the app's features, definitely not as an excuse
                to spend money.
              </li>
              <li>
                {" "}
                <strong>User / non-user interviews</strong>
                <br /> I reached out to people in my network to learn about why
                people either did or didn't use Wish currently. It turns out
                many of my friends are aware of the app but choose not to use
                it.
              </li>
              <li>
                {" "}
                <strong>Competitive analysis</strong>
                <br />
                E-commerce is a highly competitive space, so I wanted to compare
                the experience of using Wish to other industry power players.
              </li>
            </ul>
          </p>{" "}
          <p className="m-0 m-bottom-5">
            One issue that recurred through all three forms of research I used
            was skepticism about Wish’s early post-purchase process.
            <ul>
              <li>
                As a first-time purchaser on Wish, I found myself checking my
                order history constantly to confirm that my purchase had
                shipping updates and was going to be sent to me{" "}
              </li>{" "}
              <li>
                Through conversations with non-Wish users, some of their main
                concerns include long-term worry and anxiety that the product
                will be not as advertised / never arrive at all
              </li>
              <li>
                {" "}
                Groupon and Amazon’s shorter delivery cycle times make them less
                susceptible to the same concerns
              </li>
            </ul>
          </p>
          <img src="/img/petquotes.jpg" width="125%" className="p-top-0" />
        </div>
      </div>
    );
  }
}

export default WishPopup;
