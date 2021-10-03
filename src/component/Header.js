import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
export class Header extends Component {
	render() {
		return (
			<Nav className="me-auto">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/favourite">Favourite</NavLink>
			</Nav>
		);
	}
}

export default Header;
