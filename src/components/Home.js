import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllPhotos } from '../redux/photoActions.js'
// Font-awesome imports
//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	const photos = useSelector(state => state.photos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPhotos());
	}, [dispatch]); //why pass dispatch as a dependency? https://stackoverflow.com/a/58061735

	return (
		<div id="home">
			<header>
				<h1> Photo Fave </h1>
				<FontAwesomeIcon icon={faUser} />
			</header>

			{/*<PhotoGrid>*/}
		</div>
		)
}

export default Home;