import fetch from 'isomorphic-fetch'

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
        searchTerm
    }
}

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

function receivePhotos(searchTerm, json) {
    return {
        type: RECEIVE_PHOTOS,
        searchTerm,
        photos: json.items,
        recieved: Date.now()
    }
}
/**
* This action sets returns a function. It uses redux's Thunk middleware.
*/
export function fetchPhotos(searchTerm) {
    return function(dispatch) {
        dispatch(requestPhotos(searchTerm))
        const api = 'https://api.flickr.com/services/feeds/photos_public.gne?format=jsonp&nojsoncallback=1&tags='
        let headers = new Headers({
            "Access-Control-Allow-Origin": "*"
        })
        return fetch(api+encodeURIComponent(searchTerm), {headers: headers})
            .then(response => response.json())
            .then(json => 
               dispatch(receivePhotos(searchTerm, json))
           )
    }
}
