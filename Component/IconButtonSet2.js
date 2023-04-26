import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
import IconButton2 from './IconButton2';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width;

function IconButtonSet2(){
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate("LessonScreen")}>
            <Image source={require('../Image/BottomTab/lesson.png')}
                    resizeMode = 'contain'
                     style={{
                    width: 160,
                    height :160
                }}
            />
        </TouchableOpacity>
     {/*}  <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate("KidScreen")}>
            <Image source={require('../Image/BottomTab/children.png')}
                    resizeMode = 'contain'
                     style={{
                    width:(Width-50)/3,
                    height:100,
                }}
            /> 
            </TouchableOpacity>*/}
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate("ShoppingScreen")}>
            <Image source={require('../Image/BottomTab/shopping.png')}
                    resizeMode = 'contain'
                     style={{
                    width: 160,
                    height: 160
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


export default IconButtonSet2;