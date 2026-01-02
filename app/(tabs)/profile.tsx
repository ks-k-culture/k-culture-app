import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/ui/text";
import { FILMOGRAPHY_CATEGORIES } from "@/constants/data";
import { useShareSheet } from "@/contexts/share-sheet-context";

export default function ProfileScreen() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);
  const { openShareSheet } = useShareSheet();

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#4A1A6B", "#2D1B4E", "#1a0a2e", "#000000"]}
          locations={[0, 0.3, 0.5, 0.7]}
          style={{ paddingTop: 60, paddingBottom: 30 }}
        >
          <SafeAreaView edges={[]} className="px-6">
            <View className="flex-row justify-end gap-4 mb-8">
              <Pressable className="p-2" onPress={openShareSheet}>
                <Ionicons name="share-outline" size={24} color="white" />
              </Pressable>
              <Pressable className="p-2" onPress={() => router.push("/edit-profile")}>
                <Ionicons name="pencil" size={24} color="white" />
              </Pressable>
            </View>

            <View className="items-center mb-6">
              <View className="relative">
                <Ionicons name="paper-plane" size={80} color="#9CA3AF" style={{ opacity: 0.6 }} />
                <Ionicons
                  name="airplane"
                  size={60}
                  color="#374151"
                  style={{ position: "absolute", bottom: -10, right: -10, opacity: 0.4 }}
                />
              </View>
            </View>

            <Pressable
              onPress={() => router.push("/add-profile")}
              className="self-start border border-dashed border-gray-400 rounded-full px-4 py-2 flex-row items-center mb-3"
            >
              <Text className="text-white text-sm mr-1">프로필 추가</Text>
              <Text className="text-lg">🎬</Text>
            </Pressable>

            <View className="flex-row items-end justify-between">
              <Text className="text-white text-3xl font-bold">김규민</Text>
              <Text className="text-gray-400">@user7269</Text>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <View className="px-6 -mt-2">
          <View className="bg-gray-900 rounded-2xl p-5">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-white text-base">일촌 0명</Text>
              <Text className="text-green-400 font-semibold">프리</Text>
            </View>

            <Pressable
              onPress={() => setIsIntroExpanded(!isIntroExpanded)}
              className="flex-row items-center justify-between"
            >
              <Text className="text-gray-400">소개가 없습니다.</Text>
              <Ionicons name={isIntroExpanded ? "chevron-up" : "chevron-down"} size={20} color="#6B7280" />
            </Pressable>

            {isIntroExpanded && (
              <View className="mt-4 pt-4 border-t border-gray-800">
                {FILMOGRAPHY_CATEGORIES.map((category) => (
                  <View key={category.name} className="flex-row items-center justify-between py-2">
                    <Text className="text-white">{category.name}</Text>
                    <View className="flex-row items-center flex-1 mx-4">
                      <View className="flex-1 h-2 bg-gray-800 rounded-full" />
                    </View>
                    <Text className="text-lime-400">{category.count}편</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
            contentContainerStyle={{ gap: 8 }}
          >
            <Pressable className="flex-row items-center bg-gray-900 rounded-full px-4 py-2">
              <Text className="text-lg mr-2">😊</Text>
              <Text className="text-white font-semibold">Lv.2</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/spark")}
              className="flex-row items-center bg-gray-900 rounded-full px-4 py-2"
            >
              <Ionicons name="flame" size={18} color="white" />
              <Text className="text-white font-semibold ml-2">스파크</Text>
            </Pressable>
            <Pressable className="flex-row items-center bg-gray-900 rounded-full px-4 py-2">
              <Ionicons name="document-text" size={18} color="white" />
              <Text className="text-white font-semibold ml-2">작성한 글</Text>
            </Pressable>
            <Pressable className="flex-row items-center bg-gray-900 rounded-full px-4 py-2">
              <Ionicons name="phone-portrait" size={18} color="white" />
              <Text className="text-white font-semibold ml-2">방명록</Text>
            </Pressable>
          </ScrollView>

          <View className="mt-6">
            <View className="flex-row items-center justify-center mb-4">
              <Ionicons name="options-outline" size={18} color="white" />
              <Text className="text-white font-semibold ml-2">작품 전체(0)</Text>
            </View>

            <Pressable
              onPress={() => router.push("/add-work")}
              className="bg-gray-900 rounded-xl py-4 items-center mb-6"
            >
              <Ionicons name="add" size={24} color="#6B7280" />
            </Pressable>

            <View className="items-center py-8">
              <Text className="text-gray-500">참여한 작품이 없습니다</Text>
            </View>
          </View>

          <View className="h-8" />
        </View>
      </ScrollView>
    </View>
  );
}
