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
}
interface MapDataResponse {
  mapData: MapFeature[];
}



const Map = () => {
    const webViewRef = useRef<WebViewType>(null);
    const router = useRouter();
    const mapRef = useRef<MapView>(null);
    const [mapData, setMapData] = useState<MapDataResponse>(require('@/assets/json/mapdata.json'));
    

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
                            <Image
                              source={require('@/assets/images/map-marker.png')}
                              style={{ width: 20, height: 20, tintColor: '#ffffff' }}
                              resizeMode="contain"
                            />
                          </Marker>
                        </React.Fragment>
                      ))
                    }

                   



                
                   



                    
                    <Marker
                        coordinate={{ latitude: 21.38834240735818, longitude: -157.99338779727321 }}   
                        title="F-Building"
                        description=""
                    >
                        <Image
                            source={require('@/assets/images/map-marker.png')}
                            style={{ width: 20, height: 20, tintColor: '#ffffff' }}
                            resizeMode="contain"
                        />
                    </Marker>



                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38887346648689, longitude: -157.9937286391915 },
                        { latitude: 21.38881133150779, longitude: -157.9936191992812 },
                        { latitude: 21.38923882448999, longitude: -157.9933362589736 },
                        { latitude: 21.38930024873442, longitude: -157.9934476800929 },
                        { latitude: 21.38887346648689, longitude: -157.9937286391915 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38867659716243, longitude: -157.9934163547018 },
                        { latitude: 21.38870824534115, longitude: -157.9933929571181 },
                        { latitude: 21.38868094599686, longitude: -157.9933418220148 },
                        { latitude: 21.38905553140732, longitude: -157.9930922735631 },
                        { latitude: 21.38908468408453, longitude: -157.9931464427364 },
                        { latitude: 21.38911983887269, longitude: -157.9931223121743 },
                        { latitude: 21.38915621177416, longitude: -157.9931869350298 },
                        { latitude: 21.38871208685148, longitude: -157.9934774385586 },
                        { latitude: 21.38867659716243, longitude: -157.9934163547018 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38817916966471, longitude: -157.9932284752996 },
                        { latitude: 21.38812647315529, longitude: -157.9931400859631 },
                        { latitude: 21.38821291998396, longitude: -157.9930822199639 },
                        { latitude: 21.38826561652074, longitude: -157.9931699735922 },
                        { latitude: 21.38817916966471, longitude: -157.9932284752996 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38827923480128, longitude: -157.9931617070827 },
                        { latitude: 21.38822745018424, longitude: -157.9930704538179 },
                        { latitude: 21.38830428751101, longitude: -157.9930195366391 },
                        { latitude: 21.3883558519268, longitude: -157.9931124257809 },
                        { latitude: 21.38827923480128, longitude: -157.9931617070827 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38940232506147, longitude: -157.9932405642505 },
                        { latitude: 21.3895625650549, longitude: -157.9935235967715 },
                        { latitude: 21.38986113030125, longitude: -157.9933314923882 },
                        { latitude: 21.38970041439816, longitude: -157.9930433096073 },
                        { latitude: 21.38975910370642, longitude: -157.9930036381761 },
                        { latitude: 21.38977833614779, longitude: -157.9930382029889 },
                        { latitude: 21.38982747738216, longitude: -157.9930089277762 },
                        { latitude: 21.38997234613462, longitude: -157.9932649293846 },
                        { latitude: 21.3899389070593, longitude: -157.9932921069151 },
                        { latitude: 21.38996954877898, longitude: -157.9933493043596 },
                        { latitude: 21.38993610712859, longitude: -157.9933695998187 },
                        { latitude: 21.38996624084798, longitude: -157.9934188281576 },
                        { latitude: 21.38958933261026, longitude: -157.9936645546519 },
                        { latitude: 21.38956146156256, longitude: -157.9936152326915 },
                        { latitude: 21.38952348400431, longitude: -157.9936383753792 },
                        { latitude: 21.38948905867042, longitude: -157.9935822545269 },
                        { latitude: 21.38945253662075, longitude: -157.9936017883318 },
                        { latitude: 21.38930806936148, longitude: -157.9933468857715 },
                        { latitude: 21.38935584705179, longitude: -157.9933131869428 },
                        { latitude: 21.38933747878649, longitude: -157.9932782333161 },
                        { latitude: 21.38940232506147, longitude: -157.9932405642505 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38917012851805, longitude: -157.9930954281396 },
                        { latitude: 21.3892005610413, longitude: -157.993070031054 },
                        { latitude: 21.38917308274934, longitude: -157.9930231599776 },
                        { latitude: 21.38965292309824, longitude: -157.9927079270446 },
                        { latitude: 21.38967973440267, longitude: -157.9927581268644 },
                        { latitude: 21.38971249955302, longitude: -157.9927369580921 },
                        { latitude: 21.38974769506073, longitude: -157.9928023082522 },
                        { latitude: 21.38920517013174, longitude: -157.9931580119656 },
                        { latitude: 21.38917012851805, longitude: -157.9930954281396 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38838504607183, longitude: -157.9933000453315 },
                        { latitude: 21.38834781417004, longitude: -157.9932366073349 },
                        { latitude: 21.38837651629254, longitude: -157.9932179990763 },
                        { latitude: 21.38834495954646, longitude: -157.9931612793889 },
                        { latitude: 21.38879200886282, longitude: -157.992871728055 },
                        { latitude: 21.38881811537323, longitude: -157.992919682509 },
                        { latitude: 21.38884696646091, longitude: -157.9929018916588 },
                        { latitude: 21.38888397297066, longitude: -157.9929679979105 },
                        { latitude: 21.38838504607183, longitude: -157.9933000453315 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38886303358534, longitude: -157.9925882416141 },
                        { latitude: 21.38896468387834, longitude: -157.9925247456407 },
                        { latitude: 21.38894637179166, longitude: -157.9924902976394 },
                        { latitude: 21.38928080479957, longitude: -157.9922710034512 },
                        { latitude: 21.3893294416891, longitude: -157.9923561175629 },
                        { latitude: 21.38929093933916, longitude: -157.9923834494828 },
                        { latitude: 21.38935074911241, longitude: -157.9924922253734 },
                        { latitude: 21.3891274489223, longitude: -157.9926369430513 },
                        { latitude: 21.38919291511334, longitude: -157.9927534450131 },
                        { latitude: 21.3890193443567, longitude: -157.9928682487079 },
                        { latitude: 21.38886303358534, longitude: -157.9925882416141 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38978091073681, longitude: -157.9928433942479 },
                        { latitude: 21.39006317250142, longitude: -157.9926546381959 },
                        { latitude: 21.39033611385497, longitude: -157.9931403374619 },
                        { latitude: 21.39004893406355, longitude: -157.9933234399741 },
                        { latitude: 21.38978091073681, longitude: -157.9928433942479 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38970561373679, longitude: -157.9924429977619 },
                        { latitude: 21.3900758944306, longitude: -157.9921959546407 },
                        { latitude: 21.39018532642107, longitude: -157.9923915209369 },
                        { latitude: 21.38981764656188, longitude: -157.9926367086514 },
                        { latitude: 21.38970561373679, longitude: -157.9924429977619 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38881139773557, longitude: -157.9930774808878 },
                        { latitude: 21.38889911970738, longitude: -157.9930193582103 },
                        { latitude: 21.38894980385055, longitude: -157.9931108676382 },
                        { latitude: 21.38886311358149, longitude: -157.9931683049282 },
                        { latitude: 21.38881139773557, longitude: -157.9930774808878 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38894545122152, longitude: -157.9929909574104 },
                        { latitude: 21.38903337663019, longitude: -157.9929305464665 },
                        { latitude: 21.38908763042248, longitude: -157.9930223238222 },
                        { latitude: 21.38899898260041, longitude: -157.9930818097669 },
                        { latitude: 21.38894545122152, longitude: -157.9929909574104 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38743827994273, longitude: -157.9935402327505 },
                        { latitude: 21.38751492814987, longitude: -157.9934864597707 },
                        { latitude: 21.38756818834884, longitude: -157.9935809311363 },
                        { latitude: 21.38749160437807, longitude: -157.9936335579359 },
                        { latitude: 21.38743827994273, longitude: -157.9935402327505 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38753695891094, longitude: -157.9934750120931 },
                        { latitude: 21.38761318115148, longitude: -157.9934234507767 },
                        { latitude: 21.38766755850188, longitude: -157.993515931242 },
                        { latitude: 21.38758999194049, longitude: -157.9935685304018 },
                        { latitude: 21.38753695891094, longitude: -157.9934750120931 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.38706414405296, longitude: -157.9936208548284 },
                        { latitude: 21.38715102068147, longitude: -157.9935617958793 },
                        { latitude: 21.38719864286787, longitude: -157.9936460418907 },
                        { latitude: 21.38711309639443, longitude: -157.9937031186685 },
                        { latitude: 21.38706414405296, longitude: -157.9936208548284 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.39015708330718, longitude: -157.9925383397846 },
                        { latitude: 21.39026737798966, longitude: -157.9924679755331 },
                        { latitude: 21.39036883507435, longitude: -157.9926471390368 },
                        { latitude: 21.3902596250079, longitude: -157.9927180152679 },
                        { latitude: 21.39015708330718, longitude: -157.9925383397846 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[
                        { latitude: 21.39025665748396, longitude: -157.9923749893538 },
                        { latitude: 21.3903609168003, longitude: -157.9922998741328 },
                        { latitude: 21.39054822754825, longitude: -157.9926360545304 },
                        { latitude: 21.39044423234135, longitude: -157.9927060501618 },
                        { latitude: 21.39025665748396, longitude: -157.9923749893538 },
                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[

                    ]}>
                    
                   </Polygon>
                   <Polygon
                    fillColor="#0d0d5988"
                    coordinates={[

                    ]}>
                    
                   </Polygon>
                </MapView>

                {/* <ScrollView
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
                </ScrollView> */}
                
            </View>
        </SafeAreaProvider>
    );
}


export default Map;