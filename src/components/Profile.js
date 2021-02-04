import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../redux/photoActions.js';
import PhotoGrid from './PhotoGrid';

const Profile = () => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.login);

	useEffect(() => {
		dispatch(getUserPhotos(login.username));
	});

	return (
		<div >
			<PhotoGrid/>
		</div>
		)
}

export default Profile;