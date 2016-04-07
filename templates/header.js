import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
  render: function() {
    return (
      <div>
		<header className="text-center" name="home">
		  <div className="intro-text">
		    <h1 className="wow fadeInDown">We are <strong><span className="color">Tempo</span></strong></h1>
		    <p className="wow fadeInDown">a creative digital agency from New York</p>
		    <a href="#works-section" className="btn btn-default btn-lg page-scroll wow fadeInUp" data-wow-delay="200ms">Our Portfolio</a> </div>
		</header>
      </div>
    );
  }
});

export default Header