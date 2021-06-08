import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Header from "./components/header";


export default function App() {

    const [items, setItems] = useState([
        {text:'Hello',id:1},
        {text:'My ',id:2},
        {text:'Dear',id:3},
        {text:'friend',id:4},
    ]);

    return (
        <View style={styles.MainBlock}>
            <Header/>
            <View>
                <FlatList data={items} renderItem={({item}) => (
                    <Text>{item.text}</Text>
                )}>

                </FlatList>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    MainBlock: {
        flex: 1,
    },

});


/*<Lesson1/>*/
// Lesson2_1

