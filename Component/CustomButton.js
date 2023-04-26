import React from "react";
import{StyleSheet,View,Pressable, Text, Platform} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom,theme}){
    const isPrimary = theme ==='primary';

    return(
        <View style={[styles.block, hasMarginBottom && styles.margin]}>
            <Pressable
                onPress={onPress}
                style={({pressed})=>[
                    styles.wrapper,
                    isPrimary && styles.primaryWrapper,
                    Platform.OS ==='ios' &&pressed && {opacity: 0.5} ,
                ]}
                android_ripple ={{
                    color : isPrimary? "#31d3c3":'white'
                }}>
                <Text style={[
                    styles.text,
                    isPrimary ? styles.primaryText: styles.secondaryText]}>
                        {title}
                </Text>
            </Pressable>
        </View>
    );
}

CustomButton.defaultProps={
    theme:'primary',
};


const styles = StyleSheet.create({
    overflow: {
        borderRadius:4,
        overflow:"hidden",
    },
    wrapper: {
        borderRadius:4,
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    primaryWrapper :{
        backgroundColor: 'green'
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color:'white',
    },

    primaryText: {
        color:'white',
    },

    secondaryText: {
        color:'31d3c3',
    },


    margin: {
        marginBottom: 8,
    }
})
export default CustomButton;