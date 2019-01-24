import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="w-80 m-10 m-top-5 m-bottom-2 contact">
          <h2>
            Contact Me
          </h2><br/><br/>

          <a href="mailto:thomastli@u.northwestern.edu">
          <div className="contact-box"><img src="/img/mail.png" className="img-contact"/>
          email
          <p>thomastli@u.northwestern.edu</p>
          </div>
          </a>
          <a href="https://linkedin.com/in/thomastli">
          <div className="contact-box"><img src="/img/linkedin.png" className="img-contact"/>linkedin
          <p>linkedin.com/in/thomastli</p></div>
          </a>
          <a href="https://dribbble.com/thomastli">
          <div className="contact-box"><img src="/img/dribbble.png" className="img-contact"/>dribbble
          <p>dribbble.com/thomastli</p></div>
          </a>
          <a href="https://twitter.com/thmstli">
          <div className="contact-box"><img src="/img/twitter.png" className="img-contact"/>twitter
          <p>@thmstli</p>
</div>
</a>

        </div>
     </div>
    );
  }
}

export default Contact;
