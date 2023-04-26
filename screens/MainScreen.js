import React from 'react';
import {StatusBar,ScrollView, View,Text, Image,StyleSheet,ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButtonSet from '../Component/IconButtonSet';
import TogetherButton from '../Component/TogetherButton';
import IconButtonSet2 from '../Component/IconButtonSet2';
import HomeAd from '../Component/HomeAd';
import ALLSportList from '../Component/ALLSportList';
import SportButton from '../Component/SportButton';
import SportList_2 from '../Component/ALLSportList';



import { NavigationContainer } from '@react-navigation/native';

function MainScreen(){
    return(
       <ScrollView>
        
        	<View style={{marginTop: 10,}}>
            <StatusBar backgroundColor = '#31d3c3'/>
            <ImageBackground 
            	style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
                source={require("../Image/BottomTab/background.png")}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
            <HomeAd/>
                <ScrollView
                    style = {{marginRight: 22, marginLeft: 13}}
                    horizontal ={true}>
                <View>
                    <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                        <SportButton
                            name={'축구'}
                            image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'족구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'배드민턴'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'테니스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'스쿼시'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        
                    </View>

                    <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                        <SportButton name={'야구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'농구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'탁구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'수영'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'볼링'} image={require('../Image/BottomTab/sportIcon.png')}/>
                    </View>
                </View>
                <View>
                    <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                        <SportButton name={'당구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'풋살'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'배구'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'요가'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'필라테스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                    </View>
                    <View style = {{flexDirection: 'row',}}>
                        <SportButton name={'헬스'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'클라이밍'} image={require('../Image/BottomTab/sportIcon.png')}/>
                        <SportButton name={'기타'} image={require('../Image/BottomTab/sportIcon.png')}/>
                    </View>
                </View>
            </ScrollView>
            {/*<TogetherButton/> //같이해요*/}
            <IconButtonSet2/>           
            </ImageBackground>
            </View>     
       </ScrollView>

    );
}

export default MainScreen;


// 결제(지역화폐) - payment gateway, 로그인(카톡), 주소 네비연결, 코인/블록체인// 검색창 활용 방법 // 기능에 대한 아이디어ㅎ