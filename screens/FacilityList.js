import React,{useEffect, useState}from "react";
import {Pressable,SafeAreaView,TouchableOpacity, FlatList, StyleSheet, Text, View,Image, ListViewBase} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getPublicF} from '../lib/PublicF';
import PublicFList from "../Component/PublicFList";

function FacilityList({route}){

    const navigation = useNavigation();
    const [PublicF, setPublicF] = useState(null);
    useEffect(()=> {
        getPublicF().then(setPublicF);
    },[]);
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
        <FlatList
            data={PublicF}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
        />
    </View>
    );
}

const renderItem = ({item}) => (
    <PublicFList
        name={item.name}
        explanation={item.explanation}
        photoURL={item.photoURL}
        post={item}/>
);

const sty= StyleSheet. create ({
    filter:{
        height:20,
        width:60,
        backgroundColor: 'yellow',
    },

})


export default FacilityList;