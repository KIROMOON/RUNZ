import React from "react";
import {View, Text, Image,StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

function IconButton ({props,location}){

    const navigation = useNavigation();
    return(
        <TouchableOpacity
            activeOpacity={0.5}   onPress = {() => navigation.navigate({location})} >
            <Image source={props}
                    resizeMode = 'contain'
                    style={{
                    width: (Width-100)/2,
                    height: 200,
                }}
            />
        </TouchableOpacity>
    );
}

export default IconButton;