import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/global.css'
import '../css/search-page.css'

class MetricComparison extends Component {
	state = {
		metrics: [
			{company: 'ABC', amount: '50000pds'},
			{company: 'CED', amount: '60000pds'},
			{company: 'EFG', amount: '20000pds'},
			{company: 'HIJ', amount: '10000pds'},
		]
	}

	componentDidMount() {
		console.log('props', this.props.location)
	}

	renderTableData() {
		return this.state.metrics.map((metric, index) => {
		   return (
			  <tr key={index}>
				 <td className="align-middle"><a href="#">{metric.company}</a></td>
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
						<h1 className="p-align-center">Companies reporting for <u>{this.props.location.state.metric}</u> metric</h1>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-md-12">
						<p className="p-align-center">The following companies have reported amounts for the <u>{this.props.location.state.metric}</u>. The graphs below will show how they compare to other companies reporting this metric.
						</p>
						<table className="table table-sm table-bordered table-hover text-center align-middle">
							<thead className="thead-light">
							<tr>
								<th>Company</th>
								<th>Amount</th>
							</tr>
							</thead>
							<tbody>
								{this.renderTableData()}
							</tbody>
						</table>
						<hr />
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(MetricComparison);