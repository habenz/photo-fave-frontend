import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePhotosWithLike, removeLike, deletePhoto } from '../redux/photoActions.js';

import PhotoModal from './PhotoModal';
import { faHeart,faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './PhotoCard.module.css';
// Add isProfile flag to redux state instead?
const PhotoCard = ({photo, isProfile=false}) => {
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

	const triggerDelete = () => {
		dispatch(deletePhoto(photo._id));
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
			{isProfile && 
			<div className={styles.delete} onClick={triggerDelete}>
				<FontAwesomeIcon icon={faMinusCircle} style={{color: "red"}}/>
			</div>}
		</div>
		</>
	)
}

export default PhotoCard;