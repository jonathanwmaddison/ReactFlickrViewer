import 'babel-polyfill'

import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { searchFlickr, fetchPhotos } from './actions'; 
import reducers from './reducers';
import App from './components/app';

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
)
store.dispatch(searchFlickr('San Francisco'))
store.dispatch(fetchPhotos('San Francisco')).then(()=>
    console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
