import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="m-20 m-top-0 p-top-0 m-bottom-2 footer mobile-w-80 mobile-m-10">
        <h5>
          Built with <i class="material-icons size-16 blue">favorite</i> in 2019.
        </h5> <br />
        <a href="mailto:thomastli@u.northwestern.edu"><i class="material-icons size-16 blue">email</i> Email</a> &nbsp; &middot;&nbsp;
        <a href="https://twitter.com/thmstli"> <i class="material-icons size-16 blue">face</i> Twitter</a>&nbsp; &middot;&nbsp;
        <a href="https://linkedin.com/in/thomastli"> <i class="material-icons size-16 blue">work</i> LinkedIn</a>
      </div>
    );
  }
}

export default Footer;
