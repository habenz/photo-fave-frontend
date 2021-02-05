import {REGISTER, LOGIN, LOGOUT} from './actionTypes.js';

const API_URL_BASE = 'http://localhost:5000'

// explicit destructing means it's impossible to get an error from the server for missing paths
// pass in history for routing conditional on server response (credit: Jade)
export const register = ({ username, password }, history) => {
  return dispatch => {
  	const url = API_URL_BASE+"/users/add";
	// still need to handle invalid input
	fetch(url , {
		method: 'POST',
		headers: {'Content-Type': 'application/json'}, // not sure what this is but it's needed
		body: JSON.stringify({ username, password })
	})
		.then((response) => {
			if (response.status === 201) {
				return response.json();
			} else {
				throw response.status;
			}
		})
		// no need for params here
		.then(() => fetch(`${API_URL_BASE}/users/name/${username}`))
		.then(response => response.json())
		.then(json => {
			dispatch({type:REGISTER, payload:{
				username,
				password,
				user: json
				}})
			history.push('/');
		})
		.catch(err => console.log('Error in register action: ', err));
  };
}


export const login = ({username, password}, history) => {
	return dispatch => {
		const url = `${API_URL_BASE}/users/name/${username}`;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				console.log("in login action", json)
				if (password === json.password) {
					dispatch({type: LOGIN, payload:{
						username, 
						password,
						user: json
					}});
					history.push('/');
				} else {
					//wrong password
				}
			})
			.catch(err => console.log('Error in login action: ', err));

	}
}

export const logout = () => {
	return {
		type: LOGOUT
	}
}

