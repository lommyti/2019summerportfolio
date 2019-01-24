import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="m-10 m-top-7-5 m-bottom-2 footer mobile-w-100">
        <h5>
          Built with <i class="material-icons size-16 blue">favorite</i> by Thomas Li, in 2019.
        </h5> <br />
        <a href="mailto:thomastli@u.northwestern.edu"><i class="material-icons size-16 blue">email</i> email</a> &nbsp; &middot;&nbsp;
        <a href="https://twitter.com/thmstli"> <i class="material-icons size-16 blue">face</i> twitter</a>&nbsp; &middot;&nbsp;
        <a href="https://linkedin.com/in/thomastli"> <i class="material-icons size-16 blue">work</i> linkedin</a>
      </div>
    );
  }
}

export default Footer;
