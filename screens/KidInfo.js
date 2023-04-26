import react, {useState} from "react";
import {TouchableOpacity, Dimensions, ScrollView,StyleSheet, Pressable, View, SafeAreaView, Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {format} from 'date-fns';
import { Calendar } from "react-native-calendars";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

function KidInfo(){
    const [visible,setVisible] = useState('이용');
    const [showdayModal,setShowdayModal] = useState(false);
    const today= format(new Date(),'yyyy-MM-dd');
    const [hopedate,setHopedate] = useState(today);
    return(
        <ScrollView style = {sty.container}>
            <SafeAreaView>
                <View style = {sty.image}>
                    <Text>유소년상세사진</Text>
                </View>
            </SafeAreaView>
            <View style = {sty.filterContainer}>
                <TouchableOpacity
                    style = {sty.filterbutton}
                    onPress = {() =>setVisible('이용')}>
                    <Text style ={{textAlign:'center', color:'#F2F2F2',}}>이용/강습</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {sty.filterbutton}
                    onPress = {() =>setVisible('대관')}>
                    <Text style ={{textAlign:'center', color:'#F2F2F2',}}>대관&대여</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {sty.filterbutton}
                    onPress = {() =>setVisible('모임')}>
                    <Text style ={{textAlign:'center', color:'#F2F2F2',}}>질문&후기</Text>
                </TouchableOpacity>
            </View>
            {(visible === '이용')?
                <View>
                    <Text>
                        시설명
                    </Text>
                    <Text>
                        주소
                    </Text>
                    <Text>
                        연락처
                    </Text>
                    <Text>
                        시설명
                    </Text>
                    <Text>
                        이용료
                    </Text>
                    <Text>
                        편의시설
                    </Text>

                </View>
            :null}
            {(visible === '대관')?
                <View>
                     <Calendar 
                        style={{borderRadius:10,elevation:4, margin:40}}
                        onDayPress={date =>{
                        setHopedate(date.dateString)}}
                        minDate={today}
                        initialDate={today}
                        maxDate={"2023-03-31"}
                        hideExtraDays={true}/>
                    <View style = {sty.box}>
                        <Text style={{fontSize:20,}}>{hopedate}</Text>
                    </View>
                    <View style = {sty.box}>
                        <Text style={{fontSize:20,}}> 대관가능시간</Text>
                    </View>
                    <View style = {sty.box}>
                        <Text style={{fontSize:20,}}> 대관인원</Text>
                    </View>

                    <Pressable style = {sty.submitbutton}>
                    <Text style={{fontSize:20,}}>문의하기 </Text>
                    </Pressable>
                </View>
            :null}
        </ScrollView>
    );
}

const sty = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginLeft:20,
        marginRight:20,
        marginBottom: 20,
    },

    image:{
        alignItems:'center',
        borderColor:'#31d3c3',
        borderWidth:0,
        marginTop: 20,
        borderRadius: 30,
        marginRight:40,
        width: Width-40,
        height: Height/2,
        padding:10,
        backgroundColor: 'skyblue'
    },

    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    filterbutton:{
        backgroundColor:'gray',
        borderRadius: 10,
        width: 100,
        heights: 40,
    },
    box:{
        backgroundColor: 'skyblue',
        width: '100%',
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    submitbutton:{
        backgroundColor: 'pink',
        width: '100%',
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    }


})

export default KidInfo;