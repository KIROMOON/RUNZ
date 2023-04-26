import React from "react";
import {View, Text, Image,StyleSheet,TouchableOpacity} from "react-native";
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

function IconButton2 ({props}){
   const onPress ={onPress}
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}>
            <Image source={props}
                    resizeMode = 'contain'
                     style={{
                    width:(Width-50)/3,
                    height:100,
                }}
            />
        </TouchableOpacity>
    );
}

export default IconButton2;