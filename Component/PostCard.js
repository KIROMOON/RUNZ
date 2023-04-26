import React, {useMemo} from 'react';
import {View,StyleSheet, Text, Image, Pressable} from 'react-native';
import styles from 'react-native-calendar/components/styles';

function PostCard({createdAt,description, photoURL}) {
    const date = useMemo(
        () => (createdAt ? new Date(createdAt._seconds*1000) : new Date()),
        [createdAt],
    );
    return(
        <Pressable>
            <View style = {sty.block}>
                    <Image
                        source={{uri:photoURL}}
                        style={sty.image}/>
                    <View style={sty.paddingBlock}>
                        <Text style={sty.description}>{description}</Text>
                        <Text date={date} style={sty.date}>
                            {date.toLocaleString()}
                        </Text>
                    </View>
            </View>
        </Pressable>
    );
}

const sty = StyleSheet.create ({
    block:{
        paddingTop: 16,
        paddingBottom: 16,
    },
    image:{
        backgroundColor:'#bdbdbd',
        width:'100%',
        aspectRatio: 1,
        marginBottom:16,
    },
    paddingBlock:{
        paddingHorizontal: 16,
    },
    description:{
        fontsize: 16,
        lineHeight:24,
        marginBottom:8,
    },
    date:{
        color:'#757575',
        fontSize:12,
        lineHeight:18,
    }
})

export default PostCard;