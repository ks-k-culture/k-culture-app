import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventsScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">이벤트</Text>
        </View>

        {/* 빈 상태 */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">현재 진행중인 이벤트가 없습니다.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

