import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (
		<nav>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/profile">Profile</NavLink>
			</li>
			<li>
				<NavLink to="/liked">Liked Photos</NavLink>
			</li>
		</nav>
		)
}

export default Navbar;