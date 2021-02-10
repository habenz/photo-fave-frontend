import React from 'react';
import styles from './PhotoModal.module.css';

const PhotoModal = ({photo, toggleModal}) => {
	const handleModalWrapperClick = event => {
		if (event.target.id === "wrapper") {
			toggleModal();
		}
	}
  return (
    <div className={styles.modalWrapper} id="wrapper" onClick={handleModalWrapperClick}>
    	<div className={styles.popupCard}>
    		<img className={styles.img} src={photo.url} alt={photo.name}/>
    	</div>
    </div>
  )
}

export default PhotoModal;