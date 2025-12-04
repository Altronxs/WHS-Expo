import { Text, Image, View, ScrollView, ImageBackground, ActivityIndicator, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect } from 'expo-router';
import { useFonts, BarlowSemiCondensed_600SemiBold } from '@expo-google-fonts/barlow-semi-condensed';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from "expo-router";
import { WebView } from "react-native-webview";
import type { WebView as WebViewType } from "react-native-webview";
import MapView, { Marker, Polygon } from "react-native-maps";


const { width, height } = Dimensions.get('window');




type Coordinate = [number, number];
interface MapFeature {
  name: string;
  polygon: Coordinate[];
  marker: Coordinate;
  iconNeed: boolean;
  textNeed?: boolean;
  iconName?: string;
  markerText?: string;

}
interface MapDataResponse {
  mapData: MapFeature[];
}



const Map = () => {
    const webViewRef = useRef<WebViewType>(null);
    const router = useRouter();
    const mapRef = useRef<MapView>(null);
    const [mapData, setMapData] = useState<MapDataResponse>(require('@/assets/json/mapdata.json'));
    const icons = {
        gym: require('@/assets/images/gym.png'),
        marker: require('@/assets/images/map-marker.png'),
        library: require('@/assets/images/library.png'),
        cafe: require('@/assets/images/cafe.png'),
        band: require('@/assets/images/band.png'),
        whs: require('@/assets/images/whs-icon.png'),
        
        // add more as needed
    };

    const [location, setLocation] = useState({
        latitude: 21.3888,
        longitude: -157.9923,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

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
                <MapView
                    ref={mapRef}
                    style={{ width: "100%", height: "100%", zIndex: 20 }}
                    region={location}
                    initialCamera={
                        {
                            center: {
                            latitude: 21.38912945,
                            longitude: -157.99326913,
                        },
                        pitch: 80,
                        heading: 180,

                        // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
                        altitude: 150,

                        // Only when using Google Maps.
                        zoom: 17
                        }
                    }
                >
                    {
                      mapData.mapData.map((feature, index) => (
                        <React.Fragment key={index}>
                          <Polygon
                            fillColor="#0d0d5988"
                            coordinates={feature.polygon.map(coord => ({
                              latitude: coord[0],
                              longitude: coord[1],
                            }))}
                          />
                          <Marker
                            coordinate={{
                                latitude: feature.marker[0],
                                longitude: feature.marker[1],
                            }}
                            title={feature.name}
                            description=""
                            >
                            {feature.iconNeed ? (
                                <>
                                {feature.textNeed && (
                                    <Text className="text-center justify-center self-center text-white font-barlow-semibold text-base">
                                    {feature.markerText}
                                    </Text>
                                )}
                                <Image
                                    source={icons[feature.iconName as keyof typeof icons]}
                                    style={{ width: 20, height: 20, tintColor: '#ffffff' }}
                                    resizeMode="contain"
                                />
                                </>
                            ) : (
                                <Text className="text-center justify-center self-center text-white font-barlow-semibold text-base">
                                {feature.markerText}
                                </Text>
                            )}
                            </Marker>
                          
                        </React.Fragment>
                      ))
                    }

                </MapView>

            </View>
        </SafeAreaProvider>
    );
}


export default Map;