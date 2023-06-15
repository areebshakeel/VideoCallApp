
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function VideoCall(): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>Video Call Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default VideoCall;

