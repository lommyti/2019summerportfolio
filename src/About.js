import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="w-45 m-20 m-right-0 m-top-5 m-left-8 h-100 mobile-w-80 m-right-0 m-bottom-0 mobile-m-10 mobile-m-top-0 about">
          <div className="yellow-bar h-90 mobile-no-show" />
          <p className="abt-desc mobile-padding-0 mobile-w-100">
            {" "}
            <a href="https://twitter.com/thmstli">Twitter</a>
            &nbsp; &nbsp;
            <a href="https://linkedin.com/in/thomastli">LinkedIn</a> &nbsp;
            &nbsp;
            <a href="https://medium.com/@thomastli/">Medium</a>
            <br />
            <br />
            I’m a fourth-year student, finishing up my degree in communication
            studies, computer science, & human-centered design at Northwestern
            University; a less-boring description of me would probably mention
            my affinity for toucans,{" "}
            <a href="http://www.sumocitrus.com/" target="_blank">
              sumo citrus
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/watch?v=CAmiNMGIFWA"
              target="_blank"
            >
              this clip from Bojack Horseman
            </a>
            , geometric pie crust designs, & the movie, <i>Love, Simon</i>.
          </p>
          <p className="abt-desc mobile-padding-0 mobile-w-100">
            Work-wise, I just finished a PM internship at{" "}
            <a href="https://www.groupon.com/">Groupon</a> working on Groupon
            Goods, and I'm headed to <a href="https://www.wish.com">Wish</a>{" "}
            this winter as a product design intern on the Marketplace team!
          </p>
          <p className="abt-desc mobile-padding-0 mobile-w-100">
            Currently, I'm looking for full-time roles starting June 2020.
            Interested? Feel free to reach out at{" "}
            <a href="mailto:thomastli@u.northwestern.edu">
              thomastli@u.northwestern.edu
            </a>
            !
            <br />
            <br />
          </p>
        </div>
        <div className="w-30 h-100 me-img p-left-0 m-top-2">
          <img src="/img/me.jpg" />
        </div>
      </div>
    );
  }
}

export default About;
