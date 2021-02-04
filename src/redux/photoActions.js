import {ALL_PHOTOS, USER_PHOTOS} from './actionTypes.js';

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