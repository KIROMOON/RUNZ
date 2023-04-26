import firestore from '@react-native-firebase/firestore'


const  facilityCollection = firestore().collection('facillities');


export function createFacility ({provider, photoURL, availableTime, lessonInfo, facillityInfo }){
    return facilityCollection.add({
        provider,
        photoURL,
        availableTime,
        lessonInfo,
        facillityInfo,
        createAt: firestore.FieldValue.serverTimestamp(),

    })
}