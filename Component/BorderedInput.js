import React from "react";
import { StyleSheet,TextInput } from "react-native";


function BorderedInput({hasMarginBottom, ...rest}, ref){
    return <TextInput
            style={[styles.input, hasMarginBottom && styles.margin]}
            ref={ref}
            {...rest}/>;

}

const styles = StyleSheet.create({
    input: {
        borderColor:'#31d3c3',
        borderWidth:1,
        paddingHorizontal: 16,
        borderRadius:30,
        height: 48,
        backgroundColor:'white',
    },
    margin: {
        marginBottom:10,    }
        ,

});
export default React.forwardRef(BorderedInput);