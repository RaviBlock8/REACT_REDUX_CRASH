import {combineReducers} from 'redux'
import isLogged from './isLogged'
import counterReducer from './counter'
const rootReducer=combineReducers({
    counterReducer,
    isLogged
})

export default rootReducer