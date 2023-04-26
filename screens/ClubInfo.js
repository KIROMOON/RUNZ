import react, {useState} from "react";
import {Modal, TextInput,TouchableOpacity,ScrollView, StyleSheet,SafeAreaView,View, Pressable, Text} from 'react-native';
import {Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { format } from "date-fns";
import { weeksToDays } from "date-fns";
import { Calendar } from "react-native-calendars";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

function ClubInfo(){
    const today = format(new Date(),'yyyy-MM-dd');
    const [ShowDayModal1,setShowDayModal1] = useState(false);
    const [Count, setCount] = useState(null);
    const [showInfo,setShowInfo] = useState('Info');
    const [hopedate1,setHopedate1] = useState(today);
    const [selectTime,setSelectTime] = useState();

return(
    <ScrollView style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
        <SafeAreaView>
            <View  style={sty.Image}>
            <Text>상세사진</Text>
            </View>
        </SafeAreaView>
        <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', padding:10}}>      
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10,  width: wp('40%') ,heights:hp('20%'),}}
                onPress = {() =>setShowInfo('Info')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>모임소개</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10,  width: wp('40%') ,heights:hp('20%'),}}
                onPress = {() =>setShowInfo('pic')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>게시판</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', padding:10}}>      
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10, width: wp('40%') ,heights:hp('20%'),}}
                onPress = {() =>setShowInfo('list')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>회원리스트</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10, width: wp('40%') ,heights:hp('20%'),}}
                onPress = {() =>setShowInfo('make')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>벙개</Text>
            </TouchableOpacity>
        </View>
    {(showInfo === 'Info')?            
            <View>
                <Text>모임명</Text>
                <Text>활동지역</Text>
                <Text>홈그라운드</Text>
                <Text>소개내용</Text>
                <Text>정모/벙개/투표 진행현황</Text>
            </View>: null
    }

    {(showInfo === 'make')?
        <View>
           <TextInput
                style={sty.input}
                placeholder="벙개 이름을 적어주세요!"/>
            <ScrollView
                    horizontal ={true}
                    style ={{flexDirection:'row'}}
                    showsHorizontalScrollIndicator={true}>
                <Pressable style = {sty.button}>
                    <Text>날짜</Text>
                </Pressable>
                <Pressable style = {sty.button}>
                    <Text>시간</Text>
                </Pressable>
                <Pressable style = {sty.button}>
                    <Text>위치</Text>
                </Pressable>
                <Pressable style = {sty.button}>
                    <Text>비용</Text>
                </Pressable>
                <Pressable style = {sty.button}>
                    <Text>인원</Text>
                </Pressable>
            </ScrollView>
        </View>
           :null}
    </ScrollView>
)


} const sty = StyleSheet.create({
    Image:{
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        marginTop: 20,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: Height/4,
        padding:10,
        backgroundColor: 'skyblue',

    },
    curiculum:{
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: Height/6,
        padding:10,
        backgroundColor: 'skyblue',


    },
    input:{
        marginTop:5,
        borderRadius: 30,
        paddingLeft:6,
        height:40,
        backgroundColor:'gray',
    },
    button:{
        margin: 5,
        width: 100,
        height: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,


    }

 })

 export default ClubInfo;