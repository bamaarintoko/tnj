/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppWithNavigationState, {store, persistor} from './src/Navigator/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react'
import {YellowBox} from 'react-native';
import {Provider} from "react-redux";

YellowBox.ignoreWarnings(['Remote debugger']);
type Props = {};
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppWithNavigationState/>
                </PersistGate>
            </Provider>
        );
    }
}
