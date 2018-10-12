import {combineReducers} from 'redux'
import {LOG_OUT} from '../actions/types'
import authReducer from './authReducer'


const appReducers = combineReducers({
session:authReducer,



})

export const rootReducer = (state,action) => {
    if (action.type === LOG_OUT){
        state = undefined
    }
    return appReducers(state,action)
}