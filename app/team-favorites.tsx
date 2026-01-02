import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TeamFavoritesScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">즐겨찾기한 팀</Text>
        </View>

        {/* 빈 상태 */}
        <View className="flex-1 items-center justify-center">
          <Ionicons name="star-outline" size={64} color="#4B5563" />
          <Text className="text-gray-500 mt-4">즐겨찾기한 팀이 없습니다</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
