import React, { useEffect,useState } from 'react';
import {Pressable, ScrollView, View, Text,StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingFeedWriteButton from '../Component/FloatingFeedWriteButton';
import { useNavigation } from "@react-navigation/native";
import PostCard from '../Component/PostCard';
import { getPost } from "../lib/posts";

function  FeedScreen(){
    const navigation = useNavigation();
    const [posts,setPosts] = useState(null);
    const [visible, setVisible] =useState(null);

    useEffect(()=>{ 
        getPost().then(setPosts);
    },[]);

   return(
        <SafeAreaView sty={sty.block}>
            <View style={sty.filterbox}>
                <Pressable
                    style={sty.filter}
                    onPress = {() =>setVisible('전체')}
                    >
                    <Text>전체</Text>

                </Pressable>
                <Pressable
                    style={sty.filter}
                    onPress = {() =>setVisible('인기')}
                    >
                    <Text>인기</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}
                    onPress = {() =>setVisible('종목')}
                    >
                    <Text>종목</Text>
                </Pressable>
                <Pressable
                    style={sty.filter}
                    onPress = {() =>setVisible('지역')}
                    >
                    <Text>지역</Text>
                </Pressable>

                <Pressable
                    style={sty.filter}
                    onPress = {() =>setVisible('운친찾기')}
                    >
                    <Text>운친찾기</Text>
                </Pressable>
                <Pressable
                style={sty.writebutton}
                onPress = {() =>navigation.navigate("FeedUploadScreen")}
                >
                <Text>글쓰기</Text>
            </Pressable>
            </View>
            {(visible === null)? <FlatList
                        data={posts}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}/> :null}
            {(visible === '전체')?<FlatList
                                     data={posts}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id}/>:null}
            {(visible === '인기')? null:null}
            {(visible === '종목')? null:null}
            {(visible === '지역')? null:null}
            {(visible === '운친찾기')? null:null}
        </SafeAreaView>
   );
}

const renderItem =({item}) => (
    <PostCard
        createdAt={item.createdAt}
        description={item.description}
        photoURL={item.photoURL}/>
);

const sty=StyleSheet.create({
    block:{
        flex:1,},
    writebutton: {
        backgroundColor:'skyblue',
        height:30,
        width:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,

    },
    filterbox:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    filter:{
        width: 60,
        height: 30,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});


export default FeedScreen;
