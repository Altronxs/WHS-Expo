import { Text, Button, Alert, Image, TouchableOpacity, View } from "react-native";
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
      {/* <SafeAreaView className="flex-none justify-start items-start bg-blue-950">
        <TouchableOpacity 
          onPress={() => router.push("/map")}
          className="flex-row items-center"
        >
          <Image
            source={require("@/assets/images/menu.png")}
            className="size-10 relative mt-5 mb-2 left-4"
          />
        </TouchableOpacity>
      </SafeAreaView> */}
      <SafeAreaView className="flex-row bg-blue-950 h-28 z-10 pt-28">
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
      <SafeAreaView className="grow  justify-center items-center bg-white">
        <Text className="text-5xl text-blue-500 font-bold font-roboto-italic ">WAIPAHU</Text>
        <Link href="/map">map</Link>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
