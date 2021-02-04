import React from 'react';
import {useDispatch} from 'react-redux';
// Font-awesome imports
//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	const photos = useSelector(state)
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