import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePhotosWithLike } from '../redux/photoActions.js';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {
	const userId = useSelector(state => state.login.user._id);
	const dispatch = useDispatch();

	const isLiked = photo.likes.includes(userId)
	const heartColor = isLiked ? "red" : "lightgrey";

	const likePic = () => {
		// add functionality here
		if (!isLiked){
			// fetch('http://localhost:5000/photos/like', {
			// 	method: 'PATCH',
			// 	headers: {'Content-Type': 'application/json'},
			// 	body: JSON.stringify({ userId, photoId:photo._id })
			// })
			// .then(() => fetch('http://localhost:5000/users/like/', {
			// 	method: 'PATCH',
			// 	headers: {'Content-Type': 'application/json'},
			// 	body: JSON.stringify({ userId, photoId:photo._id })
			// }))
			// .catch(err => console.log('Error in PhotoCard:', err))
			dispatch(updatePhotosWithLike(userId, photo._id));
		}
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