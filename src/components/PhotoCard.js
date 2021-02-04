import React from 'react';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {

	return (
		<div className={styles.card}>
			<img className={styles.img} src={photo.url} alt={photo.name}/>
			<button className={styles.like}>
				<FontAwesomeIcon icon={faHeart} />
			</button>
		</div>
	)
}

export default PhotoCard;