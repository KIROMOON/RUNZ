import React, {useMemo} from 'react';
import {View,StyleSheet, Text, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ClubCard({name, purpose, sport, information, photoURL}) {
    const navigation = useNavigation();
    return(
        <Pressable
            onPress = {()=> navigation.navigate("ClubInfo")}>
        <View style = {sty.item}>
            <View style = {sty.avatorContainer}>
                <Image
                    source={{uri:photoURL}}
                    style={sty.avator}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style = {sty.sport}>    {sport}</Text>
                <Text style = {sty.name}>    {name}</Text>
            </View>
        </View>
    </Pressable>
    );
}

const sty = StyleSheet.create ({

    listHeader: {
        height:55,
        alignItems:'center',
        justifyContent:'center',
    },
    listHeadline:{
        color:'#333',
        fontSize:21,
        fontWeight:'bold'
    },

    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:13,

    },

    avatorContainer:{
        backgroundColor: '#F3F2F2',
        borderRadius:100,
        height:89,
        width:89,
        justifyContent:'center',
        alignItems:'center',
    },
    avator:{
        resizeMode:'contain',
        height: 89,
        width: 89,
    },
    separator: {
        height:1,
        width:'100%',
        backgroundColor:'black'
    },
    name:{
        fontSize:20,
    }
})

export default ClubCard;