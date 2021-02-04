import React from 'react';
import { useSelector } from 'react-redux';

import styles from './PhotoGrid.module.css';
import PhotoCard from './PhotoCard';

const PhotoGrid = () => {
	const photos = useSelector(state => state.photos);

	return (
		<div className={styles.grid}>
			{photos.map(photo => <PhotoCard photo={photo}/>)}
		</div>
	)
}

export default PhotoGrid;