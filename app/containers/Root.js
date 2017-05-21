import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeConfig from '../storeConfig';
import App from './App';

const store = storeConfig();
/**
* Root sets up the store and provides state to containers/components
*/
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
               <App />
            </Provider>
        )
    }
}
