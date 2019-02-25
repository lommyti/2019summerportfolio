import React, { Component } from 'react';

class FCFPopup extends Component {
  render() {
    return (
      <div className="w-100 p-10 popup pos-fixed">
        <h2>Fact-Check Flow</h2>
        <button className="close-button" onClick={this.props.handler}>×</button>
        <br/>
        <p><em>Fact-checking for the modern digital newsroom. <br/>Supported by the <a href="https://knightlab.northwestern.edu/">Northwestern University Knight Lab.</a></em><br/><br/>
        Teammates: <a href="https://www.linkedin.com/in/rafahali/">Rafah Ali</a>, <a href="https://www.linkedin.com/in/laura-barrera-91a9b4122/">Laura Barrera</a>, <a href="https://www.linkedin.com/in/madeline-kaufman-2018/">Madeline Kaufman</a>, <a href="https://www.linkedin.com/in/madelinelefevour/">Madeline Lefevour</a> </p>
        <br/>
        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>The Problem/<br/>Potential Users</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">From our teammate Maddy’s experiences in journalism classes, internship experiences, and conversations with industry professionals, we learned that <strong>journalistic fact-checking for stories and articles is still taught and done in industry on paper</strong>.
        </p>
        <p>
        This process involves following a complex set of steps, including:<br/><br/> <strong>01.</strong> Circling any word or phrase that could be spelled wrong or factually incorrect.<br/> <strong>02.</strong> Crossing out each letter in a word as it’s checked against a credible source.<br/> <strong>03.</strong> Tracking down any in-person sources to confirm that they’ve been quoted correctly.<br/><br/> This becomes a huge pain when fact-checkers have to receive digital copies of stories, print them and fact-check them, then <strong>summarize their changes again digitally</strong> to send back to the writer/editor.
        </p>
        <img src="/img/journeymap.png" width="150%" className="p-top-5  m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>A journey map made by my teammate, Rafah, of the current fact-checking experience. </em></p>
        <p className="m-bottom-0">
        This initial research allowed us to internalize the fact-checkers’ frustration, and led us to believe that a service allowing them to <strong>identify facts, attribute sources, and confirm facts as checked, without leaving the platform on which stories were written</strong>, would greatly expedite their work.</p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>My Role</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">I was responsible for turning our insights and desired features into testable prototypes at various fidelities; this entailed <strong>sketching</strong> and prototyping in <strong>Figma</strong>.
        </p>
        </div>

        <div className="w-30 p-10 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Design Process</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">We quickly decided that the ideal platform for our digitalized fact-checking was <strong>Google Docs</strong>; it’s highly accessible and used more commonly by smaller newsrooms, while larger publications often write their stories in custom-built content management systems (CMSs).
        </p>
        <p>To start testing our assumptions, we created a basic prototype on paper, and had users go through adding a fact, fixing a fact marked incorrect, and attributing a fact to a source. </p>
        <h4> Samples from our paper prototype</h4>
        <img src="/img/fcf2.jpg" width="100%" className="p-top-0"/>
        <p className="m-0 m-bottom-5"><em>Our initial interface idea for adding text as a fact.</em></p>
        <img src="/img/fcf25.jpg" width="100%" className="p-top-2"/>
        <p className="m-0 m-bottom-5"><em>A fact would then be highlighted to indicate that it's been added to the list of facts.</em></p>
        <img src="/img/fcf3.jpg" width="100%" className="p-top-2"/>
        <p className="m-0 m-bottom-5"><em>Clicking on an unconfirmed fact would open a popup for confirming it's been checked and attributing a source.</em></p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>User Testing</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">In testing our paper prototype with 2 journalism students who had learned to fact-check with the conventional method, we obtained three key insights from our first prototype:<br/>
        <h4 className="m-bottom-0">Better utilize our available sidebar space.</h4>
        <p className="m-0">Both users were confused by the functionality of the buttons that were on the sidebar, and separately expressed their desire to be able to see all of the facts at once. We combined these observations as an opportunity to think differently about our "core display" and what should be apparent to users pretty much all the time when the plugin is running.</p>
        <h4 className="m-bottom-0">The filter system has to be reworked.</h4>
        <p className="m-0">One user felt that the filters seemed too specific to be useful, while the other simply felt that there were too many. The categories that we had came out of our inquiries into the most common types of facts that fact-checkers deal with, but these tests inspired us to think twice about them.</p>
        <h4 className="m-bottom-0">Highlights, icons, and font weight changes galore.</h4>
        <p className="m-0">Even in black and white, users felt like there was too much going on visually. They didn't always understand why these changes were occurring between screens and wanted a less invasive experience.</p>
        <p></p>
        </p>
        </div>


        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Final Prototype Flow/Screens</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">
        After iterating on our initial ideas, we moved to higher-fidelity prototyping on Figma so that we could better visualize the product as it would appear on Google Docs. These are a few of the artefacts we produced:
        <br/><br/>
        <h4>Intended user flow</h4>
        <img src="/img/userflow.png" width="150%" className="m-left-minus-25"/></p>
        <h4> Samples from our final prototype</h4>
        <img src="/img/fcffinal1.png" width="150%" className="p-top-0 m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>The initial screen when the plugin is first opened from the Add-ons menu.</em></p>
        <img src="/img/fcffinal2.png" width="150%" className="p-top-2 m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>When facts have been selected by the user, they're highlighted in yellow and appear in the fact list on the sidebar. The question mark indicates that they haven't been checked.</em></p>
        <img src="/img/fcffinal3.png" width="150%" className="p-top-2 m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>When a fact is expanded in the sidebar, the type of source it came from can be selected.</em></p>
        <img src="/img/fcffinal4.png" width="150%" className="p-top-2 m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>This interface varies slightly depending on whether the source is a person, since they will need to be contacted later.</em></p>
        <img src="/img/fcffinal5.png" width="150%" className="p-top-2 m-left-minus-25"/>
        <p className="m-0 m-bottom-5"><em>This fact-checking just scratches the surface; more work would need to be done before sending this back to a writer.</em></p>
        </div>


        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>Visual Design</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">
        My vision for this product was one of <strong>order</strong> and <strong>organization</strong>; we were replacing a messy, on-paper procedure that involved constantly scribbling over what you'd written before. </p>
        <p>To achieve this, I tried to use modals when appropriate to keep only important information on the page, and maintained a look and feel somewhat similar to that of Google Docs itself--this was done in hopes of increasing the apparent credibility of the tool and lowering the necessary cognitive load on the user.
        </p>
        </div>

        <div className="w-30 p-10 p-bottom-5 p-top-5 p-right-5 align-right mobile-w-100">
        <h6>What I Learned</h6>
        </div>
        <div className="w-50 p-top-5 mobile-w-100">
        <p className="m-0">This project taught me a lot about <strong>the meaning of a minimum viable product</strong>.
        </p>
        <p>Our initial ideas for this project were complex and far-reaching; we daydreamed about fully-automated systems that could identify facts for you, find sources by searching Google for you, and store all of this information in an organization-wide knowledge base so it would only need to be checked once. While all of this would be amazing, we were lucky in the fact that we'd stumbled upon a problem area with little progress so far. This meant that we could already provide great value to the community by porting existing functionality into a clean online interface. This isn't to say that our dreaming big was for nothing; instead, it was a driving factor for us to nail the core functionality so that we could create a product that could be truly disruptive in this space.</p>
        </div>
      </div>
    );
  }
}

export default FCFPopup;
