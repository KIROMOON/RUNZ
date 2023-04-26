import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image, Touchable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';
import IconButton from './IconButton';
import ALLSportList from './ALLSportList';
import InsideSportList from './InsideSportList';
import OutsideSportList from './OutsideSportList';
import BallgameSportList from './BallgameSportList';

const Width = Dimensions.get('window').width;

function FilterButton(props) {
    const navigation = useNavigation();
    const [visible, setVisible] =useState(null);

    return(
        <View >
            <View style={{ flexDirection:'row'}}>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}
                    onPress = {() =>setVisible('전체')}>
                    <Text>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}
                    onPress = {() =>setVisible('실내')}>
                    <Text>실내</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}
                    onPress = {() =>setVisible('실외')}>
                    <Text>실외</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}
                    onPress = {() =>setVisible('구기')} >
                    <Text>구기</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:'row'}}>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>기구</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>맨몸</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>거리</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:50,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>지역</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:'row'}}>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:90,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>레크레이션</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:80,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>1인운동</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:80,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>2~4인 운동</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:'row'}}>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:80,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>4-8인 운동</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{backgroundColor:'#31d3c3', width:90,heights:50,borderColor:'white',borderWidth:5}}>
                    <Text>8인 이상 운동</Text>
                </TouchableOpacity>
            </View>


            <View>
               {(visible === null)?<ALLSportList/>:null}
               {(visible === '전체')?<ALLSportList/>:null}
               {(visible === '실내')? <InsideSportList/>:null}
               {(visible === '실외')?<OutsideSportList/>:null}
               {(visible === '구기')?<BallgameSportList/>:null}

            </View>
        
        </View>
    );
}


export default FilterButton;