import React from 'react';
import ReactDOM from 'react-dom';


var Portfolio = React.createClass({
  render: function() {
    return (
      <div>
    
<div id="works-section" className="text-center">
  <div className="container"> 
    <div className="section-title wow fadeInDown">
      <h2>Our <strong>Portfolio</strong></h2>
      <hr />
      <div className="clearfix"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
    </div>
    <div className="categories">
      <ul className="cat">
        <li>
          <ol className="type">
            <li><a href="#" data-filter="*" className="active">All</a></li>
            <li><a href="#" data-filter=".web">Web Design</a></li>
            <li><a href="#" data-filter=".app">App Development</a></li>
            <li><a href="#" data-filter=".branding">Branding</a></li>
          </ol>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
    <div className="row">
      <div className="portfolio-items">
        <div className="col-sm-6 col-md-3 col-lg-3 web">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="200ms">
            <div className="hover-bg"> <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                Web Design
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/01.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 app">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="400ms">
            <div className="hover-bg"> <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                App Development
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/02.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 web">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="600ms">
            <div className="hover-bg"> <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
               Web Design
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/03.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 web">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="800ms">
            <div className="hover-bg"> <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                Web Design
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/04.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 app">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="1000ms">
            <div className="hover-bg"> <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                App Development
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/05.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 branding">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="1200ms">
            <div className="hover-bg"> <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                Branding
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/06.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 branding app">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="1400ms">
            <div className="hover-bg"> <a href="#portfolioModal7" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                App Development, Branding
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/07.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-lg-3 web">
          <div className="portfolio-item wow fadeInUp" data-wow-delay="1600ms">
            <div className="hover-bg"> <a href="#portfolioModal8" className="portfolio-link" data-toggle="modal">
              <div className="hover-text">
                <h4>Project Title</h4>
                Web Design
                <div className="clearfix"></div>
                <i className="fa fa-plus"></i> </div>
              <img src="img/portfolio/08.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
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

export default Portfolio