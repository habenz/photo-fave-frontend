const API_URL_BASE = 'http://localhost:5000'

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

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
			console.log("response",response);

			if (response.status === 201) {
				dispatch({type:REGISTER, payload:{username, password }})
				history.push('/');
			} else {
				// some kind of error handling here
			}
			return response.json();
		})
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
					dispatch({type: LOGIN, payload:{username, password}});
					history.push('/');
				} else {
					//wrong password
				}
			})
			// flesh this out
			.catch(err => console.log(err));

	}
}

export const logout = () => {

}

