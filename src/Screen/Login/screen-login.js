import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import {Container, Input, Item, Button} from 'native-base'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {InputPassword, InputUsername} from "../../Components/Input";
import Api from "../../Utils/Api";
import {NavigationActions, StackActions} from "react-navigation";
import {actLogin} from "./actions";

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})],
});

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}

let errors = {};

class ScreenLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_error: [],
            username: '',
            password: '',
            initialRedAuth: true
        }
        this.onSave = this.onSave.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedAuth === this.props.redAuth.status) {
            if (this.props.redAuth.status_get) {
                console.log("===>",this.props)
                this.props.navigation.dispatch(resetAction)
            } else {
                this.props.dispatch({type: 'LOGIN_RESET'})
            }
        }
    }

    componentDidMount() {
        // this.props.dispatch({
        //     type:'LOGIN',
        //     status_get : true,
        //     data : [],
        //     message : 'qweqwe'
        // })

        // console.log("qwe")
        // console.log("asd", this.props)
    }

    onValidate = (key) => {
        return (e) => {
            // console.log('----->e', this.state[key].length)
            if (this.state[key].length < 1) {
                errors[key] = {error: true, error_message: 'required'}
            } else {
                errors[key] = false
            }
            this.setState({input_error: errors})
        }

    }

    onSave() {
        // console.log({ "success" : 1 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9", "user_id": 1 })
        let count_errors = []

        if (this.state.username.length < 1) {
            errors['username'] = {error: true, error_message: 'required'}
            count_errors.push({username: true})
        }

        if (this.state.password.length < 1) {
            errors['password'] = {error: true, error_message: 'required'};
            count_errors.push({password: true})
        }
        if (count_errors.length < 1) {
            this.props.dispatch(actLogin())
        } else {
            // console.log("error",errors)
            this.setState({
                input_error: errors
            })
        }
    }

    render() {
        // console.log(this.state.input_error.username)
        return (
            <Container>
                <StatusBar backgroundColor={"#FF6E40"}/>
                <View style={styles.container}>
                    <Text style={{fontSize: hp('3%'), color: '#FFF'}}>Tonjoo Test</Text>
                </View>
                <View style={styles.container_}>
                    <View style={{width: '100%'}}>
                        <InputUsername
                            onBlur={this.onValidate('username')}
                            isError={this.state.input_error.username}
                            val={this.state.username}
                            onChange={(e) => this.setState({username: e})}
                        />
                        <InputPassword
                            onBlur={this.onValidate('password')}
                            isError={this.state.input_error.password}
                            val={this.state.password}
                            onChange={(e) => this.setState({password: e})}
                        />
                        <View style={styles.btn}>
                            <Button full success style={{backgroundColor: '#FF6E40'}} onPress={this.onSave}>
                                <Text style={{color: '#FFF'}}>Login</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    btn: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        marginTop: 40
    },
    label_text: {
        color: '#FFF',
        fontSize: hp('2.5%'),
        marginBottom: 3
    },
    text_input: {
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        height: hp('6%')
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f05638',
        height: '100%',
        flex: 1
    },
    container_: {
        flexDirection: 'column',
        backgroundColor: '#f05638',
        height: '100%',
        flex: 2
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
)(ScreenLogin);