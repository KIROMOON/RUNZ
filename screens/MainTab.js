import React from "react";
import {View, TEXT,Image} from "react-native";
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from "../screens/HomeScreen";
import NearByScreen from "../screens/NearByScreen";
import GatheringStack from "./GatheringStack";
import MessageScreen from "../screens/MessageScreen";
import HomeStack from "./HomeStack";
import { useUserContext } from "../contexts/UserContext";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

function MainTab(){
    const {user} = useUserContext();
    
    return(
        <Tab.Navigator
            initialRouteName="홈"
            tabBarOptions={{
                showLabel:false,
                headerShown: false,
                keyboardHidesTabBar: true,
            }}>
            <Tab.Screen
                    name ="홈"
                    component={HomeStack}
                    options={
                        {  
                            headerShown : false,
                            tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center',top:3}}>
                                <Image
                                    source={focused? require('../Image/BottomTab/Home.png'): require('../Image/BottomTab/home_gray.png')}
                                    resizeMode = 'contain'
                                    style={{
                                        width:35,
                                        height:40,
                                    }}
                                    />
                            </View>
                        )}
                    }/>
                    <Tab.Screen name ="내주변" component={NearByScreen}
                     options={
                        {tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center',top:3}}>
                                <Image
                                    source={focused? require('../Image/BottomTab/nearby_mint.png'): require('../Image/BottomTab/Nearby.png')}
                                    resizeMode = 'contain'
                                    style={{
                                        width:40,
                                        height:40,
                                    }}
                                    />
                            </View>
                        )}
                    }/>
                <Tab.Screen name ="메세지" component={MessageScreen}
                     options={
                        {tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center',top:3}}>
                                <Image
                                    source={focused? require('../Image/BottomTab/message_mint.png'): require('../Image/BottomTab/Message.png')}
                                    resizeMode = 'contain'
                                    style={{
                                        width:40,
                                        height:40,
                                    }}
                                    />
                            </View>
                        )}
                    }/>
                <Tab.Screen name ="내정보" component={ProfileStack}
                     options={
                        {   headerShown : false,
                            tabBarIcon: ({focused}) =>(
                            <View style={{alignItems:'center',justifyContent:'center',top:3}}>
                                <Image
                                    source={focused? require('../Image/BottomTab/myinfo_mint.png'): require('../Image/BottomTab/MyInfo.png')}
                                    resizeMode = 'contain'
                                    style={{
                                        width:40,
                                        height:40,
                                    }}
                                    />
                            </View>
                        )}
                    }/>   
            </Tab.Navigator>
    )
}

export default MainTab;
