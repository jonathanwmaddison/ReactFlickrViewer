import { combineReducers } from 'redux';
import ImageLibraryReducer from './ImageLibraryReducer'
import {
    SEARCH_FLICKR, REQUEST_PHOTOS, RECEIVE_PHOTOS
} from '../actions'
/**
 * Sets currentSearch state. initializes with San Francisco
*/
function currentSearch(state = 'San Francisco', action) {
    switch(action.type) {
        case SEARCH_FLICKR:
            return action.searchTerm
        default:
            return state
    }
}
/**
 * Sets state of photos(photos to be display) for the current search term and sets isfetching.
*/
function photos(state = {
    isFetching: false,
    items: []
}, action) {
    switch(action.type) {
        case REQUEST_PHOTOS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.photos,
                lastUpdated: action.received
            })
         default:
            return state
    }
}
/**
 * Keeps track of photos the user has previously searched.
*/
function photosBySearch(state = {}, action) {
    switch(action.type) {
        case RECEIVE_PHOTOS:
        case REQUEST_PHOTOS:
            return Object.assign({}, state, {
                [action.searchTerm]: photos(state[action.searchTerm], action)
            })
        default:
            return state
    }
}
export default combineReducers({
    imageLibrary: ImageLibraryReducer,
    photosBySearch,
    currentSearch
})
