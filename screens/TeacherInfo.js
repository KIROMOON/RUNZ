import react, {useState} from "react";
import {Modal, TextInput,TouchableOpacity,ScrollView, StyleSheet,SafeAreaView,View, Pressable, Text} from 'react-native';
import {Dimensions} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { format } from "date-fns";
import { weeksToDays } from "date-fns";
import { Calendar } from "react-native-calendars";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

function TeacherInfo() {
    const today = format(new Date(),'yyyy-MM-dd');
    const [ShowDayModal1,setShowDayModal1] = useState(false);

    const [Count, setCount] = useState(null);
    const [showProfile,setShowProfile] = useState('Profile');
    const [hopedate1,setHopedate1] = useState(today);
    const [selectTime,setSelectTime] = useState();


    return(
        <ScrollView style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
            <SafeAreaView>
                <View  style={sty.Image}>
                <Text>리얼운동영상</Text>
                </View>
            </SafeAreaView>
            <View style={{marginTop:10,flexDirection: 'row', alignItems:'center',justifyContent: 'space-between', padding:10}}>      
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10, width: wp('40%') ,heights:hp('15%%'),}}
                onPress = {() =>setShowProfile('Profile')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>프로필</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{backgroundColor:'gray', borderRadius: 10, width: wp('40%%') ,heights:hp('15%'),}}
                onPress = {() =>setShowProfile('Request')}>
                 <Text style ={{textAlign:'center', color:'#F2F2F2',}}>요청</Text>
            </TouchableOpacity>
            </View>
            {(showProfile === 'Profile')?
            <View>
                <Text>프로필: 리쌤/20년 경력/시설보유</Text>
                <Text>경력: 10 - 20년 XXX 클럽/중학교 선수단</Text>
                <Text>자격증: 생활지도사 자격증</Text>
                <Text>활동지역: 부산광역시 연제구</Text>
                <Text>가격 및 시간: 1회당 1만원 /10분 월 10회</Text>
            </View>:
            <View>
                <View style = {sty.curiculum}>
                    <Text>커리큘럼</Text>
                </View>
                <View>
                <Pressable
                    style={{
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor:'skyblue',
                            borderRadius:30,
                            marginTop: 10,
                            padding:10,
                            width:150,
                            height: 50,
                            alignItems: 'center',
                        }} >
                    <Text  style={{color:'white',fontSize:22}}>강습리스트</Text>
                </Pressable>
                <Pressable
                    style={{
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor:'skyblue',
                            borderRadius:30,
                            marginTop: 10,
                            padding:10,
                            width:150,
                            height: 50,
                            alignItems: 'center',
                        }} >
                    <Text  style={{color:'white',fontSize:22}}>강습인원</Text>
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
                    placeholderTextColor={'white'}/>
                {(Count===null)?null: <Text>총 {Count}명 방문 예정⭐️</Text>}
                <Pressable
                    style={{
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor:'skyblue',
                            borderRadius:30,
                            marginTop: 10,
                            padding:10,
                            width:150,
                            height: 50,
                            alignItems: 'center',
                        }} 
                        onPress={()=>setShowDayModal1(true)}>
                    <Text  style={{color:'white',fontSize:22}}>방문일자</Text>
                </Pressable>
                    {(ShowDayModal1===true)?null:<Text>{hopedate1} 방문 신청⭐️</Text>}
                <Pressable
                    style={{
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor:'skyblue',
                            borderRadius:30,
                            marginTop: 10,
                            padding:10,
                            width:150,
                            height: 50,
                            alignItems: 'center',
                        }} >
                    <Text  style={{color:'white',fontSize:22}}>강습시간</Text>
                </Pressable>
                <Pressable
                    style={{
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor:'blue',
                            borderRadius:30,
                            marginTop: 10,
                            padding:10,
                            width:150,
                            height: 50,
                            alignItems: 'center',
                        }} >
                    <Text  style={{color:'white',fontSize:22}}>요청하기👉</Text>
                </Pressable>


                </View>
                <Modal visible={ShowDayModal1} animationType="fade">
                    <Calendar
                        style={{borderRadius:10,elevation:4, margin:40}}
                        onDayPress={date =>{
                                            setHopedate1(date.dateString)
                                            setShowDayModal1(false)}}
                                            minDate={today}
                                            initialDate={today}
                                            maxDate={"2023-03-31"}
                                            hideExtraDays={true}/>
                </Modal>
            </View>
            }
        </ScrollView>
    );


}

 const sty = StyleSheet.create({
    Image:{
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        marginTop: 20,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: Height/2,
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

 })
export default TeacherInfo;