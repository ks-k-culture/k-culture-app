import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

export default function TeamSearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScreenWrapper>
      <Header title="팀 검색" />

      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-[#2A2A2A] rounded-xl px-4 py-3">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <Input
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="팀 검색하기"
            placeholderTextColor="#6B7280"
            className="flex-1 ml-3 border-0 bg-transparent p-0"
          />
        </View>
      </View>

      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">검색어를 입력해주세요.</Text>
      </View>
    </ScreenWrapper>
  );
}
