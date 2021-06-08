
import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function Lesson3() {
    return (
        <View style={styles.MainBlock}>
            <View style={[styles.box, {backgroundColor: 'white', marginBottom: 10}]}></View>

            <View style={[styles.box, {backgroundColor: 'red', marginBottom: 10}]}>
                <View>
                    <Text style={styles.text}>Natali</Text>
                </View>
            </View>
            <View style={[styles.box, {backgroundColor: 'white', marginBottom: 10}]}></View>
        </View>

    );
}
const styles = StyleSheet.create({
    MainBlock: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    text: {
        fontSize: 50,
    },
    box: {
        flex: 1,
        backgroundColor: 'lightyellow'
    }

});
