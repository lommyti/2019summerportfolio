import React, { Component } from 'react';

class BTPopup extends Component {
  render() {
    return (
      <div className="w-100 h-100-abs p-10 popup pos-fixed-fixed">
        <h2>Hosted Fields Landing Page Redesign</h2>
        <button class="close-button" onClick={this.props.handler}>×</button><br/>
        <div className="w-100 h-100 p-top-2">
        <p className="m-0 m-bottom-2">This work is from my summer internship with Braintree in 2018, and is therefore protected. Please reach out if you're interested in seeing it, and I'd be more than happy to give you the password.</p>
        <a href="/assets/btcasestudy.pdf" target="_blank" >Link to the password-protected PDF</a>
        </div>
      </div>
    );
  }
}

export default BTPopup;
