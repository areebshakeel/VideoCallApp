
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function HomeScreen(props): JSX.Element {
    console.log("Props -->> ",props.navigation);
    
    const handleButton = ()=>{
        props.navigation.navigate("Video")
    }
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={handleButton} style={styles.buttonStyle} >
                <Text>Start a Call</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonStyle:{
        backgroundColor:"green",
        width:"80%",
        alignSelf:"center",
        padding:10,
        alignItems:"center",
        borderRadius:10,
        position:"absolute",
        bottom:50
    }
});
export default HomeScreen;

