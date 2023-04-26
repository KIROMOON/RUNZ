import React from "react";
import {SafeAreaView,TouchableOpacity, FlatList, StyleSheet, Text, View,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';



function RentList({header}){

    const navigation = useNavigation();

            const facilities =[
            {
                id:1,
                name: '수영구스포츠클럽',
                image: require('../Image/BottomTab/sportIcon.png')
            },
            {
                id:2,
                name: '북구국민체육센터',
                image: require('../Image/BottomTab/sportIcon.png')
            },
            {
                id:3,
                name: '부산중구스포츠클럽',
                image: require('../Image/BottomTab/sportIcon.png')
            },
            {
                id:4,
                name: '사하구국민체육센터',
                image: require('../Image/BottomTab/sportIcon.png')
            },
            {
                id:5,
                name: '시민생활체육관',
                image: require('../Image/BottomTab/sportIcon.png')
            },
            {
                id:6,
                name: '장유스포츠센터',
                image: require('../Image/BottomTab/sportIcon.png')
            },
        ];
    
    const oneAnimal = ( {item}) =>(
        <TouchableOpacity  onPress = {() => navigation.navigate("FacilityInfo")} // 나중에 고치기
        >
            <View style = { styles.item}>
                <View style = {styles.avatorContainer}>
                    <Image source={item.image} style={styles.avator}/>
                </View>
                <Text style = {styles.name} >{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    headerComponent = () => {
        return <Text style={styles.listHeadline}>{header}</Text>
    }
    itemSeparator = () => {
        return <View style = {styles.separator} />
    }
    return (
        <SafeAreaView>
            <FlatList
                data = {facilities}
                renderItem =  { oneAnimal }
                ItemSeparatorComponent = {itemSeparator}
                ListEmptyComponent = {<Text>대관할 곳이 없어요 ㅜㅜ</Text>}  

            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create ({

    listHeader: {
        height:55,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'mint'
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
    
})

export default RentList;