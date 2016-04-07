import React from 'react';
import ReactDOM from 'react-dom';


var Services = React.createClass({
  render: function() {
    return (
      <div>
    
    <div id="services-section" className="text-center">
  <div className="container">
    <div className="section-title wow fadeInDown">
      <h2>Our <strong>Services</strong></h2>
      <hr />
      <div className="clearfix"></div>
      <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus. Eleifend pellentesque natoque faucibus magna ut etiam.</p>
    </div>
    <div className="space"></div>
    <div className="row">
      <div className="col-md-3 col-sm-6 service wow fadeInUp" data-wow-delay="200ms"> <i className="fa fa-desktop"></i>
        <h4><strong>Web design</strong></h4>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
      </div>
      <div className="col-md-3 col-sm-6 service wow fadeInUp" data-wow-delay="400ms"> <i className="fa fa-gears"></i>
        <h4><strong>App Development</strong></h4>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
      </div>
      <div className="col-md-3 col-sm-6 service wow fadeInUp" data-wow-delay="600ms"> <i className="fa fa-bullhorn"></i>
        <h4><strong>Marketing</strong></h4>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
      </div>
      <div className="col-md-3 col-sm-6 service wow fadeInUp" data-wow-delay="800ms"> <i className="fa fa-rocket"></i>
        <h4><strong>Branding</strong></h4>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
      </div>
    </div>
  </div>
</div>



      </div>
    );
  }
});

export default Services