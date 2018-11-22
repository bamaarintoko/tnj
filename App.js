/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppWithNavigationState from './src/Navigator/AppNavigator';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <AppWithNavigationState/>
        );
    }
}
