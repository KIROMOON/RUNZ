import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, {useState}from 'react';
import {View, Text,Pressable,StyleSheet,Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import LessonListItem from '../Component/LessonListItem';
import { useNavigation } from '@react-navigation/native';
import TeacherInfo from './TeacherInfo';
function  LessonScreen({route}){

    const navigation = useNavigation();
    const [search,setSearch] = useState(true);

    const facilities=[
        {
            id:1,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:2,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:3,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:4,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:5,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
        {
            id:6,
            name: '이성민',
            level: '프로/고수',
            price: '최저비용 1개월 12만원',
            satisfaction:'⭐️⭐️⭐️⭐️',
            location: '500m',
            image: require('../Image/BottomTab/sportIcon.png')
        },
    ];




    const OneAnimal= ({item}) =>(
        <TouchableOpacity style={sty.block}
                          onPress = {()=> navigation.navigate("강사")}>
            <View style = {sty.item}>
                <View style = {sty.avatorContainer}>
                    <Image source={item.image} style ={sty.avator}/>
                </View>
                <View style = {{flexDirection: 'column'}}>
                    <Text style ={sty.name}> {item.name}</Text>
                    <Text style ={sty.name}> {item.level}</Text>
                    <Text style ={sty.name}> {item.price}</Text>
                    <Text style ={sty.name}> {item.location}</Text>
                    <Text style ={sty.name}> {item.satisfaction}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )

    itemSeparator = () => {
        return <View style = {sty.separator} />
    }


    const [visible,setVisible] = useState('전체');
    const [filterVisible,setFilterVisible] = useState(false);

    return(
        <View style = {sty.container}>
            <View style = {{flexDirection:'row', justifyContent:'space-around',}}>
                <Pressable
                    style = {sty.filter}
                    onPress ={()=> setVisible('전체')}>
                    <Text>전체</Text>
                </Pressable>
                <Pressable
                    style = {sty.filter}
                    onPress ={()=> setVisible('종목')}>
                    <Text>종목</Text>
                </Pressable>
                <Pressable
                    style = {sty.filter}
                    onPress ={()=> setVisible('가격순')}>
                    <Text>가격순</Text>
                </Pressable>
                <Pressable
                    style = {sty.filter}
                    onPress ={()=> setVisible('지역')}>
                    <Text>지역</Text>
                </Pressable>
                <Pressable
                    style = {sty.filterbutton}
                    onPress ={()=> setFilterVisible(!filterVisible)}>
                    <Text>필터</Text>
                </Pressable>
            </View>
            <View style ={sty.buttonContainer}>
                <Pressable
                    style = {[{backgroundColor:(search===true)? 'skyblue': 'gray'},sty.button]}
                    onPress={()=>setSearch(true)}>
                    <Text>회원 구해용</Text>
                </Pressable>
                <Pressable
                    style = {[{backgroundColor:(search===false)? 'skyblue': 'gray'},sty.button]}
                    onPress={()=>setSearch(false)}>
                    <Text>쌤 구해용</Text>
                </Pressable>

            </View>
            <View>
            {(search === true)?
                <FlatList
                    data = { facilities }
                    renderItem = { OneAnimal}
                    ItemSeparatorComponent = {itemSeparator}
                    ListEmptyComponent = {<Text>예약 가능한 곳이 없어요 ㅠㅠ</Text>}  
                />
            : null}
            </View>
        </View>

    );
}

const sty = StyleSheet.create({
    container: {flex:1},
    filter:{
        width: 50,
        height:20,
        borderRadius: 20,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',

    },
    block:{
        flex: 1,
        paddingVertical: 13,
    },
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,

    },
    avatorContainer:{
        backgroundColor: '#F3F2F2',
        borderRadius:100,
        height:70,
        width:70,
        justifyContent:'center',
        alignItems:'center',
    },
    avator:{
        resizeMode:'contain',
        height: 70,
        width: 70,
    },
    separator: {
        height:1,
        width:'95%',
        backgroundColor:'black'
    },
    name: {
        fontSize: 10,
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:20,
    },
    button: {
        width: 150,
        height: 100,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
    

})
export default LessonScreen;
