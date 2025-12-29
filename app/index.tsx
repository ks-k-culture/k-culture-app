import { Ionicons } from "@expo/vector-icons";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Google from "expo-auth-session/providers/google";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Platform, Pressable, Text, View } from "react-native";

import { GoogleLogo } from "@/components/icons/google-logo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  // TODO: Google Cloud Console에서 OAuth 클라이언트 ID 발급 후 아래에 입력
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
    webClientId: "YOUR_WEB_CLIENT_ID",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // TODO: authentication.accessToken을 백엔드로 전송하여 검증
      // TODO: 신규 사용자면 onboarding, 기존 사용자면 (tabs)로 이동
      console.log("Google Login Success:", authentication);
      router.replace("/onboarding");
    }
  }, [response]);

  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 구현
    // TODO: 신규 사용자면 onboarding, 기존 사용자면 (tabs)로 이동
    router.replace("/onboarding");
  };

  const handleGoogleLogin = () => {
    promptAsync();
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
      // TODO: 신규 사용자면 onboarding, 기존 사용자면 (tabs)로 이동
      console.log("Apple Login Success:", credential);
      router.replace("/onboarding");
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
            disabled={!request}
            className={`flex-row items-center justify-center bg-white rounded-xl py-4 mb-3 ${!request ? "opacity-50" : "active:opacity-80"}`}
          >
            <View className="w-6 h-6 mr-3 items-center justify-center">
              <GoogleLogo size={22} />
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
