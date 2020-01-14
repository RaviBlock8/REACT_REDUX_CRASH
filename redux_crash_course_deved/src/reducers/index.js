import {combineReducers} from 'redux'
import isLogged from './isLogged'
import counterReducer from './counter'
const rootReducer=combineReducers({
    counter:counterReducer,
    isLogged:isLogged
})

export default rootReducer