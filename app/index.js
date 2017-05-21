/* global document */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
/**
* Entry Point'
*/
ReactDOM.render(
    <Root />,
    document.getElementById('app')
);
