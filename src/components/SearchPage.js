import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/global.css';
import '../css/search-page.css';

class SearchPage extends Component {
	state = {
		companyName: '',
		metricName: ''
	}

	handleChange = (e) => {
		const {name, value} = e.currentTarget;
		this.setState({
			...this.state,
			[name]: value
		})
	}

	searchCompany = () => {
		this.props.history.push({
			pathname: '/company-metrics.html',
  			state: { company: this.state.companyName},
		})
	}

	searchMetric = () => {
		this.props.history.push({
			pathname: '/metric-comparison.html',
  			state: { metric: this.state.metricName},
		})
	}

	render() {
		return (
		  <div className="container">
			  	<br />
				<div className="row">
					<div className="offset-md-4">
					</div>
					<div className="col-md-4">
						<h1 className="p-align-center">SASB Browser</h1>
					</div>
					<div className="col-md-4">
						<a href="https://materiality.sasb.org/" className="btn btn-secondary sasb-btn" target="_blank">To SASB materility map >></a>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-md-12">
						<p className="p-align-center">In this page you will be able to search company reports in the SASB format. You can search by company name/ISN or you can search by 
							specific SASB accounting metric (e.g. IF-EU-110a.1). If you are unfamiliar with SASB accounting metrics, you can use SASB's materiality map to identify metrics relevant 
							to your sector.
						</p>
						<hr />
						<p className="p-align-center">
							Search by company name:
						</p>
						<div className="search-bar-div">
							<input type="text" placeholder="Search.." name="companyName" value={this.state.companyName} onChange={this.handleChange}/>
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" onClick={this.searchCompany}>
  								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
							</svg>
						</div>
					</div>
				</div>
				<br />
				<p className="p-align-center"><strong>OR</strong></p>
				<div className="row">
				  <div className="col-md-12">
					<p className="p-align-center">Search by SASB accounting metric:</p>
					<div className="search-bar-div">
						<input type="text" placeholder="Search.." name="metricName" value={this.state.metricName} onChange={this.handleChange}/>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" onClick={this.searchMetric}>
  							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
						</svg>
					</div>
				  </div>
			  </div>  
			</div>
		)
	}
}

export default withRouter(SearchPage);