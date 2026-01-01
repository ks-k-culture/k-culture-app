import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommunitySearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <TextInput
            className="flex-1 text-white text-base"
            placeholder="제목을 입력하세요"
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
          <Pressable className="p-2">
            <Ionicons name="search" size={24} color="white" />
          </Pressable>
        </View>

        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">제목을 입력해주세요</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
