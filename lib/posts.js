import firestore from '@react-native-firebase/firestore';
import { id } from 'date-fns/locale';

const postsCollection = firestore().collection('posts');

export function createPost({photoURL, description}){
    return postsCollection.add({
        photoURL, description,
        createdAt:firestore.FieldValue.serverTimestamp(),
    });
}

export async function getPost(){
 const snapshot= await postsCollection.get();
 const posts=snapshot.docs.map((doc) => ({
    id:doc.id,
    ...doc.data(),
 }));
 return posts;
}