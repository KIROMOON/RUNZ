import React,{useState} from "react";
import { TextInput, SafeAreaView,View, ScrollView, Text, StyleSheet,Pressable, Modal} from "react-native";
import { Calendar } from "react-native-calendars";
import {format} from 'date-fns';
import { Picker } from "@react-native-picker/picker";
const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";


function VisitRequest(){
    const [showDayModal,setShowDayModal] = useState(false);
    const [showTimeModal,setShowTimeModal] = useState(false);
    const today = format(new Date(),'yyyy-MM-dd');
    const nowtime = new Date().getHours();
    const [selectTime,setSelectTime] = useState();
    const [Count, setCount] = useState(null);
    const [hopedate,setHopedate] = useState(today);
    state = {
        isFocused: false,
      };
    
    return(

        
        <SafeAreaView>
        <ScrollView>
            <View>
                <Text style={{fontSize:22}}> 방문알림</Text>
            </View>
            <View>
                <Text>회원기본정보</Text>
                <Text>닉네임</Text>
                <Text>이상헌</Text>
                <Text>010-1234-5678</Text>
            </View>
            <Pressable
                style={{ 
                    backgroundColor:'black',
                    borderRadius:10,
                    margin:40,
                    padding:10,
                    width:200,
                    alignItems: 'center',
                }}
                onPress={()=>setShowDayModal(true)}>
                <Text style={{color:'white',fontSize:22}}>방문일자</Text>
            </Pressable>

                {(showDayModal===true)?null:<Text>{hopedate} 방문 신청⭐️</Text>}

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

            {(hopedate === today)?
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
                    style={{
                                backgroundColor:'black',
                                borderRadius:10,
                                margin:40,
                                padding:10,
                                width:200,
                                alignItems: 'center',
                            }}
            >
                <Text  style={{color:'white',fontSize:22}}>인원</Text>
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
            <Text></Text>
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
                <Text  style={{color:'white',fontSize:22}}>이용할 요금제</Text>
            </Pressable>
            <Pressable
                style={{
                    backgroundColor:'#5FD5C2',
                    borderRadius:10,
                    margin:40,
                    padding:10,
                    width:200,
                    alignItems: 'center',}}>
                <Text  style={{color:'white',fontSize:22}}>방문하기📌</Text>

             </Pressable>
            <Modal visible={showDayModal} animationType="fade">
                <Calendar style={{borderRadius:10,elevation:4, margin:40}}
                onDayPress={date =>{
                    setHopedate(date.dateString)
                    setShowDayModal(false)}}
                    minDate={today}
                    initialDate={today}
                    maxDate={"2023-03-31"}
                    hideExtraDays={true}/>
            </Modal>
        </ScrollView>
        </SafeAreaView>
    );
}

const sty=StyleSheet.create({
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
});

export default VisitRequest;