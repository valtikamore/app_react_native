import React from 'react';
import {StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';


export default function App() {
    const handlePress = () => Alert.alert('0101010', 'main message', [
        {test: 'button text', onPress: () => console.log('tes')},
        {test: 'button text', onPress: () => console.log('eeee')},
    ])
    const handlePress2 = () => Alert.prompt('0101010', 'main message', [
        {test: 'button text', onPress: () => console.log('tes')},
        {test: 'button text', onPress: () => console.log('eeee')},
    ])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>hello {'\n'}friend</Text>
            <Text style={styles.text}>hello {'\n'}friend</Text>
            <Button title="Press me" onPress={handlePress}/>
            <Button title="Press me" onPress={handlePress2} style={{marginBottom: 20, display: 'block'}}/>
            <TouchableHighlight onPress={handlePress} style={{marginBottom: 20}}>
                <Image blurRadius={2} source={{
                    width: 200,
                    height: 200,
                    uri: 'https://picsum.photos/200/300'
                }}/>
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={handlePress}>
                <Image blurRadius={2} source={{
                    width: 200,
                    height: 200,
                    uri: 'https://picsum.photos/200/300'
                }}/>
            </TouchableWithoutFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white'
    }
});
