import React from 'react'
import ReactDom from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux"

import CryptoCcyList from './components/CryptoCcyList'
import {createAppStore} from './store/appSaga'

function initialise() {
    const appStore = createAppStore()
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDom.render(
        <Provider store={appStore}>
        <CryptoCcyList/>
    </Provider>, app);
}

initialise();