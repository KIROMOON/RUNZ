import React,{useEffect, useState}from "react";
import {Pressable,SafeAreaView,TouchableOpacity, FlatList, StyleSheet, Text, View,Image, ListViewBase} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import KidInfo from "./KidInfo";

function KidScreen(){
    const navigation = useNavigation();

    const Kids =[
        {
            id:1,
            name :'정관동일1차 배드민턴장',
            price :"100만원",
            satisfaction: '⭐️⭐️⭐️⭐️⭐️',
            location: '100m',
            image: require('../Image/BottomTab/sportIcon.png'),
        },
        {
            id:2,
            name :'369 태권도',
            price :"100만원",
            satisfaction: '⭐️⭐️⭐️⭐️⭐️',
            location: '100m',
            image: require('../Image/BottomTab/sportIcon.png'),

        },
        {
            id:3,
            name :'스포원 테니스장',
            price :"100만원",
            satisfaction: '⭐️⭐️⭐️⭐️⭐️',
            location: '100m',
            image: require('../Image/BottomTab/sportIcon.png'),

        },
    ]

    
    const renderItems =( {item} ) => (

        <Pressable
            onPress={()=> navigation.navigate("KidInfo")}
            style = {sty.item}>
            <View style = {sty.avatorContainer}>
                <Image
                    source={item.image}
                    style={sty.avator}/>
            </View>
            <View>
                <View>
                    <Text style = {sty.name}>    {item.name}</Text>
                    <Text style = {sty.name}>   가격:{item.price}</Text>
                    <Text style = {sty.name}>    별점: {item.satisfaction}</Text>
                    <Text style = {sty.name}>    위치: {item.location}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent: 'space-around', }}>
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
                </View>
            </View>
        </Pressable>
    )

    itemSeparator = () => {
        return <View style = {sty.separator} />
    };

    return (
        <View>
            <View style={{flexDirection:'row', }}>
                <Pressable
                style={sty.filter}>
                <Text>전체</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}>
                    <Text>종목</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}>
                    <Text>가격순</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}>
                    <Text>거리순</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}>
                    <Text>지역</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}>
                    <Text>예약가능</Text>
                </Pressable>
            </View>
            <SafeAreaView>
            <FlatList
                data = {Kids}
                renderItem = {renderItems}
                ItemSeparatorComponent = { itemSeparator }
                ListEmptyComponent = {<Text>시설이 없어요😂</Text>}/>
            </SafeAreaView>
        </View>
        );
    
}

const sty = StyleSheet.create({
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:-3,
    },

    filter:{
        height:20,
        width:60,
        backgroundColor: 'yellow',
    },

    block:{
        alignItems: 'center',
        paddingVertical: 13,
    },
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,

    },
    avatorContainer:{
        backgroundColor: '#F3F2F2',
        borderRadius:100,
        height:70,
        width:70,
        justifyContent:'center',
        alignItems:'center',
    },
    avator:{
        resizeMode:'contain',
        height: 70,
        width: 70,
    },
    separator: {
        height:1,
        width:'95%',
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

export default KidScreen;