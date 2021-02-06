import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css'

const Navbar = () => {

	return (
		<nav className={styles.nav}>
			<li className={styles.navButton}>
				<NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
			</li>
			<li className={styles.navButton}>
				<NavLink to="/profile" activeClassName={styles.selected}>Profile</NavLink>
			</li>
			<li className={styles.navButton}>
				<NavLink to="/liked" activeClassName={styles.selected}>Liked Photos</NavLink>
			</li>
		</nav>
		)
}

export default Navbar;