import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const _Layout = () => {

    return (
        <Tabs>
            <Tabs.Screen
                name="guide"
                options={{
                    title: 'Guide',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='color-white font-roboto-bold text-xs'>Guide</Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                            <Image source={require('@/assets/images/info.png')} tintColor={'#ffffff'}/>    
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='hidden'>Home</Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                        
                            <ImageBackground source={require('@/assets/images/home.png')} className='size-32 border-4 rounded-full'></ImageBackground>
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Campus',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='color-white font-roboto-bold text-xs'>Map</Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                            <Image source={require('@/assets/images/map.png')} tintColor={'#ffffff'}/>    
                        </>
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout