import React, {useRef, useState} from "react";
import {  Alert, Keyboard, KeyboardAvoidingView, Platform,View,StyleSheet, Text,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BorderedInput from "../Component/BorderedInput";
import CustomButton from "../Component/CustomButton";
import SignButtons from "../Component/SignButtons";
import SignForm from "../Component/SignForm";
import { signIn, signUp } from "../lib/auth";
import { getUser } from "../lib/users";
import {useUserContext} from "../contexts/UserContext";


function SignInScreen({navigation, route}){
    const {isSignUp} = route.params ?? {};
    const [form, setForm] = useState({
        email:'',
        password:'',
        confirmPassword:'',
    });

    const [loading,setLoading] = useState();
    const {setUser} = useUserContext();
    
    const createChangeTextHandler =  (name) =>(value) =>{
        setForm({...form, [name]: value});
    };

    const onSubmit = async() => {
        Keyboard.dismiss();
        const {email, password,confirmPassword} = form;

        if(isSignUp && password !== confirmPassword){
            Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
            console.log({password,confirmPassword});
            return;
        }

        const info = {email,password};
        setLoading(true);
        try{
            const {user} = isSignUp? await signUp(info) :await signIn(info);
            const profile = await getUser(user.uid);
            if(!profile){
                navigation.navigate("Welcome",{uid: user.uid});

            }else{
                setUser(profile);
            }
        }catch(e) {
            const messages = {
                'auth/email-already-in-use': '이미 가입된 이메일입니다. ',
                'auth/wrong-password':'잘못된 비밀번호입니다.',
                'auth/users-not-found':'존재하지 않는 계정입니다',
                'auth/invalid-email':'유효하지 않은 이메일 주소입니다',
            };
            
             const msg = messages[e.code] ?? `${isSignUp ? '가입' : '로그인'} 실패`;
            Alert.alert('실패',msg);
        }finally {
            setLoading(false);
        }
    }

   
    return(
        <KeyboardAvoidingView
            style ={{flex:1,backgroundColor: '#31d3c3',}}>
            <SafeAreaView style={{ flex:1, backgroundColor: '#31d3c3',alignItems:'center',justifyContent:'center'}}>
                <Image
                                    source={require('../Image/BottomTab/top_rogo.png')}
                                    resizeMode = 'contain'
                                    style={{
                                        width: 150,
                                        height:150,
                                        alignItems:'center',textAlign:'center', justifyContent:'center'
                                    }}/>
                <View style={styles.form}>
                    <SignForm
                        isSignUp = {isSignUp}
                        onSubmit ={onSubmit}
                        form ={form}
                        createChangeTextHandler = {createChangeTextHandler}/>
                    <SignButtons isSignUp={isSignUp} onSubmit = {onSubmit} loading={loading}/>    
                </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    form: { marginTop:10,
            width: '100%',
            paddingHorizontal: 50,
          },
    keyboardAvoidingView: {
        flex:2,
    },
});
export default SignInScreen;