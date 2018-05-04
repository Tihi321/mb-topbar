import React from 'react';
import { render } from 'react-dom';
import Routes from './containers/routes.jsx';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './utils/registerServiceWorker';


class ReactApp {

    constructor() {
        render(
            <Provider store={store}>
            <Routes />
            </Provider>,
            document.getElementById('react-topbar')
        );
    }
}

registerServiceWorker();

export {
    ReactApp
}