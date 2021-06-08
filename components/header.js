import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function Header() {
    return (
        <View style={styles.MainBlock}>
                <Text style={styles.header}>todolist</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    MainBlock: {
      padding:22,
        backgroundColor: 'lightyellow'
    },
    header: {
        fontSize: 22,
        color:'red',
        textAlign:'center'
    },

});
