const API_URL_BASE = 'http://localhost:5000'

const REGISTER = 'REGISTER';

export const register = ({ username, password }) => {
  return dispatch => {
  	const url = API_URL_BASE+"/users/add";
  	console.log(url);
	// still need to handle invalid input
	fetch(url , {
		method: 'POST',
		headers: {'Content-Type': 'application/json'}, // not sure what this is but it's needed
		body: JSON.stringify({ username, password })
	})
		.then((response) => {console.log("response",response); return response.json();})
		.then((json) => {console.log('json',json); return json})
		.then(() => dispatch({type:REGISTER, payload:{username, password }}));
  };
};
