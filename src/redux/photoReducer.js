import {ALL_PHOTOS, USER_PHOTOS, USER_LIKED_PHOTOS,
	ADD_LIKE_TO_PHOTO, REMOVE_LIKE, ADD_PHOTO, DELETE_PHOTO} from './actionTypes.js';

// state represents a list of photos on the screen
const reducer = (state=[], action) => {
	switch (action.type){
		case ALL_PHOTOS:
		case USER_PHOTOS:
		case USER_LIKED_PHOTOS:
			return [...action.payload];
		case ADD_LIKE_TO_PHOTO:{
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
		}
		case REMOVE_LIKE: {
			const {userId, photoId} = action.payload;
			const updatedState = state.map(photo => {
				if(photo._id === photoId){
					const newPhoto = photo;
					newPhoto.likes = newPhoto.likes.filter(id => id !== userId);
					return newPhoto;
				}
				return photo;
			})
			return updatedState;
		}
		case ADD_PHOTO:
			return [...state, action.payload];
		case DELETE_PHOTO:
			return state.filter(photo => photo._id !== action.payload)
		default:
			return state;
	}
} 

export default reducer;