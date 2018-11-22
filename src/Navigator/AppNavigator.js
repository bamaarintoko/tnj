import React, {Component, PureComponent} from 'react';
import {createStackNavigator} from "react-navigation";
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from 'react-navigation-redux-helpers'
import {persistStore, persistReducer} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import LoginScreen from '../Screen/Login/screen-login'
import {connect, Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['redAuth', 'redSetting']
}
export const AppNavigator = createStackNavigator({
    Login: {screen: LoginScreen}

}, {
    headerMode: 'none',

    initialRouteName: 'Login'
});
export const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer
});
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
const persistedReducer = persistReducer(persistConfig, appReducer)
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, middleware),
);
const persistor = persistStore(store)
export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppWithNavigationState/>
                </PersistGate>
            </Provider>
        );
    }
}