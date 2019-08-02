import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="w-30 m-20 m-right-0 m-top-5 h-100 mobile-w-80 m-right-0 m-bottom-10 mobile-m-10 mobile-m-top-0 about">
          <p>
            {" "}
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
          <p>
            Currently, I'm looking for PM/design internships for winter 2020,
            and full-time roles starting June 2020. Interested? Feel free to
            reach out at thomastli@u.northwestern.edu!
          </p>
        </div>
        <div className="w-30 h-100 me-img p-left-2 m-top-5">
          <img src="/img/me.jpg" />
        </div>
      </div>
    );
  }
}

export default About;
