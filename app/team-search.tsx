import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TeamSearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">팀 검색</Text>
        </View>

        {/* 검색 입력창 */}
        <View className="px-4 mb-4">
          <View className="flex-row items-center bg-[#2A2A2A] rounded-xl px-4 py-3">
            <Ionicons name="search-outline" size={20} color="#9CA3AF" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="팀 검색하기"
              placeholderTextColor="#6B7280"
              className="flex-1 text-white ml-3"
            />
          </View>
        </View>

        {/* 빈 상태 */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">검색어를 입력해주세요.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

