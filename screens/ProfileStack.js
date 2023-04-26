import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import { RootTagContext } from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import MyInfoScreen from './MyInfoScreen';

const Stack = createNativeStackNavigator();

function ProfileStack(){
    const {user} = useUserContext();

    return(
        <Stack.Navigator>
            
            {user ? (
                <>
                    <Stack.Screen
                        name="MyInfoScreen"
                        component = {MyInfoScreen}
                        options={{headerShown: false}}/>
                </>
            ):(
                <>
                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                        options = {{headerShown:false}}/>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options = {{headerShown:false}}/>
                </>
            )}
        </Stack.Navigator>
    )
}


export default ProfileStack;

