import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import SearchScreenCard from '../components/SearchScreenCard';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react&key=AIzaSyCPvEKXX1zV6mFfYiwXA6LFc7BGL9bqTq8
export default function HomeScreen() {
    const [inputQuery, setInputQuery] = useState('');
    // const [searchData, setSearchData] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigatio = useNavigation();
    const dispatch = useDispatch();
    let searchData = useSelector(state => {
        // console.log("state");
        // console.log(state);
        return state
    });
    const searchQuery = () => {
        setLoader(true);
        // console.log('loader: ', loader);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputQuery}&key=AIzaSyCPvEKXX1zV6mFfYiwXA6LFc7BGL9bqTq8`)
            .then(data => data.json())
            .then(data => {
                // setSearchData(data.items);
                // console.log("api fetch");
                // console.log(data.items);
                dispatch({ type: "add", payload: data.items })
                // console.log('loader inside: ', loader);
                // console.log("searchData");
                // console.log(searchData);
                setTimeout(() => {
                    console.log('inside');
                    console.log(searchData);
                }, 3000);
                console.log("searchData");
                console.log(searchData);
                setLoader(false);
            })
    }
    let itemsNum = 1
    return (
        <View>
            {/* <Header /> */}
            <View style={styles.searchScreenHeader}>{/* header */}
                <Ionicons name="arrow-back" onPress={() => navigatio.goBack()} style={{ padding: 10 }} size={32} color="black" />
                <TextInput value={inputQuery} style={{
                    elevation: 5,
                    width: 300,
                    backgroundColor: '#A1A1A12D',
                    height: '80%',
                    marginTop: 5,
                    padding: 10,
                    fontSize: 20
                }}
                    onChangeText={setInputQuery}
                />

                <Ionicons name="search" onPress={() => searchQuery()} style={{ padding: 10 }} size={30} color="black" />
            </View>
            {/* <View> */}
            {
                searchData != undefined && !loader && searchData.length != 0 ?
                    <View>
                        {/* <SearchScreenCard /> */}
                        <SafeAreaView>
                            <FlatList
                                data={searchData}
                                renderItem={({ item }) => {
                                    // console.log('--------------item number ', itemsNum);
                                    // itemsNum += 1
                                    // console.log(item);
                                    // return <Text>text</Text>
                                    return <SearchScreenCard
                                        keyExtractor={item.id.videoId}
                                        videoId={item.id.videoId}
                                        channel={item.snippet.channelTitle}
                                        thumbnailURI={item.snippet.thumbnails.default.url}
                                        title={item.snippet.title}
                                    />
                                }}
                                keyExtractor={item => item.id.videoId}
                            />
                        </SafeAreaView>
                    </View>
                    : loader ? <ActivityIndicator size="large" color="#0026FF" /> : null
            }

            {/* </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    searchScreenHeader: {
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})