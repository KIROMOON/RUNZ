import {useRoute} from '@react-navigation/native'
import React from 'react'
import {ScrollView, StyleSheet} from 'react-native';
import PublicFPosts from '../Component/PublicFPosts';

function FacilityScreen() {
    const route = useRoute();
    const {post} = route.params;

    return(
        <PublicFPosts
            photoURL={post.photoURL}
            name={post.name}
            explanation={post.explanation}
            lessonExplanation={post.lessonExplanation}/>
        
    );
}

export default FacilityScreen;