import React from 'react';
import ReactDOM from 'react-dom';


var Team = React.createClass({
  render: function() {
    return (
      <div>
    
<div id="team-section" className="text-center">
  <div className="container">
    <div className="section-title wow fadeInDown">
      <h2>Meet the <strong>Team</strong></h2>
      <hr />
      <div className="clearfix"></div>      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
    </div>
    <div id="row">
      <div className="col-md-3 col-sm-6 team wow fadeInUp" data-wow-delay="200ms">
        <div className="thumbnail"> <img src="img/team/01.jpg" alt="..." className="img-circle team-img" />
          <div className="caption">
            <h3>Jessica Wally</h3>
            <p>CEO / Founder</p>
                        <ul className="list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 team wow fadeInUp" data-wow-delay="400ms">
        <div className="thumbnail"> <img src="img/team/02.jpg" alt="..." className="img-circle team-img" />
          <div className="caption">
            <h3>Mike Sloan</h3>
            <p>Web Designer</p>
                        <ul className="list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 team wow fadeInUp" data-wow-delay="600ms">
        <div className="thumbnail"> <img src="img/team/03.jpg" alt="..." className="img-circle team-img" />
          <div className="caption">
            <h3>Michele Doe</h3>
            <p>Web Designer</p>
                       <ul className="list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 team wow fadeInUp" data-wow-delay="800ms">
        <div className="thumbnail"> <img src="img/team/04.jpg" alt="..." className="img-circle team-img" />
          <div className="caption">
            <h3>Larry Evans</h3>
            <p>Project Manager</p>
                        <ul className="list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
            </ul>
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

export default Team