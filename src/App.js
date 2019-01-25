import React, { Component } from 'react';
import './App.css';
import './Positioning.css';
import './Flexbox.css';
import './Mobile.css';
import Footer from './Footer'
import Homepage from './Homepage'
import ProductTile from './ProductTile'
import About from './About'
import Contacts from './Contact'
import BTPopup from './BTPopup'
import FCFPopup from './FCFPopup.js'
import VizPopup from './VizPopup'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderHomepage: true,
      renderTiles:true,
      renderFooter:true,
      renderAbout:false,
      renderContact:false,
      renderBT:false,
      renderFCF:false,
      renderViz:false,
    }
    this.BTHandler = this.BTHandler.bind(this)
    this.FCFHandler = this.FCFHandler.bind(this)
    this.VizHandler = this.VizHandler.bind(this)

  }

  renderHomepage() {
    if (this.state.renderHomepage == true) {
      return <Homepage />
    }
    else return ""
  }

  renderFooter() {
    if (this.state.renderFooter == true) {
      return <Footer />
    }
    else return ""
  }

  renderAbout() {
    if (this.state.renderAbout == true){
      return <About />
    }
    else return ""
  }

  renderPortfolio() {
    if (this.state.renderTiles == true) {
      return (
        <div id="portfolio" className="w-80 m-10 m-top-0 m-bottom-0 p-top-2">
          <h2>My Work</h2>
          <br/>
          <br/>
          <ProductTile imageSource="/img/bt-cover.jpg" productName="Hosted Fields Page" description="Braintree Summer '18" handler={this.BTHandler} tags={['ui/ux',  'web dev']}/>
          <ProductTile imageSource="/img/fcf-cover.jpg" productName="Fact-Check Flow" description="Fact-checking turned digital." handler={this.FCFHandler} tags={['ui/ux']}/>
          <ProductTile imageSource="/img/misc-cover.jpg" productName="Visual Design" description="One-offs & non-software work." handler={this.VizHandler} tags={['etc']}/>
        </div>
      )
    }
    else return ""
  }

  BTHandler() {
    window.scrollTo(0,0)

    if (this.state.renderBT == true)
 {    this.setState({renderBT:false})
}
else this.setState({renderBT:true,
                    renderViz:false,
                    renderFCF:false,
})
  }

  FCFHandler() {
    window.scrollTo(0,0)

    if (this.state.renderFCF == true)
 {    this.setState({renderFCF:false})
}
else this.setState({renderFCF:true,
                    renderViz:false,
                    renderBT:false,
})
  }

  VizHandler() {
    window.scrollTo(0,0)
    if (this.state.renderViz == true)
 {    this.setState({renderViz:false})
}
else this.setState({renderViz:true,
                    renderFCF:false,
                    renderBT:false,
})
  }

  renderContact(){
    if (this.state.renderContact == true) {
      return(
        <Contacts/>
      )
    }
    else return ""
  }

  renderHomeHome() {
    this.setState({renderHomepage: true,
    renderTiles:true,
    renderAbout:false,
    renderContact:false,
    renderFooter:true,
});
  }

  renderAboutSection(){
    this.setState({renderHomepage: false,
    renderTiles:false,
    renderAbout:true,
    renderContact:false,
    renderFooter:false,
});
  }

  renderContacts(){
    this.setState({renderHomepage: false,
    renderTiles:false,
    renderAbout:false,
    renderContact:true,
    renderFooter:false,
    });
  }

  renderHeader(){
    return(
      <div className="w-80 m-10 m-top-2 m-bottom-0 linkheader link-arrow mobile-m-0 mobile-w-100">
      <div class="name">  <a onClick={() => this.renderHomeHome()}>THOMAS T. LI</a></div>
        <a onClick={() => this.renderHomeHome()}>HOME</a>
        <a onClick={() => this.renderAboutSection()}>ABOUT</a>
        <a href="/assets/Li_Thomas_Resume_2019.pdf" target="_blank">RESUME</a>
        <a onClick={() => this.renderContacts()}>CONTACT</a>
      </div>
    )
  }

  renderBTCase(){
    if(this.state.renderBT == true){
      return <BTPopup handler={this.BTHandler}/>
    }
    else {
      return ""
    }
  }

    renderFCFCase(){
      if(this.state.renderFCF == true){
        return <FCFPopup handler={this.FCFHandler}/>
      }
      else {
        return ""
      }
    }

    renderVizCase(){
      if(this.state.renderViz == true){
        return <VizPopup handler={this.VizHandler}/>
      }
      else {
        return ""
      }
    }

  render() {
    return (
      <div className="h-100">
        {this.renderHeader()}
        {this.renderContact()}
        {this.renderHomepage()}
        {this.renderPortfolio()}
        {this.renderAbout()}
        {this.renderFooter()}
        {this.renderBTCase()}
        {this.renderFCFCase()}
        {this.renderVizCase()}

      </div>
    );
  }
}

export default App;
