import { Text, Image, View, ScrollView, ImageBackground, ActivityIndicator, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect } from 'expo-router';
import { useFonts, BarlowSemiCondensed_600SemiBold } from '@expo-google-fonts/barlow-semi-condensed';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { WebView } from "react-native-webview";
import type { WebView as WebViewType } from "react-native-webview";

const { width, height } = Dimensions.get('window');

const Map = () => {
    const webViewRef = useRef<WebViewType>(null);
    const router = useRouter();

    useFocusEffect(
        React.useCallback(() => {
            if (webViewRef.current) {
            webViewRef.current.reload();
            }
        }, [])
    );

    let [fontsLoaded] = useFonts({
        BarlowSemiCondensed_600SemiBold,
    });

    if (!fontsLoaded) {
        return (
            <SafeAreaProvider className="flex-1 justify-center items-center bg-white">
                <SafeAreaView className="flex-row bg-[#0d0d59] h-28 z-30 pt-28 w-full">
                    <ActivityIndicator size="large" color="#0d0d59" />
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

    return (
        <SafeAreaProvider className="flex-col">
            <SafeAreaView className="flex-row bg-[#0d0d59] h-28 z-30 pt-28">
            <Image
                source={require("@/assets/images/whs-logo.png")}
                className="w-32 h-32 relative bottom-28 left-11"
            />
            <SafeAreaView className="w-48 h-28 bottom-36 left-14 items-start">
                <Text className="text-white font-barlow-semibold">MY VOICE</Text>
                <Text className="text-white font-barlow-semibold">          MY CHOICE</Text>
                <Text className="text-white font-barlow-semibold">                    MY FUTURE</Text>
            </SafeAreaView>
            </SafeAreaView> 

            <View className="justify-center items-center bg-whs-gold ">
                <TouchableOpacity 
                    className="w-10 h-10 left self-start pt-3 z-30"
                    onPress={() => router.push("/")}
                >
                    <Image 
                    source={require('@/assets/images/back.png')} 
                    style={{
                        tintColor: '#0d0d59'
                    }} 
                    className="size-10 self-center"
                    />
                </TouchableOpacity>
                <Text
                    className="z-20 font-barlow-semibold text-white w-full bg-whs-gold text-center relative bottom-5"
                >Campus Map 2025-2026
                </Text>
            </View>
            <View
                className="bg-white w-[100vw] h-[75%] justify-center items-center "
            >
                <ScrollView
                    className="w-[100vw] h-96 bg-white pt-5 flex-1 flex-col"
                    style={{ height: height * 0.75 }}
                >
                    
                    <Image
                        source={require('@/assets/images/whs-campus-map.png')} 
                        className="self-center h-[35vh] w-[95vw] object-contain block z-10 m-[2.5vw]"
                        resizeMode="cover"
                    />
                    <Text
                        className="z-30 font-barlow-semibold text-whs-blue w-full bg-gray-100 text-center relative p-5"
                    >Northern Campus Map
                    </Text>
                    <View
                        className="h-[35vh] w-[95vw] z-30 bg-white justify-center items-center self-center overflow-hidden pb-32 m-[2.5vw]"
                    >
                        <Image
                            source={require('@/assets/images/whs-campus-map.png')} 
                            className="object-contain object-fit block z-10 transform scale-[0.7] translate-x-[13rem] translate-y-[-2rem] "
                        />
                    </View>
                    <Text
                        className="z-30 font-barlow-semibold text-whs-blue w-full bg-gray-100 text-center relative p-5"
                    >Central Campus Map
                    </Text>
                    <View
                        className="h-[35vh] w-[95vw] z-30 bg-white justify-center items-center self-center overflow-hidden pb-32 m-[2.5vw]"
                    >
                        <Image
                            source={require('@/assets/images/whs-campus-map.png')} 
                            className="object-contain object-fit block z-10 transform scale-[0.7] translate-y-[-2rem] "
                        />
                    </View>
                    <Text
                        className="z-30 font-barlow-semibold text-whs-blue w-full bg-gray-100 text-center relative p-5"
                    >Southern Campus Map
                    </Text>
                    <View
                        className="h-[35vh] w-[95vw] z-30 bg-gray-600 justify-center items-center self-center overflow-hidden pb-32 m-[2.5vw]"
                    >
                        <Image
                            source={require('@/assets/images/whs-campus-map.png')} 
                            className="object-contain object-fit block z-10 transform scale-[0.7] translate-x-[-14.25rem] translate-y-[4.5rem] "
                        />
                    </View>
                    <View className="h-[15vh]"></View>
                </ScrollView>
                
            </View>
        </SafeAreaProvider>
    );
}


export default Map;