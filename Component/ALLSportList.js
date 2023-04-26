import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SportButton from './SportButton';
import { ImageBackground } from 'react-native';



function ALLSportList(){
    
    return(
    <View>
        <ImageBackground 
        style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
        source={require("../Image/BottomTab/background.png")}  //이미지경로
        resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
        >
        <View style ={{flexDirection:'column',
                       alignItems:'flex-start',
                       padding:10}}>
            <View style = {styles.container}>

                <SportButton
                    name={'축구'}
                    image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'족구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'배드민턴'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'테니스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'스쿼시'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>

            <View style = {styles.container}>
                <SportButton name={'야구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'농구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'탁구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'수영'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'자전거'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>

            <View style = {styles.container}>
                <SportButton name={'볼링'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'당구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'풋살'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'배구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'양궁'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>

            <View style = {styles.container}>
                <SportButton name={'요가'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'필라테스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'헬스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'스쿠버'} image={require('../Image/BottomTab/sportIcon.png')}/>
                <SportButton name={'클라이밍'} image={require('../Image/BottomTab/sportIcon.png')}/>
            </View>
        </View>
        </ImageBackground>
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


export default ALLSportList;