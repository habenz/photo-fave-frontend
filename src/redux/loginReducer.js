import {REGISTER, LOGIN, LOGOUT} from './actionTypes.js';

// Manages the login status for the application

const initialState = {
	isLoggedIn: false,
	userName: '',
	user: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {isLoggedIn: true, ...action.payload};
		case LOGOUT:
			return initialState;
		case REGISTER:
			return {isLoggedIn: true, ...action.payload};
		default:
			return state;
	}
}

export default reducer;