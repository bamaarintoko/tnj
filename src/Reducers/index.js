import {combineReducers} from 'redux'
// import {nav} from './dataReducers'
import {navReducer} from '../Navigator/AppNavigator'

const rootReducer = combineReducers({
    nav: navReducer
})

export default rootReducer