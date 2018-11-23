import React, {Component, PureComponent} from 'react';
import {createStackNavigator} from "react-navigation";
import {
    createNavigationReducer,
    createReactNavigationReduxMiddleware, initializeListeners,
    reduxifyNavigator
} from 'react-navigation-redux-helpers'
import {persistStore, persistReducer} from 'redux-persist'
import {AsyncStorage, BackHandler} from 'react-native'
import {connect, Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {PersistGate} from "redux-persist/integration/react";
import {redAuth_} from "../Reducers/authReducers";
import LoginScreen from '../Screen/Login/screen-login'
import SplashScreen from '../Screen/Splash/screen-splash'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['redAuth', 'redSetting']
}
export const AppNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Splash: {screen: SplashScreen}

}, {
    headerMode: 'none',
    initialRouteName: 'Splash'
});
export const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
    nav: navReducer,

    redAuth: redAuth_
});
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
// const ast = this.props;
const mapStateToProps = (state) => ({
    state: state.nav,
});


const App = reduxifyNavigator(AppNavigator, "root");
const AppWithNavigationState = connect(mapStateToProps)(App);
const persistedReducer = persistReducer(persistConfig, appReducer)
export const store = createStore(
    appReducer,
    applyMiddleware(thunk, middleware),
);
const persistor = persistStore(store)

class Root extends React.Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            const {dispatch, state} = this.props;
            console.log(this.props)
            if (state.index === 0) {

                BackHandler.exitApp()
                return false;
            }
            // dispatch({type: 'Navigation/BACK'});
            return true;
        }.bind(this));
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }
    render() {
        return (
            <AppWithNavigationState />
        );
    }
}

export default connect(mapStateToProps)(Root)