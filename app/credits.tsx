import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreditsScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">나의 크레딧</Text>
        </View>

        {/* 크레딧 카드 */}
        <View className="mx-4 bg-[#1A1A1A] rounded-xl p-5 mb-6">
          <View className="flex-row items-start justify-between">
            <View>
              <Text className="text-gray-400 mb-2">나의 보유 크레딧</Text>
              <Text className="text-white text-3xl font-bold mb-1">0 크레딧</Text>
              <Text className="text-yellow-400">+0 크레딧 예정</Text>
            </View>
            <View className="gap-2">
              <Pressable className="border border-gray-600 rounded-lg px-4 py-2">
                <Text className="text-gray-300">충전하기</Text>
              </Pressable>
              <Pressable className="border border-gray-600 rounded-lg px-4 py-2">
                <Text className="text-gray-300">출금하기</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* 빈 상태 */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">표시할 리스트가 없습니다.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
