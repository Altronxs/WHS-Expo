import { Text, Button, Alert, Image, TouchableOpacity, View, ScrollView, ImageBackground, Linking } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useFonts } from '@expo-google-fonts/roboto/useFonts';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function Index() {
  const router = useRouter(); // Get the router instance
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    
    <SafeAreaProvider className="flex-col">
      <SafeAreaView className="flex-row bg-[#0d0d59] h-28 z-10 pt-28">
        <Image
          source={require("@/assets/images/whs-logo.png")}
          className="w-32 h-32 relative bottom-28 left-11"
        />
        <SafeAreaView className=" w-48 h-28 bottom-36 left-14 items-start">
          <Text className="text-white font-roboto-bold">MY VOICE</Text>
          <Text className="text-white font-roboto-bold">     MY CHOICE</Text>
          <Text className="text-white font-roboto-bold">           MY FUTURE</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View className="grow justify-center items-center bg-white">
        <ScrollView className="self-center">
          <ImageBackground 
            source={require('@/assets/images/bg-home.png')} 
            className="flex-row flex-wrap justify-center items-start w-[100vw] h-[100vh]"
          >
            
            
            <TouchableOpacity 
              className="w-24 h-min mx-3 my-3 justify-center pt-10"
              
            >
              <Image 
                source={require('@/assets/images/school.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Mission & Vision</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-min mx-3 my-3 justify-center pt-10">
              <Image 
                source={require('@/assets/images/bell.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Bell Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-min mx-3 my-3 justify-center pt-10">
              <Image 
                source={require('@/assets/images/map-icon.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Campus Map</Text>
            </TouchableOpacity>





            <TouchableOpacity className="w-24 h-min mx-3 my-3 justify-center">
              <Image 
                source={require('@/assets/images/phone.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-min mx-3 my-3 justify-center">
              <Image 
                source={require('@/assets/images/user.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Student</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-min mx-3 my-3 justify-center">
              <Image 
                source={require('@/assets/images/user.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Registrar</Text>
            </TouchableOpacity>




            <TouchableOpacity 
              className="w-24 h-min mx-3 my-3 justify-center"
              onPress={() => {
                Linking.openURL('https://hawaii.infinitecampus.org/campus/hawaii.jsp');
              }}
            >
              <Image 
                source={require('@/assets/images/if.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Infinite Campus</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="w-24 h-min mx-3 my-3 justify-center"
              onPress={() => {
                Linking.openURL('https://hawaii.infinitecampus.org/campus/hawaii.jsp');
              }}
            >
              <Image 
                source={require('@/assets/images/ball.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Athletics</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="w-24 h-min mx-3 my-3 justify-center"
              onPress={() => router.push("/cafe")}
            >
              <Image 
                source={require('@/assets/images/cafe.png')} 
                style={{
                  tintColor: '#0d0d59'
                }} 
                className="size-14 self-center"
              />
              <Text className="text-center font-roboto-regular text-[#0d0d59] text-xs">Cafeteria</Text>
            </TouchableOpacity>
      
          </ImageBackground>   
          
        </ScrollView>
      </View>
    </SafeAreaProvider>
    
    
  );
}
