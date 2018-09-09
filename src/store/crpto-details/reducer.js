
import * as actions from './actions'
//create a reducer
export function cryptoDetails(state = [], action) {
    switch(action.type) {
        case actions.ACTION_SET_CRTO_DATA: 
            state = [...action.cryptoData]
            return state
        default:
          return state
    }
}