import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'react-native'

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="guide"
                options={{
                    title: 'Guide',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Campus',
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _Layout