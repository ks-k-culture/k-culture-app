import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Input } from "@/components/ui/input";

export default function AddWorkScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScreenWrapper>
      <Header title="작품 추가하기" />

      <View className="px-6 mt-2">
        <Input
          placeholder="작품 제목 검색하기"
          value={searchQuery}
          onChangeText={setSearchQuery}
          leftIcon={<Ionicons name="search" size={20} color="#6B7280" />}
        />
      </View>
    </ScreenWrapper>
  );
}
