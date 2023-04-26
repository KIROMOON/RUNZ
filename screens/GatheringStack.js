import React,{useState}from "react";
import {View, TEXT,Image,StyleSheet,TextInput,SearchInput,TouchableOpacity} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TogetherScreen from "./TogetherScreen";
import ClubAddScreen from "./ClubAddScreen";
import ClubInfo from "./ClubInfo";

const Stack = createNativeStackNavigator();

function GatheringStack(){
    return(
            <Stack.Navigator initialRouteName = "TogetherScreen">
                <Stack.Screen
                    name = "TogetherScreen"
                    component = {TogetherScreen}
                    options={{headerShown:false}}/>
                <Stack.Screen name = "ClubAddScreen" component={ClubAddScreen} options={{headerShown:false}}/>
                <Stack.Screen name = "ClubInfo" component={ClubInfo} options={{headerShown:false}}/>
            </Stack.Navigator>

    );
}

export default GatheringStack;
