import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RentList from './RentList';


function Rent(){
    return (
        <SafeAreaView style = {{flex:1, flexDirection:'column', marginLeft:20, marginRight:20, marginTop:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{justifyContent: "center", backgroundColor: '#69D0C3', borderRadius: 20, width: wp('43%'), height: hp('20%') }}>
                    <Text style={{textAlign:'center', fontSize: 30}}> 대관</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent: "center",backgroundColor: '#69D0C3', borderRadius: 20, width: wp('43%'), height: hp('20%') }}>
                <Text style={{textAlign:'center', fontSize: 30}}> 대여/식당</Text>
                </TouchableOpacity>
            </View>
            <View style ={{flexDirection:'row', justifyContent:'space-between' }}>
                <RentList  header='대관'
                           style={{justifyContent: "center"}}/>
                <RentList  header='식당'
                           style={{justifyContent: "center"}}/>
            </View>

        </SafeAreaView>
    )
}

export default Rent;
