import firestore from '@react-native-firebase/firestore';

const clubsCollection = firestore().collection('clubs');

export function createClubs({name,sport, information, photoURL}){
    return clubsCollection.add({
        name,
        sport,
        information,
        photoURL,
        createdAt:firestore.FieldValue.serverTimestamp(),
    });
}

export async function getClubs(){
    const snapshot = await clubsCollection.get();
    const clubs = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),    
    }));
    return clubs
}