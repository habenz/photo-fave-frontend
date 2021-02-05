import {ALL_PHOTOS, USER_PHOTOS, USER_LIKED_PHOTOS, ADD_LIKE_TO_PHOTO} from './actionTypes.js';

// state represents a list of photos on the screen
const reducer = (state=[], action) => {
	switch (action.type){
		case ALL_PHOTOS:
		case USER_PHOTOS:
		case USER_LIKED_PHOTOS:
			return [...action.payload];
		case ADD_LIKE_TO_PHOTO:
			const {userId, photoId} = action.payload;
			const updatedState = state.map(photo => {
				if(photo._id === photoId){
					const newPhoto = photo;
					newPhoto.likes.push(userId);
					return newPhoto;
				}
				return photo;
			})
			return updatedState;
		default:
			return state;
	}
} 

export default reducer;