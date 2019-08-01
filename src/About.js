import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="w-30 m-20 m-right-0 m-top-5 h-100 mobile-w-80 m-right-0 m-bottom-10 mobile-m-10 mobile-m-top-0">
          <p>
            {" "}
            My name is Thomas Li (really though, call me Tommy) and I'm a
            third-year student at Northwestern studying communication studies,
            computer science, & design.
          </p>

          <p>
            {" "}
            I feel strongly about{" "}
            <a href="http://www.sumocitrus.com/" target="_blank">
              sumo citrus
            </a>
            , creating my own custom{" "}
            <a
              href="https://open.spotify.com/user/t0mmyli?si=vqnwS4C2TnWakDsndgPpSQ"
              target="_blank"
            >
              Spotify playlist art
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/watch?v=CAmiNMGIFWA"
              target="_blank"
            >
              this clip from Bojack Horseman
            </a>
            , & the movie, <i>Love, Simon</i>.
          </p>
          <p>
            {" "}
            At school I'm involved in tech, social justice, & research
            extracurriculars, when I'm not&nbsp;
            <div class="pie">
              making pie
              <img src="/img/pie.jpg" />
            </div>
            .
          </p>
          <br />
          <p>
            Currently, I'm looking for PM/design internships for winter 2020,
            and full-time roles starting june 2020. Interested? Feel free to
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
