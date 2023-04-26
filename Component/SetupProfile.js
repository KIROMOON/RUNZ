import { useNavigation, useRoute } from "@react-navigation/native";
import React,{useState} from "react";
import { Pressable, StyleSheet, View, Platform, Image } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { signOut } from "../lib/auth";
import { createUser } from "../lib/users";
import BorderedInput from "./BorderedInput";
import CustomButton from "./CustomButton";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import styles from "react-native-calendar/components/styles";
import { useUserContext } from "../contexts/UserContext";


function SetupProfile() {
    const [displayName, setDisplayName] = useState('');
    const Navigation = useNavigation();
    const {setUser} = useUserContext();
    const [response,setResponse] = useState(null);

    const {params} = useRoute();
    const {uid} = params || {};


    const onSubmit = () => {
        const user = {
            id:uid,
            displayName,
            photoURL:null,
        }
        createUser(user);
        setUser(user);
    };
    const onCancel = () => {
        signOut();
        Navigation.goBack();
    };
    const onSelectImage = () => {
        launchImageLibrary(
            {
                mediaType:'photo',
                maxWidth: 512,
                maxHeight:512,
                includeBase64: Platform.OS ==='android',
            },
            (res) => {
               if(res.didCancel){
                return;
               }
               setResponse(res);
            },
        );
    };

    return(
        <View style = {sty.block}>
            <Pressable onPress={onSelectImage}>
                <Image
                    style={sty.circle}
                    source={{uri:response?.assets[0]?.uri}}/>
            </Pressable>
            <View style={sty.form}>
                <BorderedInput
                    placeholder="닉네임"
                    value={displayName}
                    onChangeText={setDisplayName}
                    onSubmiEditing={onSubmit}
                    returnKeyType="next"/>
                    <View style={sty.buttons}>
                        <CustomButton title="다음" onPress={onSubmit} hasMarginBottom />
                        <CustomButton title="취소" onPress={onCancel} theme="secondary"/>
                    </View>
            </View>
        </View>
    );
}

const sty = StyleSheet.create({
    block:{
        alignItems:'center',
        marginTop: 24,
        paddingHorizontal: 16,
        width: '100%',
    },
    circle: {
        backgroundColor: "#cdcdcd",
        borderRadius: 64,
        height: 128,
        width: 128,
    },
    form:{
        marginTop: 16,
        width: '100%',
    },
    buttons: {
        marginTop: 30,
    },
});

export default SetupProfile;