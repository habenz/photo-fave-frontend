// Manages the login status for the application

const initialState = {
	isLoggedIn: false,
	userName: '',
	userId: ''
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {isLoggedIn: true, ...action.payload};
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
}

export default reducer;