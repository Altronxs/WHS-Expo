
import { Text, Image, View, ScrollView, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect } from 'expo-router';
import { useFonts } from '@expo-google-fonts/roboto/useFonts';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import React, { useState, useEffect, useRef } from 'react';

import { WebView } from 'react-native-webview';
import type { WebView as WebViewType } from 'react-native-webview';



const Bell = () => {

  const webViewRef = useRef<WebViewType>(null);

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

      <View className="grow justify-center items-center bg-white">
        
        <Text
          className="z-20 font-roboto text-white pt-16 pb-4 w-[100vw] bg-whs-gold text-center"
        >Bell Schedule SY 2025-2026</Text>
        <View className="self-center items-center flex-row w-[100vw] h-[100vh] z-10">
            <WebView
              className="relative mt-[10vh]"
              ref={webViewRef}
              source={{ uri: 'https://www.waipahuhigh.org/full%20bell%2025-26%20revised.pdf' }}
            />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Bell;
