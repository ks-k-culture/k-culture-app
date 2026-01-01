import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RECEIVED_REQUESTS: { id: string; name: string; role: string; image: string }[] = [];
const SENT_REQUESTS: { id: string; name: string; role: string; image: string }[] = [];

export default function ConnectionRequestsScreen() {
  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold ml-2">일촌 요청</Text>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <Text className="text-white font-bold text-base mb-4">받은 요청</Text>
          {RECEIVED_REQUESTS.length === 0 ? (
            <View className="items-center py-8">
              <Text className="text-gray-500">받은 요청이 없습니다.</Text>
            </View>
          ) : (
            RECEIVED_REQUESTS.map((request) => (
              <View key={request.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-3">
                <View className="w-12 h-12 rounded-full bg-gray-700" />
                <View className="flex-1 ml-3">
                  <Text className="text-white font-semibold">{request.name}</Text>
                  <Text className="text-gray-400 text-sm">{request.role}</Text>
                </View>
                <View className="flex-row gap-2">
                  <Pressable className="bg-lime-500 px-4 py-2 rounded-lg">
                    <Text className="text-black font-semibold text-sm">수락</Text>
                  </Pressable>
                  <Pressable className="bg-gray-700 px-4 py-2 rounded-lg">
                    <Text className="text-white font-semibold text-sm">거절</Text>
                  </Pressable>
                </View>
              </View>
            ))
          )}

          <Text className="text-white font-bold text-base mb-4 mt-8">보낸 요청</Text>
          {SENT_REQUESTS.length === 0 ? (
            <View className="items-center py-8">
              <Text className="text-gray-500">보낸 요청이 없습니다.</Text>
            </View>
          ) : (
            SENT_REQUESTS.map((request) => (
              <View key={request.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-3">
                <View className="w-12 h-12 rounded-full bg-gray-700" />
                <View className="flex-1 ml-3">
                  <Text className="text-white font-semibold">{request.name}</Text>
                  <Text className="text-gray-400 text-sm">{request.role}</Text>
                </View>
                <Pressable className="bg-gray-700 px-4 py-2 rounded-lg">
                  <Text className="text-white font-semibold text-sm">취소</Text>
                </Pressable>
              </View>
            ))
          )}

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
