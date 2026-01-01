import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddProfileScreen() {
  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold ml-2">배우&모델 프로필 추가하기</Text>
        </View>

        <View className="flex-1 px-6 justify-center">
          <Pressable className="bg-gray-900 rounded-2xl py-16 items-center mb-6">
            <View className="w-16 h-16 rounded-full bg-purple-600/30 items-center justify-center mb-4">
              <Ionicons name="person-add" size={32} color="#A78BFA" />
            </View>
            <Text className="text-white text-lg font-semibold">새롭게 프로필 등록하기</Text>
          </Pressable>

          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-700" />
            <Text className="text-gray-500 mx-4">OR</Text>
            <View className="flex-1 h-px bg-gray-700" />
          </View>

          <Pressable className="bg-gray-900 rounded-2xl py-16 items-center mt-6">
            <View className="w-16 h-16 rounded-full bg-blue-600/30 items-center justify-center mb-4">
              <Ionicons name="link" size={32} color="#60A5FA" />
            </View>
            <Text className="text-white text-lg font-semibold text-center">
              프로필이 등록되어 있나요?{"\n"}프로필 연동하기
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
