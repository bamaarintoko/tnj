import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from "react-native"
function mapStateToProps(state) {
    return {
        state: state.nav,
    };
}

class ScreenSplash extends Component {
    componentDidMount() {
        console.log(this.props.state)
    }

    render() {
        return (
            <View>
                <Text>
                    Splash
                </Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenSplash);