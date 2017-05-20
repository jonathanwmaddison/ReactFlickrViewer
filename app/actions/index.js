import $ from 'jquery'

export const SEARCH_FLICKR = 'SEARCH_FLICKR';

export function searchFlickr(searchTerm) {
    return {
        type: SEARCH_FLICKR,
        searchTerm
    }
}

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';

function requestPhotos(searchTerm) {
    return {
        type: REQUEST_PHOTOS,
        searchTerm: searchTerm
    }
}

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

function receivePhotos(searchTerm, json) {
    return {
        type: RECEIVE_PHOTOS,
        searchTerm: searchTerm,
        photos: json.items,
        received: Date.now()
    }
}
/**
* This action sets returns a function. It uses redux's Thunk middleware.
*/
export function fetchPhotos(searchTerm) {
    return function(dispatch) {
        dispatch(requestPhotos(searchTerm))
        const api = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags='
        return $.getJSON(api+encodeURIComponent(searchTerm), function(data) {
               dispatch(receivePhotos(searchTerm, data))
        })
    }
}

/**
 *  This checks whether the tag has already been searched
 */
function shouldFetchPhotos(state, searchTerm) {
    const photos = state.photosBySearch[searchTerm]
    if(!photos) {
        return true
     } else {
        return false
     } 
}

export function fetchPhotosIfNeeded(searchTerm) {
    return (dispatch, getState) => {
        if(shouldFetchPhotos(getState(), searchTerm)) {
            console.log('test', searchTerm)
            return dispatch(fetchPhotos(searchTerm))
        } else {
            return Promise.resolve()
        }
    }
}
