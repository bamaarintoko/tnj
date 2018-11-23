import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'

function mapStateToProps(state) {
    return {
        redAuth : state.redAuth
    };
}

class ScreenLogin extends Component {
    componentDidMount() {

        console.log("asd", this.props)
    }

    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenLogin);