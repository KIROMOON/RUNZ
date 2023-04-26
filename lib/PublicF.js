import firestore from '@react-native-firebase/firestore';
import { id } from 'date-fns/locale';

const PublicFCollection = firestore().collection('PublicF');

export function createPublicF({photoURL, explanation, lessonExplanation, name}){
    return PublicFCollection.add({
        photoURL, explanation, lessonExplanation, name,
        createdAt:firestore.FieldValue.serverTimestamp(),
    });
}

export async function getPublicF(){
 const snapshot= await PublicFCollection.get();
 const PublicList=snapshot.docs.map((doc) => ({
    id:doc.id,
    ...doc.data(),
 }));
 return PublicList;
}