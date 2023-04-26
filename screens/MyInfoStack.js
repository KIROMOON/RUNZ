import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInScreen from './SignInScreen';
import { useUserContext } from '../contexts/UserContext';
import MyInfoScreen from './MyInfoScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

function MyInfoStack(){
    const {user} = useUserContext();
    return (
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name ="MyInfoScreen" componenet = {MyInfoScreen}/>
            ) :(
            <>
                <Stack.Screen name ="SignInScreen" component={SignInScreen} options={{tabBarStyle:{display: 'none'}, headerShown:false}}/>
                <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options = {{headerShown:false}}/>
            </>

            )}
        </Stack.Navigator>
    );
}

export default MyInfoStack;