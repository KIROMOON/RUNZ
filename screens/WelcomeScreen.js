import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SetupProfile from "../Component/SetupProfile";

function WelcomeScreen() {
    return(
        <KeyboardAvoidingView
            style={sty.KeyboardAvoidingView}
            behavior={Platform.select({ios:'padding'})}>
            <SafeAreaView style={sty.block}>
                <Text style={sty.title}>환영합니다!</Text>
                <Text style={sty.description}>프로필을 설정하세요.</Text>
                <SetupProfile/>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const sty = StyleSheet.create({
    KeyboardAvoidingView:{
        flex:1
    },
    block: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontSize: 48,
    },
    desription: {
        marginTop: 16,
        fontSize: 21,
        color:'#757575',
    }
})

export default WelcomeScreen;
