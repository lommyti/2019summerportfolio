import React, { Component } from "react";
import "./App.css";
import "./Positioning.css";
import "./Flexbox.css";
import "./Mobile.css";
import "./Animations.css";
import Footer from "./Footer";
import Homepage from "./Homepage";
import ProductTile from "./ProductTile";
import About from "./About";
import Contacts from "./Contact";
import BTPopup from "./BTPopup";
import FCFPopup from "./FCFPopup";
import VizPopup from "./VizPopup";
import AirbnbPopup from "./AirbnbPopup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderHomepage: true,
      renderTiles: true,
      renderFooter: true,
      renderAbout: false,
      renderContact: false,
      renderBT: false,
      renderFCF: false,
      renderViz: false,
      renderAirbnb: false,
      renderDescs: true,
      renderAnims: true
    };
    this.BTHandler = this.BTHandler.bind(this);
    this.FCFHandler = this.FCFHandler.bind(this);
    this.VizHandler = this.VizHandler.bind(this);
    this.AirbnbHandler = this.AirbnbHandler.bind(this);
  }

  renderDescs() {
    if (this.state.renderDescs == true) {
      return (
        <div>
          {" "}
          <p>
            Hey! Call me Tommy. I'm a product designer finishing up my degree in
            communication, computer science, and human-centered design
            @Northwestern.
          </p>
          <p>
            Previously @Braintree Docs (Summer '18).
            <br />
            Currently @Groupon PM (Summer '19).
          </p>
        </div>
      );
    } else return "";
  }

  renderAnims() {
    if (this.state.renderAnims == true) {
      return (
        <div className="w-50 mobile-no-show">
          <div className="w-px ill">
            <img src="/img/body2.png" className="illustration body" />
            <img src="/img/ipod.png" className="illustration ipod" />
            <img src="/img/coffee.png" className="illustration coffee" />
            <img src="/img/hands.png" className="illustration hands" />
            <img src="/img/hands2.png" className="illustration body" />

            <div class="alert-coffee">
              <img src="/img/alert.png" className="alert" />
              <br />
              <div className="hoverpointer">
                <i class="material-icons size-16 p-right-2">local_drink</i>
                <br />
                Small black coffee, no room, please! <br /> <br />
                <i class="material-icons size-16">music_note</i>
                <br />
                Boy Afraid - <br />
                Saro
              </div>
            </div>
            <div className="hoverpointer song" />
          </div>
        </div>
      );
    } else return "";
  }

  renderHomepage() {
    if (this.state.renderHomepage == true) {
      return <Homepage />;
    } else return "";
  }

  renderFooter() {
    if (this.state.renderFooter == true) {
      return <Footer />;
    } else return "";
  }

  renderAbout() {
    if (this.state.renderAbout == true) {
      return <About />;
    } else return "";
  }

  renderPortfolio() {
    if (this.state.renderTiles == true) {
      return (
        <div
          id="portfolio"
          className="w-60 m-20 mobile-m-10 mobile-w-80 m-top-0 m-bottom-0 p-top-2"
        >
          <h2>Portfolio</h2>
          <br />
          <br />
          <ProductTile
            imageSource="/img/airbnb.png"
            productName="Airbnb"
            className="m-top-0"
            handler={this.AirbnbHandler}
            description="Building a pet payments system"
          />
          <ProductTile
            imageSource="/img/braintree.png"
            productName="Braintree"
            handler={this.BTHandler}
            description="Hosted Fields landing page
"
          />
          <ProductTile
            imageSource="/img/knightlab.png"
            productName="Fact-Check Flow"
            handler={this.FCFHandler}
            description="In-browser fact-checking for journalists"
          />
          <ProductTile
            imageSource="/img/toothless.png"
            productName="Visual Design"
            handler={this.VizHandler}
            description="Assorted digital projects"
          />
        </div>
      );
    } else return "";
  }

  BTHandler() {
    window.scrollTo(0, 0);

    if (this.state.renderBT == true) {
      this.setState({ renderBT: false });
    } else
      this.setState({ renderBT: true, renderViz: false, renderFCF: false });
  }

  FCFHandler() {
    window.scrollTo(0, 0);

    if (this.state.renderFCF == true) {
      this.setState({ renderFCF: false });
    } else
      this.setState({
        renderFCF: true,
        renderViz: false,
        renderBT: false,
        renderAirbnb: false
      });
  }

  VizHandler() {
    window.scrollTo(0, 0);
    if (this.state.renderViz == true) {
      this.setState({ renderViz: false });
    } else
      this.setState({
        renderViz: true,
        renderFCF: false,
        renderBT: false,
        renderAirbnb: false
      });
  }

  AirbnbHandler() {
    window.scrollTo(0, 0);
    if (this.state.renderAirbnb == true) {
      this.setState({ renderAirbnb: false });
    } else
      this.setState({
        renderViz: false,
        renderFCF: false,
        renderBT: false,
        renderAirbnb: true
      });
  }

  renderContact() {
    if (this.state.renderContact == true) {
      return <Contacts />;
    } else return "";
  }

  renderHomeHome() {
    this.setState({
      renderHomepage: true,
      renderTiles: true,
      renderAbout: false,
      renderContact: false,
      renderFooter: true,
      renderDescs: true,
      renderAnims: true
    });
  }

  renderAboutSection() {
    this.setState({
      renderHomepage: false,
      renderTiles: false,
      renderAbout: true,
      renderContact: false,
      renderFooter: false,
      renderDescs: false,
      renderAnims: false
    });
  }

  renderContacts() {
    this.setState({
      renderHomepage: false,
      renderTiles: false,
      renderAbout: false,
      renderContact: true,
      renderFooter: true,
      renderDescs: false,
      renderAnims: true
    });
  }

  renderHeader() {
    return (
      <div className="w-60 m-20 m-top-5 m-bottom-0 linkheader link-arrow mobile-m-0 mobile-w-100">
        <div className="w-50 mobile-w-80 mobile-m-10">
          <a onClick={() => this.renderHomeHome()}>Home</a>
          <a onClick={() => this.renderAboutSection()}>About</a>
          <a href="/assets/Li_Thomas_Resume_2020.pdf" target="_blank">
            {" "}
            Resume
          </a>
          <br />
          <br />
          <a onClick={() => this.renderHomeHome()} className="name">
            Thomas Li
          </a>

          {this.renderDescs()}
          {this.renderContact()}
        </div>
        {this.renderAnims()}
      </div>
    );
  }

  renderBTCase() {
    if (this.state.renderBT == true) {
      return <BTPopup handler={this.BTHandler} />;
    } else {
      return "";
    }
  }

  renderFCFCase() {
    if (this.state.renderFCF == true) {
      return <FCFPopup handler={this.FCFHandler} />;
    } else {
      return "";
    }
  }

  renderVizCase() {
    if (this.state.renderViz == true) {
      return <VizPopup handler={this.VizHandler} />;
    } else {
      return "";
    }
  }

  renderAirbnbCase() {
    if (this.state.renderAirbnb == true) {
      return <AirbnbPopup handler={this.AirbnbHandler} />;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="h-100">
        {this.renderHeader()}
        {this.renderHomepage()}
        {this.renderPortfolio()}
        {this.renderAbout()}
        {this.renderFooter()}
        {this.renderBTCase()}
        {this.renderFCFCase()}
        {this.renderVizCase()}
        {this.renderAirbnbCase()}
      </div>
    );
  }
}

export default App;
