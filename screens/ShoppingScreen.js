import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LessonListItem from '../Component/LessonListItem';

function ShoppingScreen(){
    return (
        <View style ={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
            <View style={sty.filterContainer}>
                <Pressable style={sty.filter}>
                    <Text>전체</Text>
                </Pressable>
                <Pressable style={sty.filter}>
                    <Text>종목</Text>
                </Pressable>
                <Pressable style={sty.brandfilter}>
                    <Text>브랜드</Text>
                </Pressable>
            </View>
            <View style={[{marginTop:3,},sty.filterContainer]}>
            <Pressable style={sty.filter}>
                    <Text>공구</Text>
                </Pressable>
                <Pressable style={sty.filter}>
                    <Text>단체</Text>
                </Pressable>
                <Pressable style={sty.filter}>
                    <Text>신상</Text>
                </Pressable>
                <Pressable style={sty.filter}>
                    <Text>인기</Text>
                </Pressable>
                <Pressable style={sty.filter}>
                    <Text>가격</Text>
                </Pressable>
            </View>
            <View style  ={{marginTop:10}}>
            <View style = {sty.filterContainer}>
                <Pressable style = {sty.kind}>
                    <Text>남성의류</Text>
                </Pressable>
                <Pressable style = {sty.kind}>
                    <Text>여성의류</Text>
                </Pressable>
                <Pressable style = {sty.kind}>
                    <Text>유아의류</Text>
                </Pressable>
            </View>
                <View style = {[{marginTop:3},sty.filterContainer]}>
                    <Pressable style = {sty.kind}>
                        <Text>신발/가방</Text>
                    </Pressable>
                    <Pressable style = {sty.kind}>
                        <Text>용품</Text>
                    </Pressable>
                    <Pressable style = {sty.kind}>
                        <Text>악세서리</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ marginTop:10,width: '100%', height:100, backgroundColor: 'gray', borderRadius: 40,}}>
            </View>
        </View>
    );
}

const sty = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
    ,
    filter:{
        width: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandfilter:{
        width: 220,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },

    kind:{
        width: '33%',
        height: 130,
        backgroundColor: 'skyblue',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    }
}
)
export default ShoppingScreen;
