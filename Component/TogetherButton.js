import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width;


function TogetherButton() {
    const navigation = useNavigation();
    return(
    <View style = {styles.container}>
        <TouchableOpacity
            activeOpacity={0.5} onPress = {() => navigation.navigate("TogetherScreen")}>
            <Image source={require('../Image/BottomTab/together.png')}
                    resizeMode = 'contain'
                    style={{
                        marginTop:0,
                        width:(Width-50),
                        height: 90,
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


export default TogetherButton;