import React,{useState} from 'react';
import {View, Text,Image, TouchableOpacity,Button,StyleSheet,Pressable} from 'react-native';
import styles from 'react-native-calendar/components/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ALLSportList from '../Component/ALLSportList';
import FilterButton from '../Component/FilterButton';

function Facilities(){
    const [visible, setVisible] = useState(null);
    return (
        <SafeAreaView style={{flexDirection:'column'}}>
            <Image
            source={require('../Image/BottomTab/sportslist.png')}
            resizeMode = 'contain'
            style={{
                marginTop:5,
                marginBottom:20,
                width:140,
                height:30,
            }}/>
            <ALLSportList/>
                    </SafeAreaView>
    );
}   

const sty = StyleSheet.create({
    recoListFilter:{
        height:20,
        width:130,
        borderRadius:4,
        backgroundColor:'#00D1B6',
    },
    text: {
        textAlign:'center',
        fontWeight:'300',
        textAlignVertical:'center',
    },
    recoList:{
      marginLeft:10,marginRight:10,
      width:10,
      height:200,
      backgroundColor:'#00D1B6',
      width:'100%',
    }
})


export default Facilities;
