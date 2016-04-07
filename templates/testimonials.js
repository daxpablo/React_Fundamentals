import React from 'react';
import ReactDOM from 'react-dom';


var Testimonials = React.createClass({
  render: function() {
    return (
      <div>
    
<div id="testimonials-section" className="text-center">
  <div className="container">
    <div className="section-title wow fadeInDown">
      <h2>What our <strong>Clients</strong> say</h2>
      <hr />
    </div>
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div id="testimonial" className="owl-carousel owl-theme wow fadeInUp" data-wow-delay="200ms">
          <div className="item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>John DOE</strong>, CEO, Company.</p>
          </div>
          <div className="item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>Jenny DOE</strong>, CEO, Company.</p>
          </div>
          <div className="item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
            <p><strong>John DOEn</strong>, CEO, Company.</p>
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

export default Testimonials