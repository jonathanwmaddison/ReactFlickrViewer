import { combineReducers } from 'redux';
import ImageLibraryReducer from './ImageLibraryReducer'

export default combineReducers({
    imageLibrary: ImageLibraryReducer 
})
