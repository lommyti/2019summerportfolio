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
import WishPopup from "./WishPopup";

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
      renderWish: false,
      renderDescs: true
    };
    this.BTHandler = this.BTHandler.bind(this);
    this.FCFHandler = this.FCFHandler.bind(this);
    this.VizHandler = this.VizHandler.bind(this);
    this.AirbnbHandler = this.AirbnbHandler.bind(this);
    this.WishHandler = this.WishHandler.bind(this);
  }

  renderDescs() {
    if (this.state.renderDescs == true) {
      return (
        <div>
          <div class="yellow-bar" />{" "}
          <p class="bio-desc">
            Hey! Call me Tommy. I'm a product designer finishing up my degree in
            communication, computer science, and human-centered design
            @Northwestern.
          </p>
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
          className="w-33 m-20 mobile-m-0 m-left-50 mobile-w-94  m-top-0 m-bottom-0 p-top-2"
        >
          {/*
  Multi
  line
  comment

          <ProductTile
            imageSource="/img/wish.png"
            productName="Wish"
            className="m-top-0"
            handler={this.WishHandler}
            description="Product design internship challenge&nbsp;•&nbsp;Fall 2019"
          />
          <br />
          <br />
          <br />
          */}
          <ProductTile
            imageSource="/img/airbnb.png"
            productName="Airbnb"
            className="m-top-0"
            handler={this.AirbnbHandler}
            prevHandler={this.BTHandler}
            description="Building a pet payments system&nbsp;•&nbsp;Spring 2019"
          />
          <br />
          <br />
          <br />
          <ProductTile
            imageSource="/img/braintree.png"
            productName="Braintree"
            handler={this.BTHandler}
            description="Hosted Fields landing page&nbsp;•&nbsp;Summer 2018
"
          />
          <br />
          <br />
          <ProductTile
            imageSource="/img/fact-check.png"
            productName="Fact-Check Flow"
            handler={this.FCFHandler}
            description="In-browser fact-checking for journalists&nbsp;•&nbsp;Spring 2018"
          />
          <br />
          <br />
          <br />
          <ProductTile
            imageSource="/img/misc-cover-grad.png"
            productName="Visual Design"
            handler={this.VizHandler}
            description="Assorted digital projects"
          />
          <br />
          <br />
          <br />
        </div>
      );
    } else return "";
  }

  BTHandler() {
    window.scrollTo(0, 0);
    if (this.state.renderBT == true) {
      this.setState({ renderBT: false });
    } else
      this.setState({
        renderBT: true,
        renderViz: false,
        renderFCF: false,
        renderAirbnb: false
      });
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

  WishHandler() {
    window.scrollTo(0, 0);
    if (this.state.renderWish == true) {
      this.setState({ renderWish: false });
    } else
      this.setState({
        renderViz: false,
        renderFCF: false,
        renderBT: false,
        renderWish: true
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
      renderDescs: true
    });
  }

  renderAboutSection() {
    this.setState({
      renderHomepage: false,
      renderTiles: false,
      renderAbout: true,
      renderContact: false,
      renderFooter: false,
      renderDescs: false
    });
  }

  renderContacts() {
    this.setState({
      renderHomepage: false,
      renderTiles: false,
      renderAbout: false,
      renderContact: true,
      renderFooter: true,
      renderDescs: false
    });
  }

  renderHeader() {
    return (
      <div className="w-60 m-20 m-top-5 m-bottom-0 linkheader link-arrow mobile-m-0 mobile-w-100">
        <div className="abs-link">
          <a onClick={() => this.renderHomeHome()}>Home</a>
          <a onClick={() => this.renderAboutSection()}>About</a>
          <a
            href="/assets/Li_Thomas_Resume_2020.pdf"
            target="_blank"
            className="m-right-0-0"
          >
            Resume
          </a>
        </div>
        <div className="mobile-w-90 abs-header">
          <br />
          <br />
          <a onClick={() => this.renderHomeHome()} className="name">
            Thomas Li
          </a>

          {this.renderDescs()}
          {this.renderContact()}
        </div>
      </div>
    );
  }

  renderBTCase() {
    if (this.state.renderBT == true) {
      return (
        <BTPopup
          handler={this.BTHandler}
          nextHandler={this.AirbnbHandler}
          prevHandler={this.FCFHandler}
        />
      );
    } else {
      return "";
    }
  }

  renderFCFCase() {
    if (this.state.renderFCF == true) {
      return (
        <FCFPopup handler={this.FCFHandler} nextHandler={this.BTHandler} />
      );
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
      return (
        <AirbnbPopup
          handler={this.AirbnbHandler}
          prevHandler={this.BTHandler}
        />
      );
    } else {
      return "";
    }
  }

  renderWishCase() {
    if (this.state.renderWish == true) {
      return <WishPopup handler={this.WishHandler} />;
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
