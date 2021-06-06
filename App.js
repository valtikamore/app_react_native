import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';


export default function App() {
    return (
        <View style={styles.MainBlock}>
            <View style={[styles.box,{backgroundColor:'white',marginBottom:10,flex:2}]}></View>
            <View style={[styles.box,{backgroundColor:'red',marginBottom:10}]}></View>
            <View style={[styles.box,{backgroundColor:'white',marginBottom:10}]}></View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    MainBlock: {
      flex:1,
      flexDirection:'column-reverse'
    },
    box: {
        flex:1,
        backgroundColor:'lightyellow'
    }
   
});


/*<Lesson1/>*/
// Lesson2_1

