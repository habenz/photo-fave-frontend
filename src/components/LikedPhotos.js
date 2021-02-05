import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLikedPhotos } from '../redux/photoActions.js';
import PhotoGrid from './PhotoGrid';

const LikedPhotos = () => {
	const dispatch = useDispatch();
	const login = useSelector(state => state.login);

	useEffect(() => {
		dispatch(getUserLikedPhotos(login.username));
	});
	return (
		<div >
			<PhotoGrid/>
		</div>
		)
}

export default LikedPhotos;