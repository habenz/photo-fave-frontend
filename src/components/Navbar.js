import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css'

const Navbar = () => {

	return (
		<nav className={styles.nav}>
			<li className={styles.navButton}>
				<NavLink to="/">Home</NavLink>
			</li>
			<li className={styles.navButton}>
				<NavLink to="/profile">Profile</NavLink>
			</li>
			<li className={styles.navButton}>
				<NavLink to="/liked">Liked Photos</NavLink>
			</li>
		</nav>
		)
}

export default Navbar;