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
		case 'REGISTER':
			console.log('in reducer, case is REGISTER')
			return {isLoggedIn: true, ...action.payload};
		default:
			return state;
	}
}

export default reducer;