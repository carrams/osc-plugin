import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/os-c-logo.png';
import '../css/nav-bar.css'
/* eslint-disable */

class NavBar extends Component {
	state = {}
	render() {
		return (
			<nav className="top-navbar navbar navbar-expand-lg">
		    <div className="container-fluid">
		      <Link className="navbar-brand" to="/"><img src={logo} height="40" width="auto" /></Link>
		      {/*<ul className="navbar-nav mr-auto">
		        <li className="nav-item active">
		          <Link className="nav-link" to="/">Accounts</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/request-workspace">Request Workspace</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/login">Login</Link>
		        </li>
		      </ul>
		      <div id="user_info" className="nav-item" style={{display:"none"}}>
		        <span className="text-white" id="user_email" >Not Logged In: ERROR</span>
		        <a to="#" id="logout" className="ml-1 text-secondary"><small>(Logout)</small></a>
		      </div>*/}
		    </div>
		  </nav>
		)
	}
}

export default NavBar;