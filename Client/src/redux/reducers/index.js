import { combineReducers } from 'redux'
import { outpassReducer } from './outpassReducer'

const reducers = combineReducers({
    allOutpasses: outpassReducer,
})

export default reducers;