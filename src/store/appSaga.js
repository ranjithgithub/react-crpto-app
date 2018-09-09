
import {createStore, applyMiddleware } from 'redux'
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import {fork, all } from 'redux-saga/effects'
import {watchFetchCrptoData} from './crpto-details/saga'
import {cryptoDetails} from './crpto-details/reducer'

function *rootSaga(){
    yield all([
      fork (watchFetchCrptoData)
    ])
}

export const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const appStore =  createStore(cryptoDetails, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga)
    return appStore
}
