import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, {useMemo,useEffect} from 'react';
import {View,StyleSheet,Text,Image,Pressable} from 'react-native';
import styles from 'react-native-calendar/components/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

function PublicFList({photoURL, explanation, lessonExplanation,name,post}) {
    const navigation = useNavigation();
    return (
            <Pressable
            onPress={()=> navigation.push("FacilityScreen",{post})}>
            <View style = {sty.item}>
                    <View style = {sty.avatorContainer}>
                        <Image
                            source={{uri:photoURL}}
                            style={sty.avator}/>
                    </View>
                    <View>
                    <View>
                        <Text style = {sty.name}>    {name}</Text>
                        <Text style = {sty.name}>     가격: 100만원</Text>
                        <Text style = {sty.name}>    별점: ⭐️⭐️⭐️⭐️⭐️</Text>
                        <Text style = {sty.name}>    리뷰: 100+</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', }}>
                        <View
                            style={sty.littlebox}>
                            <Text>이용</Text>
                            <View style ={sty.bluecircle}/>
                        </View>
                        <View
                            style={sty.littlebox}>
                            <Text>대관</Text>
                            <View style ={sty.redcircle}/>
                        </View>
                        <View
                            style={sty.littlebox}>
                            <Text>강습</Text>
                            <View style ={sty.bluecircle}/>
                        </View>
                        <View
                            style={sty.littlebox}>
                            <Text>모임</Text>
                            <View style ={sty.bluecircle}/>
                        </View>
                    </View>
                    </View>
                </View>
                </Pressable>
            )
}

const sty = StyleSheet.create ({
    filter:{
        height:20,
        width:60,
        backgroundColor: 'yellow',
    },
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
        paddingVertical:-3,

    },

    avatorContainer:{
        backgroundColor: '#F3F2F2',
        borderRadius:100,
        width:150,
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    avator:{
        resizeMode:'contain',
        width:150,
        height:150,
    },
    separator: {
        height:1,
        width:'100%',
        backgroundColor:'black'
    },
    littlebox:{
        width:60,
        height:20,
        backgroundColor: 'pink',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    redcircle:{
        backgroundColor: 'red',
        width:  9,
        height: 9,
        borderRadius: 100,
        marginLeft: 3,
    },
    bluecircle:{
        backgroundColor: 'blue',
        width:  9,
        height: 9,
        borderRadius: 100,
        marginLeft: 3,
    }

})

export default PublicFList;