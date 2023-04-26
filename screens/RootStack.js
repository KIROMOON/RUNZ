import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import { useUserContext } from '../contexts/UserContext';


const Stack = createNativeStackNavigator();

function RootStack(){
    return(
        <Stack.Navigator initialRouteName="MainTab">
            <Stack.Screen name="MainTab"
                          component={MainTab}
                          options={{
                            headerShown: false,
                          }}/>
        </Stack.Navigator>
    );
}

export default RootStack;