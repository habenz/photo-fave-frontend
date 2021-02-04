import {combineReducers} from 'redux';
import login from './loginReducer';
import photos from './photoReducer';

export default combineReducers({
	login, photos
});