import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
const renderApp = Component => {
    render(<HashRouter basename="dist/"><Component/></HashRouter>, rootElement)
};

renderApp(App);