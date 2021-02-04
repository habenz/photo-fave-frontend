import {ALL_PHOTOS, USER_PHOTOS} from './actionTypes.js';

// state represents a list of photos on the screen
const reducer = (state=[], action) => {
	switch (action.type){
		case ALL_PHOTOS:
		case USER_PHOTOS:
			return [...action.payload];
		default:
			return state;
	}
} 

export default reducer;