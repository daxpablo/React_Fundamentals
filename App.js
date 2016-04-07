import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './templates/Navigation';
import Header from './templates/Header';
import Services from './templates/Services';
import Portfolio from './templates/Portfolio';
import About from './templates/About';
import Team from './templates/Team';
import Testimonials from './templates/Testimonials';
import Contact from './templates/Contact';
import Footer from './templates/Footer';
{/* import PortfolioModals from './templates/PortfolioModals'; */}

class App extends React.Component {
	constructor(){
		super();
	}

	render() {
		return ( 
			<div>
				<Navigation />
				<Header />
				<Services />
				<Portfolio />
				<About />
				<Team />
				<Testimonials />
				<Contact />
				<Footer />
				{/* <PortfolioModals /> */}
			</div>
		);
	}
}


export default App
