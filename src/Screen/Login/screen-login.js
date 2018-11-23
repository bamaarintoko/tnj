import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import {Container, Input, Item, Button} from 'native-base'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}

class ScreenLogin extends Component {
    componentDidMount() {

        console.log("asd", this.props)
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor={"#FF6E40"}/>
                <View style={styles.container}>
                <Text style={{fontSize:hp('3%'), color:'#FFF'}}>Tonjoo Test</Text>
                </View>
                <View style={styles.container_}>
                    <View style={{width: '100%'}}>
                        <View style={styles.input}>
                            <Text style={styles.label_text}>Username</Text>
                            <Item regular style={styles.text_input}>
                                <Input/>
                            </Item>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.label_text}>Password</Text>
                            <Item regular style={styles.text_input}>
                                <Input/>
                            </Item>
                        </View>
                        <View style={styles.btn}>
                            <Button full success style={{backgroundColor:'#FF6E40'}}>
                                <Text style={{color:'#FFF'}}>Login</Text>
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
    btn:{
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        marginTop: 40
    },
    label_text: {
        color: '#FFF',
        fontSize: hp('2.5%'),
        marginBottom:3
    },
    text_input: {
        backgroundColor: '#FFF',
        borderColor:'#FFF',
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