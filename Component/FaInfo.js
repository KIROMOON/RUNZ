import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';


function FaInfo({explanation}){
    return(
    <ScrollView style={styles.Box}>
      <Text>{explanation}</Text>
    </ScrollView>
    );
}



const styles = StyleSheet. create ({
    Box:{
        backgroundColor:"#5ED3D4",
        width: '100%',
    },

})

export default FaInfo;


