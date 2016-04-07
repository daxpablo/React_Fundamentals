import React from 'react';
import ReactDOM from 'react-dom';


var About = React.createClass({
  render: function() {
    return (
      <div>
    <div id="about-section">
  <div className="container">
    <div className="section-title text-center wow fadeInDown">
      <h2><strong>About</strong> us</h2>
      <hr />
      <div className="clearfix"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
    </div>
    <div className="row">
      <div className="col-md-6 wow fadeInLeft"> <img src="img/about.png" className="img-responsive" /> </div>
      <div className="col-md-6 wow fadeInRight">
          <h4>Who We Are</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh ante facilisis bibendum.</p>
          <div className="space"></div>
          <h4>What We Do</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at.</p>
          <div className="space"></div><div className="list-style">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Consectetur adipiscing</li>
                  <li>Duis sed dapibus leo</li>
                  <li>Sed commodo nibh ante</li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Consectetur adipiscing</li>
                  <li>Duis sed dapibus leo</li>
                  <li>Sed commodo nibh ante</li>
                </ul>
              </div>
            </div>
          </div>     
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
});

export default About