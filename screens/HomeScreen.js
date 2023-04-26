import React from 'react';
import {StatusBar,ScrollView, View,Text, Image,StyleSheet,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButtonSet from '../Component/IconButtonSet';
import TogetherButton from '../Component/TogetherButton';
import IconButtonSet2 from '../Component/IconButtonSet2';
import HomeAd from '../Component/HomeAd';
import ALLSportList from '../Component/ALLSportList';
import SportList_2 from '../Component/ALLSportList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingScreen from './ShoppingScreen';
import LessonScreen from './LessonScreen';
import TogetherScreen from './TogetherScreen';
import FeedScreen from './FeedScreen';
import MainScreen from './MainScreen';
const Tab = createMaterialTopTabNavigator();

function HomeScreen(){
    return(

            <Tab.Navigator
                initialRouteName="추천"
                screenOptions={{
                    tabBarIndicatorStyle:{
                        backgroundColor:'#31d3c3',}
                    ,
                    tabBarActiveTintColor: '#31d3c3'
                }}>
                 <Tab.Screen
                    name="추천"
                    component = {MainScreen}
                    options={{
                        tabBarLabel:"추천",
                        tabBarColor:'#31d3c3',
                    }}/>

                {/* <Tab.Screen
                    name="시설"
                    component = {ALLSportList}
                    options={{
                        tabBarLabel:"종목",
                        tabBarColor:'#31d3c3',
                    }}/>
                */}
                <Tab.Screen
                    name="피드"
                    component = {FeedScreen}
                    options={{
                        tabBarLabel:"피드",
                        tabBarColor:'#31d3c3',
                    }}/>
                <Tab.Screen
                    name="LessonScreen"
                    component = {LessonScreen}
                    options={{
                        tabBarLabel:"레슨",
                        tabBarColor:'#31d3c3',
                    }}/>
                <Tab.Screen
                    name="ShoppingScreen"
                    component = {ShoppingScreen}
                    options={{
                        tabBarLabel:"쇼핑",
                        tabBarColor:'#31d3c3',
                    }}/>

            </Tab.Navigator>

    );
}

export default HomeScreen;


// 결제(지역화폐) - payment gateway, 로그인(카톡), 주소 네비연결, 코인/블록체인// 검색창 활용 방법 // 기능에 대한 아이디어ㅎ