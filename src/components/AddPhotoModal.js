import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../redux/photoActions.js';

import styles from './AddPhotoModal.module.css';

const AddPhotoModal = ({toggleModal}) => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.login);

	const [photoInfo, setInputs] = useState({
		url: '',
		name: ''
	});

	const handleChange = (event) => {
		setInputs({
			...photoInfo,
			[event.target.name]: event.target.value
		});
	}

	const submitPhoto = (event) => {
		event.preventDefault ? event.preventDefault() : console.log("no preventDefault");
		// dispatch action to add photo to server
		// const numUserPhotos = login.user. // can't get total number of user photos easily
		const name = photoInfo.name || `${login.user.username}'s image`;
		console.log(login.user._id, photoInfo.url, name);
		dispatch(addPhoto(login.user._id, photoInfo.url, name));
		// close the modal
		toggleModal();
	}

	const clickOutsideAndCloseModal = event => {
		if (event.target.id === "wrapper") {
			toggleModal();
		}
	}
	
	return (
		<div className={styles.modalWrapper} id="wrapper" onClick={clickOutsideAndCloseModal}>
			<div className={styles.modal}>
				<form className={styles.form} onSubmit={submitPhoto}>
					<h3> Add Your Image! </h3>
					{/*<label htmlFor="url"> </label>*/}
					<input required type="url" name="url" placeholder="url" value={photoInfo.url} onChange={handleChange}/>
					<input type="text" name="name" placeholder="image name" value={photoInfo.name} onChange={handleChange}/>
					<button> Add!</button>
				</form>
			</div>
		</div>
		)
}

export default AddPhotoModal;