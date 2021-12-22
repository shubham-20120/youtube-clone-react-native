import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function Card() {
    return (
        <View style={styles.cardMain}>
            {/* <Text>This is card</Text> */}
            <Image
                source={{ uri: "https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format" }}
                style={{
                    height: 200,
                    width: "100%"
                }}
            />
            <View style={styles.cardLower}>
                <Image
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    style={{
                        height: 55,
                        width: 55,
                        borderRadius: 50,
                        marginTop: 5
                    }}
                />
                <View>
                    <Text
                        style={{ fontSize: 20, marginLeft: 10, marginRight: 50 }}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >This is heading of the video, This is heading of the video, This is heading of the video, simple UI youtube abcd efgh ijkl</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingLeft: 10
                    }}>
                        <Text
                            style={{ fontSize: 15 }}
                        >This is channel's name</Text>
                        <Text
                            style={{ marginLeft: 20, fontSize: 15 }}
                        >10M</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cardMain: {
        height: 280,
        width: '100%',
        // backgroundColor: 'cyan',
        // margin: 10,
        marginBottom: 10,
        elevation: 5
    },
    cardLower: {
        // backgroundColor: 'yellow',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    }
})