import React, { Component } from 'react';
import { Provider } from 'react-redux';
import storeConfig from '../storeConfig';
import App from './App';

const store = storeConfig();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
               <App />
            </Provider>
        )
    }
}
