import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SportButton from './SportButton';


function InsideSportList(){
    return(
        <View style ={{flexDirection:'column',
                       alignItems:'flex-start',
                       padding:10}}>
            <View style = {styles.container}>
                <SportButton name={'배드민턴'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'스쿼시'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'농구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'탁구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'수영'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>
            <View style = {styles.container}>
                <SportButton name={'볼링'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'당구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'배구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'요가'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'필라테스'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>

            <View style = {styles.container}>
                <SportButton name={'헬스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'클라이밍'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent:'stretch',
        justifyContent: 'flex-start',
    }
})


export default InsideSportList;