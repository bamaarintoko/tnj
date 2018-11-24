import {combineReducers} from 'redux'
// import {nav} from './dataReducers'
import {navReducer} from '../Navigator/AppNavigator'
import {redAuth_} from './authReducers'
const rootReducer = combineReducers({
    nav: navReducer,
    redAuth:redAuth_,

})

export default rootReducer