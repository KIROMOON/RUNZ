import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import {StyleSheet, Modal, View, Pressable, Text} from 'react-native';

function UploadModeModal({visible, onClose, onLaunchCamera, onLaunchImageLibrary}) {
    return(
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}>
                <Pressable style = {sty.background} onPress={onClose}>
                    <View style = {sty.whiteBox}>
                        <Pressable
                            style={sty.actionButton}
                            android_ripple={{color:'#eee'}}
                            onPress={()=> {
                                onLaunchCamera();
                                onClose();
                            }}>
                            <Text style = {sty.actionText}>카메라로 촬영하기</Text>
                        </Pressable>
                        <Pressable
                            style={sty.actionButton}
                            android_ripple={{color:'#eee'}}
                            onPress={()=> {
                                onLaunchImageLibrary();
                                onClose();
                            }}>
                            <Text style = {sty.actionText}>사진선택하기</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
    );
}

const sty = StyleSheet.create({
    background:{
        backgroundColor:'rgba(0,0,0,0.6)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    whiteBox:{
        width:300,
        backgroundColor:'white',
        borderRadius:4,
        elevation:2,
    },
    actionButton: {
        padding: 16,
        flexDirection:'row',
        alignItems:'center',
    },
    actionText:{
        fontSize:16,
    }
});

export default UploadModeModal;