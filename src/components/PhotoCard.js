import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePhotosWithLike, removeLike } from '../redux/photoActions.js';

import PhotoModal from './PhotoModal';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {
	const userId = useSelector(state => state.login.user._id);
	const dispatch = useDispatch();
	const [detailView, toggleDetailView] = useState(false);

	const isLiked = photo.likes.includes(userId)
	const heartColor = isLiked ? "red" : "lightgrey";

	const likePic = () => {
		// add functionality here
		if (!isLiked){
			dispatch(updatePhotosWithLike(userId, photo._id));
		} else {
			dispatch(removeLike(userId, photo._id));
		}
	}

	const toDetailView = event => {
		toggleDetailView(!detailView);
	}

	return (
		<>
		{detailView && <PhotoModal photo={photo} toggleModal={toDetailView}/>}
		<div className={styles.card}>
			<img className={styles.img} src={photo.url} alt={photo.name} onClick={toDetailView}/>
			<button className={styles.like} onClick={likePic}>
				<FontAwesomeIcon icon={faHeart} style={{color: heartColor}}/>
			</button>
			<div className={styles.likeCount}>
				{photo.likes.length}
			</div>
		</div>
		</>
	)
}

export default PhotoCard;