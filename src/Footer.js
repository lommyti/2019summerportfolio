import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className=" m-top-0 p-top-0 m-bottom-2 footer mobile-w-100 ">
        <h5>
          Built with <i class="material-icons size-16 blue">favorite</i> in
          2019.
        </h5>{" "}
        <br />
        <a href="mailto:thomastli@u.northwestern.edu">Email</a> &nbsp; &nbsp;
        <a href="https://twitter.com/thmstli"> Twitter</a>
        &nbsp; &nbsp;
        <a href="https://linkedin.com/in/thomastli"> LinkedIn</a> &nbsp; &nbsp;
        <a href="https://medium.com/@thomastli/"> Medium</a>
      </div>
    );
  }
}

export default Footer;
