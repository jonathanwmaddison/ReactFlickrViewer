import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <h1>React app is working!</h1>
    </Provider>,
    document.getElementById('app')
);
