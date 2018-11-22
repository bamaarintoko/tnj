import {createStore, applyMiddleware, compose} from 'redux'
import app from '../Reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {middleware} from '../Navigator/AppNavigator'
import {AsyncStorage} from 'react-native'
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['redAuth', 'redSetting']
}
const persistedReducer = persistReducer(persistConfig, app)
export const store = createStore(app, applyMiddleware(thunk, middleware))
export const persistor = persistStore(store)