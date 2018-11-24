import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text, View, ListItem, List, Left, Body, Right, Thumbnail, Button} from 'native-base'
import {Image, StatusBar, StyleSheet, TouchableOpacity} from "react-native";

import {actGetcontact} from "./actions";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {NavigationActions, StackActions} from "react-navigation";

function mapStateToProps(state) {
    return {
        redContact: state.redContact,

    };
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Splash'})],
});

class ScreenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data_slice: [],
            initialRedContact: true,
            isLoading: true
        }
        this.onNext = this.onNext.bind(this)
        this.onPrevious = this.onPrevious.bind(this)
        this.onLogut = this.onLogut.bind(this)
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedContact === this.props.redContact.status) {
            if (this.props.redContact.status_get) {
                this.setState({
                    data: this.props.redContact.data,
                    data_slice: this.props.redContact.data.slice(0, 5),
                    isLoading: false
                })
                this.props.dispatch({type: 'CONTACTS_RESET'})
            }
        }
    }

    componentDidMount() {
        // console.log()
        this.props.dispatch(actGetcontact({}))
    }

    onNext() {
        this.setState({
            data_slice: this.state.data.slice(5, 10)
        })
    }

    onPrevious() {
        this.setState({
            data_slice: this.state.data.slice(0, 5)
        })
    }

    onLogut() {
        // console.log("sadasd")
        this.props.dispatch({type: 'LOGIN_RESET'})
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor={"#FF6E40"}/>
                <View style={{
                    backgroundColor: '#FFF',
                    height: 54,
                    borderBottomColor: '#BDBDBD',
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Contact List</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={this.onLogut}>
                            <View style={styles.btnOut}>
                                <Image
                                    style={{flex: 1}}
                                    width={25}
                                    source={require('../../Assets/sign-out.png')}
                                    resizeMode={"contain"}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Content>
                    {
                        this.state.isLoading
                            ?
                            <Text>Please wait...</Text>
                            :
                            <List>
                                {
                                    this.state.data_slice.map((x, y) => {
                                        return (
                                            <ListItem thumbnail key={y}>
                                                <Left>
                                                    <Thumbnail square source={{uri: x.avatar}}/>
                                                </Left>
                                                <Body>
                                                <Text>{x.first_name} - {x.last_name}</Text>
                                                <Text note numberOfLines={1}>{x.gender}</Text>
                                                <Text note numberOfLines={1}>{x.email}</Text>
                                                </Body>
                                                <Right>
                                                </Right>
                                            </ListItem>
                                        )
                                    })
                                }

                            </List>
                    }

                </Content>
                <View style={styles.footer}>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.onPrevious}>
                            <View style={styles.btn}>
                                <Text>Previous</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.onNext}>
                            <View style={styles.btn}>
                                <Text>Next</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        height: hp('10%'),
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#BDBDBD',
        height: hp('5.5%'),
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOut: {
        height: hp('5.5%'),
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default connect(
    mapStateToProps,
)(ScreenHome);