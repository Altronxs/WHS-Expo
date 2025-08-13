import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router';
import { useFonts } from '@expo-google-fonts/roboto/useFonts';
import {
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { WebView } from 'react-native-webview';
import type { WebView as WebViewType } from 'react-native-webview';

const Contacts = () => {

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

  // ✅ Main render after everything is ready
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
        <Text className="z-20 font-roboto text-white pt-16 pb-4 w-[100vw] bg-whs-gold text-center">
          Breakfast & Lunch Menu
        </Text>
        <View className="self-center items-center flex-row w-[100vw] h-[100vh] z-10">
          <WebView
            className='h-[50vh]'
            ref={webViewRef}
            
            source={{ uri: 'https://www.waipahuhigh.org/apps/staff/' }}
            injectedJavaScript={`
                setTimeout(() => {
                const style = document.createElement('style');
                style.innerHTML = \`
                    #enheader5, #enfooter1 {
                    display: none !important;
                    }
                \`;
                document.head.appendChild(style);
                window.ReactNativeWebView.postMessage("Style injected");
                }, 1000);
                true;
            `}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onMessage={(event) => {
                console.log("WebView message:", event.nativeEvent.data);
            }}
            />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Contacts;