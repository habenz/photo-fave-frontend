import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos, addPhoto } from '../redux/photoActions.js';
import PhotoGrid from './PhotoGrid';
import AddPhotoModal from './AddPhotoModal';

import styles from './Profile.module.css';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.login);

	const [addingPhoto, toggleAdding] = useState(false);

	useEffect(() => {
		dispatch(getUserPhotos(login.username));
	},[dispatch]);

	const toggleModal = event => {
		toggleAdding(!addingPhoto);
	}

	return (
		<div >
			<PhotoGrid isProfile={true}/>
			<div className={styles.addButtonWrapper}>
				{login.isLoggedIn &&
				<button className={styles.add} onClick={toggleModal}>
					<FontAwesomeIcon icon={faPlus} style={{color: "ghostwhite"}}/>
				</button>
				}			
			</div>

		{ addingPhoto && <AddPhotoModal toggleModal={toggleModal}/>}

		</div>
		)
}

export default Profile;