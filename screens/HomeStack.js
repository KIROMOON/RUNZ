import React,{useState}from "react";
import {View, TEXT,Image,StyleSheet,TextInput,SearchInput,TouchableOpacity} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from "../screens/HomeScreen";
import Facilities from "../screens/Facilities";
import IconButton from "../Component/IconButton";
import { useNavigation } from '@react-navigation/native';
import Notice from "../screens/Notice";
import Menu from "../screens/Menu";
import Rent from "../screens/Rent";
import FacilityList from "./FacilityList";
import FacilityInfo from "./FacilityInfo";
import ReserVationPage from "./ReservationPage";
import PublicFList from "../Component/PublicFList";
import FacilityScreen from "./FacilityScreen";
import TogetherScreen from "./TogetherScreen";
import ClubAddScreen from "./ClubAddScreen";
import FeedUploadScreen from "./FeedUploadScreen";
import VisitRequest from "./VisitRequest";
import PublicFPosts from "../Component/PublicFPosts";
import TeacherInfo from "./TeacherInfo";
import KidScreen from "./KidScreen";
import KidInfo from "./KidInfo";
const Stack = createNativeStackNavigator();

function HomeStack(){
    const navigation = useNavigation();
    const [value, onChangeText] = useState('');
    return(
            <Stack.Navigator initialRouteName = "Home">
                <Stack.Screen
                    name = "Home"
                    component = {HomeScreen}
                    options={{
                        title:'',
                        headerStyle:{
                            backgroundColor: '#31d3c3',
                        },

                        headerLeft: () => (
                        
                            <Image
                                source={require('../Image/BottomTab/top_rogo.png')}
                                resizeMode = 'contain'
                                style={{
                                    width: 80,
                                    height:35,
                                    alignItems:'center',textAlign:'center', justifyContent:'center'
                                }}/>
                        ),
                        
                        headerTitle: () => (
                            <TextInput
                            style = {{
                                height:40, borderColor:'#31d3c3', borderWidth:1,
                                borderRadius:30, width:210, backgroundColor:'white',
                                alignContent:'center',
                                textAlign:'center', justifyContent:'center'
                                ,marginLeft:20}}
                                placeholder="🔎무슨 운동할까?"
                            />
                        ),

                        headerRight: ({onPress}) => (  
                            <View style = {styles.container}>
                                <TouchableOpacity
                                    activeOpacity={0.5}   onPress = {() => navigation.navigate("Notice")} >
                                    <Image source={require('../Image/BottomTab/notice.png')}
                                            resizeMode = 'contain'
                                            style={{
                                            width:40,
                                            height:40,
                                        }}
                                    />
                                </TouchableOpacity>
                                


                            </View>
                            
            
                        ),
                        
                        
                    }}
                        
                   />
                <Stack.Screen name = "Facilities" component={Facilities} options={{headerShown:false}}/>
                <Stack.Screen name = "Notice" component={Notice} options={{headerShown:false}}/>
                <Stack.Screen name = "Menu" component={Menu} options={{headerShown:false}}/>
                <Stack.Screen name = "Rent" component={Rent} options={{headerShown:false}}/>
                <Stack.Screen name = "FacilityList" component={FacilityList}/>
                <Stack.Screen name = "FacilityInfo" component={FacilityInfo} options = {{headerShown:false}} />
                <Stack.Screen name = "ReservationPage" component = {ReserVationPage} options = {{headerShown:false}} />
                <Stack.Screen name = "PublicFList" component={PublicFList} options = {{headerShown:false}} />
                <Stack.Screen name = "FacilityScreen" component={FacilityScreen} options = {{headerShown:false}} />
                <Stack.Screen name = "TogetherScreen" component={TogetherScreen} options = {{headerShown:false}} />
                <Stack.Screen name = "ClubAddScreen" component={ClubAddScreen} options = {{headerShown:false}} />
                <Stack.Screen name = "FeedUploadScreen" component={FeedUploadScreen}  />
                <Stack.Screen name = "FeedScreen" component={FeedUploadScreen} options = {{headerShown:false}}/>
                <Stack.Screen name = "VisitRequest" component={VisitRequest} options = {{headerShown:false}}/>
                <Stack.Screen name = "PublicFPosts" component={PublicFPosts} options = {{headerShown:false}}/>
                <Stack.Screen name = "강사" component={TeacherInfo} />
                <Stack.Screen name = "KidScreen" component={KidScreen} />
                <Stack.Screen name = "KidInfo" component={KidInfo} />
            </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'stretch',
        alignItems: 'center',
    }
})
export default HomeStack;