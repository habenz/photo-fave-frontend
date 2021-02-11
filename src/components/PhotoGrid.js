import React from 'react';
import { useSelector } from 'react-redux';

import styles from './PhotoGrid.module.css';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({isProfile=false}) => {
	const photos = useSelector(state => state.photos);

	return (
		<div className={styles.grid}>
			{photos.map(photo => 
				<PhotoCard isProfile={isProfile} photo={photo} key={photo.["_id"]}/>)}
		</div>
	)
}

export default PhotoGrid;