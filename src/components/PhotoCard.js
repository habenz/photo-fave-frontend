import React from 'react';
import { useSelector } from 'react-redux';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {
	const userId = useSelector(state => state.login.user._id);
	console.log('userId', userId);

	const heartColor = (photo.likes.includes(userId)) ? "red" : "lightgrey";

	const likePic = () => {
		// add functionality here
	}

	return (
		<div className={styles.card}>
			<img className={styles.img} src={photo.url} alt={photo.name}/>
			<button className={styles.like} onClick={likePic}>
				<FontAwesomeIcon icon={faHeart} style={{color: heartColor}}/>
			</button>
		</div>
	)
}

export default PhotoCard;