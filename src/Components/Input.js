import React from 'react';
import {Input, Item, Label, Text} from "native-base";
import {StyleSheet, View} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const InputUsername = ({val, onChange, onBlur, isError, string}) => {
    let err = typeof isError === 'undefined' ? false : !!isError.error;
    return (
        <View style={styles.input}>
            <Text style={styles.label_text}>Username</Text>
            <Item regular style={styles.text_input} error={typeof isError === 'undefined' ? false : !!isError.error}>
                <Input
                    onBlur={onBlur}
                    isError={isError}
                    value={val}
                    onChangeText={onChange}
                />
                {
                    err
                    &&
                        <Text style={{marginRight: 10, color: 'red'}}>Required</Text>
                }
            </Item>
        </View>
    )
}

export const InputPassword = ({val, onChange, onBlur, isError, string}) => {
    let err = typeof isError === 'undefined' ? false : !!isError.error;
    return (
        <View style={styles.input}>
            <Text style={styles.label_text}>Password</Text>
            <Item regular style={styles.text_input} error={typeof isError === 'undefined' ? false : !!isError.error}>
                <Input
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    onBlur={onBlur}
                    isError={isError}
                    value={val}
                    onChangeText={onChange}
                />
                {
                    err
                    &&
                    <Text style={{marginRight: 10, color: 'red'}}>Required</Text>
                }
            </Item>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    label_text: {
        color: '#FFF',
        fontSize: hp('2.5%'),
        marginBottom: 3
    },
    text_input: {
        backgroundColor: '#FFF',
        height: hp('6%')
    },
});