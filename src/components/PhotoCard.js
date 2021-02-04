import React from 'react';

import styles from './PhotoCard.module.css';

const PhotoCard = ({photo}) => {

	return (
		<div className={styles.card}>
			<img className={styles.img} src={photo.url} alt={photo.name}/>
		</div>
	)
}

export default PhotoCard;