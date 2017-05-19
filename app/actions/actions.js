import request from 'request'

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

function recievePhotos(searchTerm, json) {
    return {
        type: RECEIVE_PHOTOS,
        searchTerm,
        photos: json.items,
        recieved: Date.now()
    }
}
