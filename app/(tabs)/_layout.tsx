import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'


const _Layout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#0d0d59',
                }
            }}

        >
            <Tabs.Screen
                name="guide"
                options={{
                    title: 'Guide',
                    tabBarActiveTintColor: '#ae8c52',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='hidden'></Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                            <Image source={require('@/assets/images/whs-info.png')} tintColor={focused ? '#ae8c52' : '#ffffff'} className='size-8 mt-6'/>    
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarActiveTintColor: '#ae8c52',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='hidden'></Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                            <Image source={require('@/assets/images/whs-home.png')} tintColor={focused ? '#ae8c52' : '#ffffff'} className='size-8 mt-6'/>    
                            
                            {/**<ImageBackground source={require('@/assets/images/home.png')} className='size-28 border-4 rounded-full border-whs-gold mb-5'></ImageBackground>**/}
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Campus',
                    tabBarActiveTintColor: '#ae8c52',
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text className='hidden'></Text>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#0d0d59',
                    },
                    tabBarIcon: ({ focused }) => (
                        <> 
                            <Image source={require('@/assets/images/whs-map.png')} tintColor={ focused ? '#ae8c52' : '#ffffff'} className='size-8 mt-6'/>    
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name="cafe"
                options={{
                    title: 'Cafe',
                    href: null, // hides from tab bar
                    headerShown: false,
                    
                }}
            />
        </Tabs>
    )
}

export default _Layout