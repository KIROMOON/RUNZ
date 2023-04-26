import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FloatingClubButton() {
    const navigation = useNavigation();
    return(
        <View styles={sty.wrapper}>
            <Pressable
                style={({pressed})=>[
                    sty.button,
                    Platform.OS === 'ios' && {
                        opacity: pressed? 0.6:1,
                    },
                ]}
                android_ripple ={{color:'white'}}
                onPress={()=> navigation.navigate("ClubAddScreen")}
                >
            </Pressable>
        </View>
    );
}

const sty = StyleSheet.create({
    wrapper:{
        position:'absolute',
        bottom:16,
        right:30,
        width:56,
        height:56,
        borderRadius:28,
        shadowColor:'#4d4d4d',
        shadowOffset: {width:0,height:4},
        shadowOpacity:0.3,
        shadowRadius: 4,
        elevation: 5,
        overflow: Platform.select({android:'hidden'}),
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor:"#009688",
        justifyContent:"center",
        alignItems:'center',
    }
});


export default FloatingClubButton;
