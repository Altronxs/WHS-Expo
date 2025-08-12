import { Text, Image, View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from '@expo-google-fonts/roboto/useFonts';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useEffect, useState } from "react";

const Cafe = () => {
  const [localPath, setLocalPath] = useState<string | null>(null);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider className="flex-col">
      <SafeAreaView className="flex-row bg-[#0d0d59] h-28 z-10 pt-28">
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
        <ScrollView className="self-center">
          <ImageBackground
            // source={require('@/assets/images/bg-home.png')}
            className="flex-row flex-wrap justify-center items-start w-[100vw] h-[100vh]"
          >
        
          </ImageBackground>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default Cafe;