import React from "react";
import {View, Text, Image,StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';


import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

function SportButton ({image,name}){
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <TouchableOpacity
                onPress = {() => navigation.navigate("FacilityList", {title: name})}
                activeOpacity={0.5}>
                    <Image source={image}
                            resizeMode = 'contain'
                            style={{
                                marginTop:10,
                                width: (Width-20)/5,
                                height: 60,
                        }}/>
                <Text style={{textAlign:'center',fontSize:15,marginBottom:8, }}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        
    }
})
export default SportButton;