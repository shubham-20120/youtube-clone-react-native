import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
export default function Header() {
    const navigation = useNavigation();
    // const dispatch = useDispatch()
    return (
        <View style={styles.main}>
            <View style={styles.headerLeft}>
                <Entypo name="youtube" size={30} color="red" />
                <Text style={{ fontSize: 20 }}>YouTube</Text>
            </View>
            <View style={styles.headerRight}>
                <MaterialIcons name="video-call" size={30} color="black" />
                <Ionicons name="search" onPress={() => navigation.navigate("search")} size={30} color="black" />
                <FontAwesome name="user-circle" size={30} color="black" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'cyan',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        width: 130,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'yellow',
        width: 120
    }
});
