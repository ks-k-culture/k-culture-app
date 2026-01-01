import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddWorkScreen() {
  const [searchQuery, setSearchQuery] = useState("");

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
          <Text className="text-white text-xl font-bold ml-2">작품 추가하기</Text>
        </View>

        <View className="px-6 mt-2">
          <View className="flex-row items-center bg-gray-900 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 text-white ml-3 text-base"
              placeholder="작품 제목 검색하기"
              placeholderTextColor="#6B7280"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
