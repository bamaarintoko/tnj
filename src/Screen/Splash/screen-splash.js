import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Image, StatusBar} from "react-native"
import {Container, Content} from 'native-base'
import {StackActions, NavigationActions} from 'react-navigation';

function mapStateToProps(state) {
    return {
        state: state.nav,
        redAuth: state.redAuth,
        redContact:state.redContact
    };
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})],
});
const resetActionHome = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})],
});

class ScreenSplash extends Component {

    componentDidMount() {
        if (this.props.redAuth.status_get) {
            setTimeout(() => {
                this.props.navigation.dispatch(resetActionHome)
            }, 1000)
        } else {

            setTimeout(() => {
                this.props.navigation.dispatch(resetAction)
            }, 3000)
        }
        // console.log(this.props)
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor={"#FF6E40"}/>
                <View style={styles.container}>
                    <Image
                        style={{flex: 1}}
                        width={200}
                        source={require('../../Assets/splash.png')}
                        resizeMode={"contain"}
                    />
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f05638',
        height: '100%'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
export default connect(
    mapStateToProps,
)(ScreenSplash);