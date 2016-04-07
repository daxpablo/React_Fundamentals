import React from 'react';
import ReactDOM from 'react-dom';


var Contact = React.createClass({
  render: function() {
    return (
      <div>
<div id="contact-section" className="text-center">
  <div className="container">
    <div className="section-title wow fadeInDown">
      <h2><strong>Contact</strong> us</h2>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
    </div>
    <div className="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-md-4"> <i className="fa fa-map-marker fa-2x"></i>
        <p>321 Awesome Street<br />
          New York, NY 17022</p>
      </div>
      <div className="col-md-4"> <i className="fa fa-envelope-o fa-2x"></i>
        <p>info@companyname.com</p>
      </div>
      <div className="col-md-4"> <i className="fa fa-phone fa-2x"></i>
        <p> +1 800 123 1234</p>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="400ms">
  <h3>Leave us a message</h3>
      <form name="sentMessage" id="contactForm" >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-default">Send Message</button>
      </form>
      <div className="social">
        <ul>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
          <li><a href="#"><i className="fa fa-github"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
});

export default Contact