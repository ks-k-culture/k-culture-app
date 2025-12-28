import { Ionicons } from "@expo/vector-icons";
import * as AppleAuthentication from "expo-apple-authentication";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, Text, View } from "react-native";

export default function LoginScreen() {
  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 구현
    router.replace("/(tabs)");
  };

  const handleGoogleLogin = () => {
    // TODO: Google 로그인 구현
    router.replace("/(tabs)");
  };

  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // TODO: credential.identityToken을 백엔드로 전송하여 검증
      console.log("Apple Login Success:", credential);
      router.replace("/(tabs)");
    } catch (e: any) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        console.log("User canceled Apple Sign In");
      } else {
        console.error("Apple Sign In Error:", e);
      }
    }
  };

  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#1a0a2e", "#16082a", "#0d0615", "#000000"]}
        locations={[0, 0.3, 0.6, 1]}
        className="flex-1"
      >
        <StatusBar style="light" />

        <View className="flex-1 items-center justify-center px-8">
          <View className="items-center mb-4">
            <Text className="text-white text-5xl font-bold tracking-wider">K-Culture</Text>
            <View className="w-16 h-1 bg-purple-500 rounded-full mt-3" />
          </View>

          <Text className="text-gray-400 text-lg mt-4 text-center">한류 문화의 모든 것</Text>
        </View>

        <View className="px-6 pb-12">
          <Pressable
            onPress={handleKakaoLogin}
            className="flex-row items-center justify-center bg-[#FEE500] rounded-xl py-4 mb-3 active:opacity-80"
          >
            <View className="w-6 h-6 mr-3 items-center justify-center">
              <Ionicons name="chatbubble" size={20} color="#3C1E1E" />
            </View>
            <Text className="text-[#3C1E1E] text-base font-semibold">카카오로 시작하기</Text>
          </Pressable>

          <Pressable
            onPress={handleGoogleLogin}
            className="flex-row items-center justify-center bg-white rounded-xl py-4 mb-3 active:opacity-80"
          >
            <View className="w-6 h-6 mr-3 items-center justify-center">
              <Text className="text-lg font-bold">G</Text>
            </View>
            <Text className="text-gray-800 text-base font-semibold">Google로 시작하기</Text>
          </Pressable>

          {Platform.OS === "ios" && (
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
              cornerRadius={12}
              style={{ height: 56, marginBottom: 12 }}
              onPress={handleAppleLogin}
            />
          )}

          <Text className="text-gray-600 text-center text-sm mt-6">ver.1.0.0</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
