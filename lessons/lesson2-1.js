import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Lesson2_1 = () => {
    return (
        <View>
            <Text style={styles.text}>ffff</Text>
            <View style={styles.box}>
                <Text>
                    Sobaka
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    text: {
        color: 'white'
    },
    box: {
        backgroundColor: 'red',
        width:'50%',
        height:222,
        opacity:0.6,
        borderColor:'black',
        borderWidth:2,
        borderStyle:'dashed',
        position:'absolute',
        left:Platform.OS === 'android' && 200
    }
});

export default Lesson2

const styles = StyleSheet.create({})
