import React, { Component } from "react";

class VizPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed overflow-scroll p-top-7-5 p-bottom-15">
        <div className="pos-relative ">
          <h2>Visual Design</h2>
          <button class="close-button" onClick={this.props.handler}>
            ×
          </button>
          <p>
            This is a collection of one-off and non-software-related work I've
            done in the past!
          </p>
          <div class="row">
            <div class="column _33">
              <img src="/img/weather1.png" />
            </div>
            <div class="column _33">
              <img src="/img/weather2.png" />
            </div>
            <div class="column _34">
              <img src="/img/weather3.png" />
            </div>
          </div>
          <div class="row">
            <div class="column _45">
              <img src="/img/toucan.jpg" />
            </div>
            <div class="column _25">
              <img src="/img/nametag.png" />
            </div>
            <div class="column _30">
              <img src="/img/btgraphics.png" />
            </div>
          </div>
          <div class="row">
            <div class="column _75">
              <img src="/img/disccover.jpg" />
            </div>
            <div class="column _25">
              <img src="/img/space.png" />
            </div>
          </div>
          <div class="row">
            <div class="column">
              <img src="/img/buildux.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VizPopup;
