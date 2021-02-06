import React from 'react';

// Font-awesome imports
//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css';

const Header = () => {

	return (
		<header className={styles.header}>
			<h1> Photo Fave </h1>
			<div className={styles.icon}>
				<FontAwesomeIcon icon={faUser} />
			</div>
		</header>
		)
}

export default Header;