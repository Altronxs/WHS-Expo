import { Text, Image, View, ScrollView, ImageBackground, ActivityIndicator, Dimensions, TouchableOpacity, Modal, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect } from 'expo-router';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
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
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Or a loading indicator
    }

    return (
        <SafeAreaProvider className="flex-col">
            <SafeAreaView className="flex-row bg-[#0d0d59] h-28 z-30 pt-28">
            <Image
                source={require("@/assets/images/whs-logo.png")}
                className="w-32 h-32 relative bottom-28 left-11"
            />
            <SafeAreaView className="w-48 h-28 bottom-36 left-14 items-start">
                <Text className="text-white font-roboto-bold">MY VOICE</Text>
                <Text className="text-white font-roboto-bold">     MY CHOICE</Text>
                <Text className="text-white font-roboto-bold">           MY FUTURE</Text>
            </SafeAreaView>
            </SafeAreaView> 

            <View className="grow bg-white">
                <View
                    className="w-full h-16 pt-3 bg-whs-gold items-center mb-3 pb-4"
                >
                    <TouchableOpacity 
                        className="w-10 h-10 left self-start z-30"
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
                        className="z-20 font-roboto text-white w-full bg-whs-gold text-center relative bottom-8"
                    >Bell Schedule SY 2025-2026
                    </Text>
                </View>
            
            <View
                
                className="w-full h-[50vh] pt-5 bg-white flex justify-center items-center"
            >
                <Image
                    source={require('@/assets/images/whs-campus-map.png')} 
                    className="self-center items-center  w-[95vw] h-[40vh] resize-contain"
                ></Image>
                
            </View>
            
            
            </View>
        </SafeAreaProvider>
    );
}

export default Map;