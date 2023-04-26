import React from 'react';
import {Calendar} from 'react-native-calendars'
import {Text,StyleSheet,Pressable, Touchable} from 'react-native';
import styles from 'react-native-calendar/components/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';


const Width = Dimensions.get('window').width;
function CalendarView() {
    return (
    <TouchableOpacity
        style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
        onPress = {() =><CalendarView/>}>
        <Text style ={{textAlign:'center', color:'#F2F2F2',}}>날짜선택</Text>
    </TouchableOpacity>
    );
}

const sty = StyleSheet.create({
    calendar:{
        borderBottomWidth:1,
        borderBottomColor: "#e0e0e0",
    }
})

export default CalendarView;
