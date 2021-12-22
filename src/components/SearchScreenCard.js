import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function SearchScreenCard(props) {
    return (
        <View style={styles.searchScreenCardMain}>
            {/* <Text>this is card</Text> */}
            <Image
                source={{ uri: props.thumbnailURI }}
                style={{
                    height: 95,
                    width: 170
                }}
            />
            <View>
                <Text style={{
                    marginLeft: 15,
                    marginRight: 20,
                    fontSize: 16,
                }}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >{props.title}</Text>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                    marginTop: 3
                }}>{props.channel}</Text>
                {/* <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 3
                }}>
                    <Text style={{ marginRight: 10, marginLeft: 15 }}>1 year ago</Text>
                    <Text>10 M</Text>
                </View> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    searchScreenCardMain: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 180
    }
});
