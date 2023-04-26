import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';
import IconButton from './IconButton';


const Width = Dimensions.get('window').width;


function IconButtonSet(){
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            < TouchableOpacity
                activeOpacity={0.5}   onPress = {() => navigation.navigate("Facilities")} >
                <Image source={require('../Image/BottomTab/facilities.png')}
                        resizeMode = 'contain'
                        style={{
                        width: (Width-50)/2,
                        height: 200,
                    }}
                />
             </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}   onPress = {() => navigation.navigate("Rent")} >
                <Image source={require('../Image/BottomTab/rent.png')}
                        resizeMode = 'contain'
                        style={{
                        width: (Width-50)/2,
                        height: 200,
                    }}
                />
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'stretch',
        alignItems: 'center',
    }
})


export default IconButtonSet;