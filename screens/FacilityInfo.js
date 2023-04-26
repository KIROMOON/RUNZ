import React , {useState,useEffect}from "react";
import {TouchableOpacity, FlatList, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ViewPropTyles} from 'deprecated-react-native-prop-types'
import {Dimensions} from 'react-native';
import DateSlider from "../Component/CalendarView";
import { ScrollView } from "react-native-gesture-handler";
import Fainfo from "../Component/FaInfo";
import { source } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import {getPublicF} from '../lib/PublicF';
import PublicFList from "../Component/PublicFList";
import { useRoute } from "@react-navigation/native";
import ReservationList from "./ReservationList";

const Width = Dimensions.get('window').width;
const FacilityInfo = ()=>{
    const route = useRoute();
    const navigation = useNavigation();
    const [visible, setVisible] =useState(null);
    return(
        <SafeAreaView style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
                    <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', padding:10}}>                    
                     <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('이용메뉴')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>이용메뉴</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('수강정보')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>수강정보</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('시설정보')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>시설정보</Text>
                        </TouchableOpacity>
                    </View>
                    
                        {(visible === null)? <DateSlider/> :null}
                        {(visible === '이용메뉴')?<DateSlider/>:null}
                        {(visible === '수강정보')? null:null}
                        {(visible === '시설정보')? <Fainfo/>:null}


                        {(visible === null)? <View style={{flex:1 }}>
                        <ReservationList/>
                    </View>:null}
                        {(visible === '이용메뉴')?<View style={{flex:1 }}>
                        <ReservationList/>
                    </View> :null}
                        {(visible === '수강정보')? null:null}
        </SafeAreaView>
    )
}

const sty = StyleSheet. create ({
    Image: {
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        marginTop: 20,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: 200,
        padding:10,
    }
})


export default FacilityInfo;