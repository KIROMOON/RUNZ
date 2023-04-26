import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;


function HomeAd() {
    return(
    <View style = {styles.container}>
        <TouchableOpacity
            activeOpacity={0.5}>
            <Image source={require('../Image/BottomTab/ad.png')}
                    resizeMode = 'contain'
                    style={{
                        width:(Width-50),
                        height:128,
                }}
            />
         </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'stretch',
        alignItems: 'center',
    }
})


export default HomeAd;