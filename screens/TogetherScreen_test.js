import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {View, Text,StyleSheet,SafeAreaView} from 'react-native';
import CameraButton from './ClubAddScreen';

function TogetherScreen_test(){
    return (
        <SafeAreaView style = {sty.block}>
            
            <View style = {sty.title}>
                <Text style={{fontSize:30}}>[모임 만들기]</Text>
            </View>
            <CameraButton/>
        </SafeAreaView>
    );
}

const sty = StyleSheet.create({
    block:{},
    title:{
        width:'100%',
        height:80,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default TogetherScreen_test;
