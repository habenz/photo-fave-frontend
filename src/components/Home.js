import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getAllPhotos } from '../redux/photoActions.js';
import PhotoGrid from './PhotoGrid';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// pass an object representing the sort
		dispatch(getAllPhotos({like_count:'-1', createdAt:'-1'}));
	}, [dispatch]); //why pass dispatch as a dependency? https://stackoverflow.com/a/58061735

	return (
		<div id="home">
			<PhotoGrid/>
		</div>
		)
}

export default Home;