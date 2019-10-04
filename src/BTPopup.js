import React, { Component } from "react";

class BTPopup extends Component {
  render() {
    return (
      <div className="w-100 h-100-abs p-10 popup pos-fixed-fixed">
        <h2>Hosted Fields Landing Page Redesign</h2>
        <button class="close-button" onClick={this.props.handler}>
          ×
        </button>
        <br />
        <div className="w-100 h-100 p-top-2">
          <p className="m-0 m-bottom-2">
            This work is from my summer internship with Braintree in 2018, and
            is therefore protected. Please reach out if you're interested in
            seeing it, and I'd be more than happy to give you the password.
          </p>
          <a href="/assets/btcasestudy.pdf" target="_blank">
            Link to the password-protected PDF
          </a>
          <div className="w-80 m-10 m-bottom-2 m-top-2 p-10 p-top-5 align-center p-bottom-0 mobile-w-80 mobile-m-0">
            <h6
              onClick={this.props.nextHandler}
              className="fake-link m-right-5"
            >
              🠘
              <br /> NEXT CASE STUDY:
              <br />
              AIRBNB
            </h6>
            <h6 onClick={this.props.prevHandler} className="fake-link">
              🠚 <br />
              PREVIOUS CASE STUDY:
              <br />
              NU KNIGHT LAB
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default BTPopup;
