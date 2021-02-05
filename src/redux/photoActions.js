import {ALL_PHOTOS, USER_PHOTOS, USER_LIKED_PHOTOS,
	ADD_LIKE_TO_PHOTO, REMOVE_LIKE} from './actionTypes.js';

const API_URL_BASE = 'http://localhost:5000'

// could be a big problem given enough photos
export const getAllPhotos = () => {
	return dispatch => {
  		const url = API_URL_BASE+"/photos/";
  		fetch(url)
  			.then(response => response.json())
  			.then(json => dispatch({type: ALL_PHOTOS, payload: json}))
  			.catch(err => console.log('getAllPhotos call:', err))
	}
}

export const getUserPhotos = (username) => {
	return dispatch => {
		fetch(`${API_URL_BASE}/users/name/${username}`)
			.then(response => response.json())
			.then(json => json["_id"]) // get the id from the username
			.then(id => fetch(`${API_URL_BASE}/photos/${id}`)) // use that to get list of photos
			.then(response => response.json())
			.then(json => dispatch({type: USER_PHOTOS, payload: json}))
  			.catch(err => console.log('getUserPhotos call:', err))
	}
}

export const getUserLikedPhotos = (username) => {
	return dispatch => {
		fetch(`${API_URL_BASE}/users/name/${username}`)
			.then(response => response.json())
			.then(json => json._id) // get the id from the username
			.then(id => fetch(`${API_URL_BASE}/users/liked-photos/${id}`)) // use that to get list of photos
			.then(response => response.json())
			.then(json => dispatch({type: USER_LIKED_PHOTOS, payload: json}))
  			.catch(err => console.log('getUserPhotos call:', err))		
	}
}

export const updatePhotosWithLike = (userId, photoId) => {
	return dispatch => {
		fetch('http://localhost:5000/photos/like', {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ userId, photoId })
		})
		.then(() => fetch('http://localhost:5000/users/like/', {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ userId, photoId })
		}))
		.then(() => dispatch({type: ADD_LIKE_TO_PHOTO, payload: {userId, photoId}}))
		.catch(err => console.log('Error in photo actions add like:', err))
	}
}

export const removeLike = (userId, photoId) => {
	return dispatch => {
		fetch('http://localhost:5000/photos/unlike', {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ userId, photoId })
		})
		.then(() => fetch('http://localhost:5000/users/unlike', {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ userId, photoId })
		}))
		.then(() => dispatch({type: REMOVE_LIKE, payload: {userId, photoId}}))
		.catch(err => console.log('Error in photo actions remove like:', err))
	}
}
// export const addPhoto = (username, photoUrl) => {
// 	return dispatch => {
// 		const url = `${API_URL_BASE}/photos/add`;
// 		fetch(url, {
// 			method: 'POST',
// 			headers: {'Content-Type': 'application/json'}, // not sure what this is but it's needed
// 			body: JSON.stringify({ username, password })
// 		})
// 	}
// }