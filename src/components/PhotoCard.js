import React from 'react';
import { useSelector } from 'react-redux';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {
	const userId = useSelector(state => state.login);
	console.log('userId', userId);

	const heartColor = "grey"
	// const heartColor = (photo.likes.includes(userId)) ? "red" : "lightgrey";
	// console.log("photo likes", photo.likes);
	// console.log('boolean', photo.likes.includes(userId));
	return (
		<div className={styles.card}>
			<img className={styles.img} src={photo.url} alt={photo.name}/>
			<button className={styles.like}>
				<FontAwesomeIcon icon={faHeart} style={{color: heartColor}}/>
			</button>
		</div>
	)
}

export default PhotoCard;