import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import SearchScreenCard from '../components/SearchScreenCard'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    const [searchData, setSearchData] = useState(null);
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=random&key=AIzaSyCPvEKXX1zV6mFfYiwXA6LFc7BGL9bqTq8`)
            .then(data => data.json())
            .then(data => {
                setSearchData(data.items);
                // console.log(data.items);
            })
    }, [])
    return (
        <SafeAreaView>
            <Header />
            <ScrollView style={{ display: 'flex' }}>
                <FlatList
                    data={searchData}
                    renderItem={({ item }) => {
                        return <SearchScreenCard
                            videoId={item.id.videoId}
                            channel={item.snippet.channelTitle}
                            thumbnailURI={item.snippet.thumbnails.default.url}
                            title={item.snippet.title}
                        />
                    }}
                    keyExtractor={item => item.id.videoId}
                />
            </ScrollView>
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>

    );
}
