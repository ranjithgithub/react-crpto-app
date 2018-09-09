import {take, put, call} from 'redux-saga/effects'
import *as actions from './actions'
import {getCryptoData} from '../../api/api'


export const watchFetchCrptoData =  function *() {
    yield take(actions.ACTION_GET_CRTO_DATA)
    try { 
      const response = yield call(getCryptoData);
      yield put(actions.setCryptoData(response));
    } catch (e) {
      console.log(e)
    }
}
