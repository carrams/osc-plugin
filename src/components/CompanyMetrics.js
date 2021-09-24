import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../css/global.css'
import '../css/search-page.css'

class CompanyMetrics extends Component {
	state = {
		metrics: [
			{metric: 'YR118999', amount: '50000pds'},
			{metric: 'ZR118999', amount: '60000pds'},
			{metric: 'XR118999', amount: '20000pds'},
			{metric: 'IR118999', amount: '10000pds'},
		]
	}

	renderTableData() {
		return this.state.metrics.map((metric, index) => {
		   return (
			  <tr key={index}>
				 <td className="align-middle"><Link to={{pathname: '/metric-comparison.html', state: { metric: metric.metric }}}>{metric.metric}</Link></td>
				 <td className="align-middle">{metric.amount}</td>
			  </tr>
			)
		})
	}

	render() {
		return (
		  <div className="container">
			  	<br />
				<div className="row">
					<div className="col-md-12">
						<h1 className="p-align-center">Metrics for <u>{this.props.location.state.company}</u></h1>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-md-12">
						<p className="p-align-center">These are the SASB metrics that this company has reported. To see how this company compares against other companies, click on the actual metric.
						</p>
						<table className="table table-sm table-bordered table-hover text-center align-middle">
							<thead className="thead-light">
							<tr>
								<th>Metric</th>
								<th>Amount</th>
							</tr>
							</thead>
							<tbody>
								{this.renderTableData()}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(CompanyMetrics);