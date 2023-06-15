import { PermissionsAndroid, } from 'react-native';

export default async function requestCameraAndAudioPermission() {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        ])
        if (granted["android.permission.RECORD_AUDIO"] === PermissionsAndroid.RESULTS.GRANTED && granted["android.permission.CAMERA"]===PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera and record audio")
        }else{
            console.log("Permission was denied");
            
        }
    } catch (error) {
        console.log("Warning in permission ",error);
        
    }
}