import React,{useEffect, useState}from "react";
import {SafeAreaView,TouchableOpacity, FlatList, StyleSheet, Text, View,Image, ListViewBase} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getClubs } from "../lib/Clubs";
import ClubCard from "../Component/ClubCard";
import FloatingClubButton from "../Component/FloatingClubButton";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";


function TogetherScreen({route}){

    const [club, setClub] = useState(null);
    useEffect(()=> {
        getClubs().then(setClub);
    },[]);
    return (
        <SafeAreaView style={sty.block}>
            <FlatList
                data={club}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
            />
            <FloatingClubButton/>  
        </SafeAreaView>
    );
}

const renderItem = ({item}) => (
    <ClubCard
        name={item.name}
        purpose={item.purpose}
        sport={item.sport}
        information={item.information}
        photoURL={item.photoURL}/>
);


const sty=StyleSheet.create({
    block:{
        flex: 1,
    }
})


export default TogetherScreen;