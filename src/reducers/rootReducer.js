import { combineReducers } from 'redux'
import pkmReducer from './pkmReducer'

const rootReducer = combineReducers({
    pkm: pkmReducer
})

export default rootReducer