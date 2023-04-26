import React from "react";
import {TouchableOpacity, FlatList, StyleSheet, Text, View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReserVationPage from "./ReservationPage";


function ReservationList({route}){

    const navigation = useNavigation();

            const facilities =[
            {
                id:1,
                name: '1번 코트',
                time: '06:00 - 09:00',
                price: '4,000원'

            },
            {
                id:2,
                name: '2번 코트',
                time: '09:00 - 12:00',
                price: '5,000원'
            },
            {
                id:3,
                name: '3번 코트',
                time: '09:00 - 12:00',
                price: '5,000원'
            },
            {
                id:4,
                name: '4번 코트',
                time: '12:00 - 18:00',
                price: '5,000원'

            },
            {
                id:5,
                name: '5번 코트',
                time: '09:00 - 12:00',
                price: '5,000원'
            },
        ];
    
    const oneAnimal = ( {item}) =>(
        <TouchableOpacity  onPress = {() => navigation.navigate("ReservationPage")}>
            <View style = { styles.item}>
                <Text style = {styles.name} >{item.name}</Text>
                <Text style = {styles.name} >{item.name}/{item.time}/{item.price}</Text>

            </View>
        </TouchableOpacity>
    )

    //headerComponent = () => {
        //return <Text style={styles.listHeadline}>{route.params.title}</Text>
    //}
    itemSeparator = () => {
        return <View style = {styles.separator} />
    }
    return (
        <View style={{flex:1}}>
            <FlatList
                style={{flex:1}}
                data = {facilities}
                renderItem =  { oneAnimal }
                ItemSeparatorComponent = {itemSeparator}
                ListEmptyComponent = {<Text>예약 가능한 곳이 없어요 ㅠㅠ</Text>}  
            />

        </View>
    )
}


const styles = StyleSheet.create ({

    item:{
    
        alignItems:'center',
        paddingVertical:13,

    },
    separator: {
        height:1,
        width:'100%',
        backgroundColor:'black'
    },
    
})

export default ReservationList;