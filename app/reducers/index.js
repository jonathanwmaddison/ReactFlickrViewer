import { combineReducers } from 'redux';
import ImageLibraryReducer from './ImageLibraryReducer'
import {
    SEARCH_FLICKR, REQUEST_PHOTOS, RECEIVE_PHOTOS
} from '../actions'

function selectedTag(state = 'San Francisco', action) {
    switch(action.type) {
        case 
    }
}

export default combineReducers({
    imageLibrary: ImageLibraryReducer 
})
