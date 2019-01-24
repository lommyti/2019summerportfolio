import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container h-100">
        <div className="w-50 m-10 h-100 m-top-7-5 m-bottom-5 mobile-w-80">
          <h2>
          <em>  Hey there! Call me Tommy.</em>
          </h2>
          <p className="m-bottom-7-5 mobile-center mobile-top-15">I'm a junior <a href="https://northwestern.edu">@northwestern</a> & a digital product junkie; I'm in my element when I'm challenging assumptions & understanding the parts of a product's look and feel.
          <br/><br/>
          <span className="info">
              prev: <a href="https://www.braintreepayments.com/">@braintree</a> Docs intern &middot;
              soon: <a href="https://www.groupon.com/">@groupon</a> PM intern <br/>
              now: <a href="https://design.northwestern.edu/programs/bay-area-immersion/">@nu bay area immersion program</a><br/><br/>
              <a class="home-button" href="#portfolio"><img src="/img/bouncing-arrow.gif" width="16px" style={{verticalAlign: 'middle'}}/> portfolio</a></span>
</p>
        </div>
     </div>
    );
  }
}

export default Homepage;
