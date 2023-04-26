import React , {useState,useEffect}from "react";
import {Modal,TouchableOpacity, FlatList, StyleSheet, Text, View,Image,SafeAreaView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ViewPropTyles} from 'deprecated-react-native-prop-types'
import {Dimensions} from 'react-native';
import DateSlider from "./CalendarView";
import { ScrollView } from "react-native-gesture-handler";
import Fainfo from "../Component/FaInfo";
import { source } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import {getPublicF} from '../lib/PublicF';
import PublicFList from "../Component/PublicFList";
import { useRoute } from "@react-navigation/native";
import ReservationList from "../screens/ReservationList";
import CalendarView from "./CalendarView";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { weeksToDays } from "date-fns";
import { NativeScreenNavigationContainer } from "react-native-screens";
import {format} from 'date-fns';
import { Calendar } from "react-native-calendars";


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

function PublicFPosts ({photoURL, explanation, lessonExplanation, name}){
    const [ShowDayModal1,setShowDayModal1] = useState(false);
    const [ShowDayModal2,setShowDayModal2] = useState(false);

    const today = format(new Date(),'yyyy-MM-dd');
    const nowtime = new Date().getHours();

    const navigation = useNavigation();
    const [visible, setVisible] =useState(null);
    const [Count, setCount] = useState(null);
    const [hopedate1,setHopedate1] = useState(today);
    const [hopedate2,setHopedate2] = useState(today);

    const [selectTime,setSelectTime] = useState();
    const [memberVisible,setMemberVisible] = useState(true);


    return(
        
        <ScrollView style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
            <SafeAreaView>
            <Image
                source={{uri:photoURL}}
                style={sty.Image}/>
            </SafeAreaView>
               <Text style ={sty.title}>{name}</Text>
                    <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', padding:10}}>      
                    <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('이용')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>이용</Text>
                        </TouchableOpacity>
              
                     <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('강습')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>강습</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('대관&대여')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>대관&대여</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {{backgroundColor:'gray', borderRadius: 10, width: wp('20%') ,heights:hp('15%'),}}
                            onPress = {() =>setVisible('모임')}>
                            <Text style ={{textAlign:'center', color:'#F2F2F2',}}>모임</Text>
                        </TouchableOpacity>
                    </View>
                    <>
                        {(visible === null)? <View>
                                                <Fainfo explanation={explanation}/>
                                                <View style={sty.box}>
                                                    <Text>
                                                        방문 6/관심 15/ 조회 3000
                                                    </Text>
                                                </View>
                                                <View>
                                                    <View style={sty.reviewtitle}>
                                                    <Text>📌리뷰리스트</Text>
                                                    </View>
                                                    <Text> 아직 리뷰가 없어요 😭</Text>
                                                </View>
                                                <Pressable
                                                    onPress={()=> navigation.push("VisitRequest")}
                                                    style={sty.button}>
                                                    <Text>방문하기🔎</Text>
                                                </Pressable>
                                            </View> :null}
                        {(visible === '이용')?<View>
                                                <Fainfo explanation={explanation}/>
                                                <View style={sty.box}>
                                                    <Text>
                                                        방문 6/관심 15/ 조회 3000
                                                    </Text>
                                                </View>
                                                <View>
                                                    <View style={sty.reviewtitle}>
                                                    <Text>📌리뷰리스트</Text>
                                                    </View>
                                                    <Text> 아직 리뷰가 없어요 😭</Text>
                                                </View>
                                                <Pressable
                                                    onPress={()=> navigation.push("VisitRequest")}
                                                    style={sty.button}>
                                                    <Text>방문하기🔎</Text>
                                                </Pressable>
                                            </View> :null}

                        {(visible === '강습')? <View>
                                                <Fainfo explanation={lessonExplanation}/>
                                                <Pressable
                                                        style={{
                                                                backgroundColor:'black',
                                                                borderRadius:10,
                                                                margin:40,
                                                                padding:10,
                                                                width:200,
                                                                alignItems: 'center',
                                                            }} >
                                                <Text  style={{color:'white',fontSize:22}}>강습리스트</Text>
                                                </Pressable>
                                                <Pressable
                                                        style={{
                                                                    backgroundColor:'black',
                                                                    borderRadius:10,
                                                                    margin:40,
                                                                    padding:10,
                                                                    width:200,
                                                                    alignItems: 'center',
                                                                }}
                                                >
                                                    <Text  style={{color:'white',fontSize:22}}>방문인원</Text>
                                                </Pressable>

                                                <TextInput
                                                    style={sty.input}
                                                    value={Count}
                                                    onChangeText={setCount}
                                                    maxLength={2}
                                                    returnKeyType="done"
                                                    keyboardType="number-pad"
                                                    placeholder="방문 인원을 적어주세요."
                                                    onSubmitEditing={(value) => setCount(value.nativeEvent.text)}
                                                    placeholderTextColor={'gray'}/>
                                            {(Count===null)?null: <Text>총 {Count}명 방문 예정⭐️</Text>}
                                            <Pressable
                                                    style={{ 
                                                        backgroundColor:'black',
                                                        borderRadius:10,
                                                        margin:40,
                                                        padding:10,
                                                        width:200,
                                                        alignItems: 'center',
                                                    }}
                                                    onPress={()=>setShowDayModal1(true)}>
                                                    <Text style={{color:'white',fontSize:22}}>방문일자</Text>
                                            </Pressable>

                                                    {(ShowDayModal1===true)?null:<Text>{hopedate1} 방문 신청⭐️</Text>}

                                                <Pressable                style={{
                                                        backgroundColor:'black',
                                                        borderRadius:10,
                                                        margin:40,
                                                        padding:10,
                                                        width:200,
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Text  style={{color:'white',fontSize:22}}>방문시간</Text>
                                                </Pressable>    

                                                {(hopedate1 === today)?
                                                <View>
                                                    <View style={{flexDirection: 'row'}}>
                                                        {(nowtime<9)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 9)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===9)?setSelectTime(null):setSelectTime(9)}}
                                                            >
                                                                <Text>9:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>9:00</Text></View>}
                                                        {(nowtime<10)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 10)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===10)?setSelectTime(null):setSelectTime(10)}}
                                                            >
                                                                <Text>10:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>10:00</Text></View>}
                                                        {(nowtime<11)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 11)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===11)?setSelectTime(null):setSelectTime(11)}}
                                                            >
                                                                <Text>11:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>11:00</Text></View>}
                                                        {(nowtime<12)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 12)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===12)?setSelectTime(null):setSelectTime(12)}}
                                                            >
                                                                <Text>12:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>12:00</Text></View>}
                                                        {(nowtime<13)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 13)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===13)?setSelectTime(null):setSelectTime(13)}}
                                                            >
                                                                <Text>13:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>13:00</Text></View>}
                                                        {(nowtime<14)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 14)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===14)?setSelectTime(null):setSelectTime(14)}}
                                                            >
                                                                <Text>14:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>14:00</Text></View>}
                                                        </View>
                                                        <View style={{flexDirection: 'row'}}>
                                                        {(nowtime<15)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 15)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===15)?setSelectTime(null):setSelectTime(15)}}
                                                            >
                                                                <Text>15:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>15:00</Text></View>}
                                                        {(nowtime<16)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 16)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===16)?setSelectTime(null):setSelectTime(16)}}
                                                            >
                                                                <Text>16:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>16:00</Text></View>}
                                                        {(nowtime<17)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 17)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===17)?setSelectTime(null):setSelectTime(17)}}
                                                            >
                                                                <Text>17:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>17:00</Text></View>}
                                                        {(nowtime<18)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 18)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===18)?setSelectTime(null):setSelectTime(18)}}
                                                            >
                                                                <Text>18:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>18:00</Text></View>}
                                                        {(nowtime<19)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 19)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===19)?setSelectTime(null):setSelectTime(19)}}
                                                            >
                                                                <Text>19:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>19:00</Text></View>}
                                                        {(nowtime<20)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 20)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===20)?setSelectTime(null):setSelectTime(20)}}
                                                            >
                                                                <Text>20:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>20:00</Text></View>}
                                                        {(nowtime<21)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 21)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===21)?setSelectTime(null):setSelectTime(21)}}
                                                            >
                                                                <Text>21:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>21:00</Text></View>}
                                                        {(nowtime<22)?
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 22)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===22)?setSelectTime(null):setSelectTime(22)}}
                                                            >
                                                                <Text>22:00</Text>
                                                            </Pressable>
                                                            :<View style={sty.inActivetimebutton}><Text>22:00</Text></View>}
                                                    </View>
                                                </View> : <View>
                                                    <View style={{flexDirection: 'row'}}>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 9)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===9)?setSelectTime(null):setSelectTime(9)}}
                                                            >
                                                                <Text>9:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 10)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===10)?setSelectTime(null):setSelectTime(10)}}
                                                            >
                                                                <Text>10:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 11)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===11)?setSelectTime(null):setSelectTime(11)}}
                                                            >
                                                                <Text>11:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 12)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===12)?setSelectTime(null):setSelectTime(12)}}
                                                            >
                                                                <Text>12:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 13)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===13)?setSelectTime(null):setSelectTime(13)}}
                                                            >
                                                                <Text>13:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 14)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===14)?setSelectTime(null):setSelectTime(14)}}
                                                            >
                                                                <Text>14:00</Text>
                                                            </Pressable>
                                                        </View>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 15)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===15)?setSelectTime(null):setSelectTime(15)}}
                                                            >
                                                                <Text>15:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 16)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===16)?setSelectTime(null):setSelectTime(16)}}
                                                            >
                                                                <Text>16:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 17)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===17)?setSelectTime(null):setSelectTime(17)}}
                                                            >
                                                                <Text>17:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 18)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===18)?setSelectTime(null):setSelectTime(18)}}
                                                            >
                                                                <Text>18:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 19)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===19)?setSelectTime(null):setSelectTime(19)}}
                                                            >
                                                                <Text>19:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 20)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===20)?setSelectTime(null):setSelectTime(20)}}
                                                            >
                                                                <Text>20:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 21)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===21)?setSelectTime(null):setSelectTime(21)}}
                                                            >
                                                                <Text>21:00</Text>
                                                            </Pressable>
                                                            <Pressable
                                                                style={[{backgroundColor: (selectTime== 22)? 'blue':'white'},sty.timebutton]}
                                                                onPress={()=>{(selectTime===22)?setSelectTime(null):setSelectTime(22)}}
                                                            >
                                                                <Text>22:00</Text>
                                                            </Pressable>
                                                    </View>
                                                </View> }

                                            {(selectTime===null)?null: <Text>{selectTime}시 방문 예정⭐️</Text>}

                                            <Pressable
                                                    onPress={()=> navigation.push("VisitRequest")}
                                                    style={sty.button}>
                                                    <Text>요청하기 </Text>
                                                </Pressable>

                                                <View style={sty.box}>
                                                    <Text>
                                                        방문 6/관심 15/ 조회 3000
                                                    </Text>
                                                </View>
                                                <View>
                                                    <View style={sty.reviewtitle}>
                                                    <Text>📌리뷰리스트</Text>
                                                    </View>
                                                    <Text> 아직 리뷰가 없어요 😭</Text>
                                                </View>
                                            </View> : null}
                        {(visible === '대관&대여')? <View>
                                                    <Calendar style={{borderRadius:10,elevation:4, margin:40}}
                                                        onDayPress={date =>{
                                                        setHopedate2(date.dateString)}}
                                                        minDate={today}
                                                        initialDate={today}
                                                        maxDate={"2023-03-31"}
                                                        hideExtraDays={true}/>
                                                    <Text>{hopedate2} 방문 신청⭐️</Text>
                                                 </View>
                                                 :null}
                        {(visible === '모임')? 
                        <>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between', padding:10 }}>
                            <Pressable
                                style={[{backgroundColor: (memberVisible === false)? 'gray':'yellow'},sty.clubButton]}
                                onPress={()=>setMemberVisible(true)}>
                                    <Text>회원리스트</Text>

                            </Pressable>
                            <Pressable
                                style={[{backgroundColor: (memberVisible === true)? 'gray':'yellow'},sty.clubButton]}
                                onPress={()=>setMemberVisible(false)}>
                                    <Text>게시글</Text>

                            </Pressable>
                        </View>
                        </>
                        :null}
                <Modal visible={ShowDayModal1} animationType="fade">
                    <Calendar style={{borderRadius:10,elevation:4, margin:40}}
                    onDayPress={date =>{
                        setHopedate1(date.dateString)
                        setShowDayModal1(false)}}
                        minDate={today}
                        initialDate={today}
                        maxDate={"2023-03-31"}
                        hideExtraDays={true}/>
                </Modal>
                <Modal visible={ShowDayModal2} animationType="fade">
                    <Calendar style={{borderRadius:10,elevation:4, margin:40}}
                        onDayPress={date =>{
                        setHopedate2(date.dateString)
                        setShowDayModal2(false)}}
                        minDate={today}
                        initialDate={today}
                        maxDate={"2023-03-31"}
                        hideExtraDays={true}/>
                </Modal>
                </>
        </ScrollView>
    )
}

const sty = StyleSheet. create ({
    Image: {
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        marginTop: 20,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: Height/2,
        padding:10,
    },
    title:{
        fontSize:20,
    },
    box:{
        backgroundColor:'skyblue',
        width: '100%',
        height:30,
    },
    reviewtitle:{
        backgroundColor:'pink',
        width: '100%',
        height:30,
    },
    button:{
        backgroundColor: 'yellow',
        width: 80,
        height:50,
    },
    timebutton:{
        width: 40,
        height:20,
        borderRadius:20,
        borderColor: 'black',
    },
    inActivetimebutton:{
        width: 40,
        height:20,
        borderRadius:20,
        backgroundColor: 'gray',

    },
    input:{
        paddingLeft:6,
        height:40,
        backgroundColor:'pink',
    },
    clubButton:{
        width: 150,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
    }

    
})


export default PublicFPosts;