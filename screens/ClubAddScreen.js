import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React, {useState, useCallback} from "react";
import { View, Pressable, StyleSheet, Platform, Text,ActionSheetIOS, SafeAreaView,Image} from 'react-native';
import styles from "react-native-calendar/components/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import UploadModeModal from "../Component/UploadModeModal";
import { createClubs } from "../lib/Clubs";
import storage from '@react-native-firebase/storage'
import {v4} from 'uuid';

const imagePickerOption = {
    mediaType:'photo',
    maxWidth:768,
    maxHeight:768,
    includeBase64: Platform.OS === 'android',
}

 function ClubAddScreen() {
    const [modalVisible,setModalVisible] = useState(false);
    const [response,setResponse] = useState(null);
    const [name, setName] = useState('');
    const [sport, setSport] = useState('');
    const [information,setInformation] = useState('');

    const onPickImage = (res) => {
        if(res.didCancel || !res) {
            return;
        }
        setResponse(res);
    };
    const onLaunchCamera = () => {
        launchCamera(imagePickerOption,onPickImage);
    };
    const onLaunchImageLibrary = () => {
        launchImageLibrary(imagePickerOption,onPickImage);
    }
    const onPress = () => {
        if(Platform.OS === 'android') {
            setModalVisible(true);
            return;
        }
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options:['카메라로 촬영하기', '사진 선택하기', '취소'],
                cancelButtonIndex:2,
            },
            (buttonIndex) => {
                if (buttonIndex ===0) {
                    onLaunchCamera();
                } else if (buttonIndex === 1) {
                    onLaunchImageLibrary();
                }
            },
        );
    };
    const onSubmit =useCallback(async() =>{

        if(response){ 
            const asset = response.assets[0];
            const extension = asset.fileName.split('.').pop();
            const reference = storage().ref(`/photo/${v4()}.${extension}`);
            if (Platform.OS === 'android') {
                await reference.putString(asset.base64, 'base64', {
                    contentType:asset.type,
                });
            }else{
                await reference.putFile(asset.uri);}

      const photoURL = response? await reference.getDownloadURL():null;
      await createClubs({name, sport, information, photoURL});
        }
    },[response,name,sport, information]);

    return(
        <>
        <ScrollView style = {sty.block}>
            <View style = {sty.title}>
                <Text style={{fontSize:30}}>[모임 만들기]</Text>
            </View>
            <Pressable
                android_ripple=
                    {{color: "#ffffff",}}
                style={sty.imagebox}
                onPress={onPress}>
                {response?  <Image
                                style={sty.image}
                                source = {{uri: response?.assets[0]?.uri}}/>
                            :<Text style={{fontSize:15,}}>사진을 선택해주세요.</Text>}
            </Pressable>
            <View style = {sty.textinput}>
                <Text style = {sty.text}>모임명: </Text>
                <TextInput
                    style={sty.input}
                    value={name}
                    onChangeText={setName}/>
            </View>
            <View style = {sty.textinput}>
                <Text style = {sty.text}>종목</Text>
                <TextInput
                    style={sty.input}
                    value={sport}
                    onChangeText={setSport}/>
            </View>
            <View style = {sty.textinput}>
                <Text style = {sty.text}>모임소개:</Text>
                <TextInput
                    style = {sty.detailtextinput}
                    multiline
                    textAlignVertical='top'
                    value={information}
                    onChangeText={setInformation}/>
            </View>
            <Pressable
                android_ripple={{color: "yellow",}}
                style={sty.circle}
                onPress={onSubmit}>
                <Text>제출</Text>
            </Pressable>

        </ScrollView>
        <UploadModeModal
            visible={modalVisible}
            onClose={()=>setModalVisible(false)}
            onLaunchCamera={onLaunchCamera}
            onLaunchImageLibrary = {onLaunchImageLibrary}/>
        </>
    
    );
 }

 const sty = StyleSheet.create({
    title:{
        width:'100%',
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    imagebox:{
        width:'100%',
        height:150,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#bbb',
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:50,

    },
    image:{
        width:'100%',
        height:150,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#bbb',
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:50,
    },
    input: {
        height: 40,
        width:200,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginBottom:20,
    },
    textinput:{
        flexDirection:"row",
    },
    detailtextinput: {
        height: 200,
        width:250,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        marginTop:10,
        marginBottom:20,
    },
    circle:{
        backgroundColor:'#6200ee',
        borderRadius:4,
        height: 50,
        width: 70,
        alignItems: 'center',
        justifyContent:'center',
    },


});

 export default ClubAddScreen;