import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';

function FloatingFeedWriteButton(){
    return(
        <View style = {sty.wrapper}>
            <Pressable
                style={({pressed}) => [
                    sty.button,
                    Platform.OS === 'ios' && {
                        opacity:pressed?0.6:1,
                    },
                ]}
                android_ripple = {{color:'white'}}>
            </Pressable>
        </View>
    );
}

const sty= StyleSheet.create({
    wrapper: {
        position:'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius:28,
        shadowColor:'#4d4d4d',
        shadowOffset: {width:0,height:4},
        shadowOpacity:0.5,
        shadowRadius: 4,
        elavation:5,
        overflow:Platform.select({android:'hidden'}),
    },
    button: {
        width:56,
        height:56,
        borderRadius:28,
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color:'white',
    },
});

export default FloatingFeedWriteButton;