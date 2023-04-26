import React from 'react';
import { View, Image, SafeAreaView, Platform,Pressable,StyleSheet, Text,FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';


function LessonListItem() {

    const lessons =[
        {
            id:1,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:2,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:3,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:4,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:5,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:6,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
    ];

    const lesson = ({item}) =>{
        <Pressable
            style={({pressed}) => [
                sty.block,
                Platform.OS === 'ios' && pressed && {backgroundColor:'#efefef'}]}
                android_ripple ={{color:'#ededed'}}>
            <View style = {sty.item}>
                <View style = {sty.avatorContainer}>
                    <Image source={item.image} style ={sty.avator}/>
                </View>
                <View style = {{flexDirection: 'column'}}>
                    <Text style ={sty.name}> {item.name}</Text>
                    <Text style ={sty.name}> {item.level}</Text>
                    <Text style ={sty.name}> {item.price}</Text>
                    <Text style ={sty.name}> {item.location}</Text>
                    <Text style ={sty.name}> {item.satisfaction}</Text>
                </View>
            </View>
        </Pressable>

    };

    itemSeparator = () => {
        return <View style = {sty.separator} />
    }


    return(
        <View>
            <FlatList
                data = { lessons }
                renderItem = { lesson }
                ItemSeparatorComponent = { itemSeparator }
                ListEmptyComponent = {<Text>대관할 곳이 없어요 ㅜㅜ</Text>}/>

        </View>
    );
}

const sty = StyleSheet.create({

    block:{
        flex: 1,
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


})

export default LessonListItem;