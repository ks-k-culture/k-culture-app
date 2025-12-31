import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RECENT_SEARCHES = ["펜트하우스", "김민수", "드라마 오디션", "뮤직비디오"];

const POPULAR_SEARCHES = [
  { rank: 1, keyword: "넷플릭스 드라마" },
  { rank: 2, keyword: "신인 배우" },
  { rank: 3, keyword: "2024 영화" },
  { rank: 4, keyword: "단편 영화" },
  { rank: 5, keyword: "웹드라마" },
];

const RECOMMENDED_CREATORS = [
  { id: "1", name: "김민수", role: "배우", image: "https://picsum.photos/100?random=301" },
  { id: "2", name: "이영희", role: "감독", image: "https://picsum.photos/100?random=302" },
  { id: "3", name: "박철수", role: "작가", image: "https://picsum.photos/100?random=303" },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="px-6 py-4">
          <View className="flex-row items-center bg-gray-900 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="flex-1 text-white ml-3 text-base"
              placeholder="배우, 작품, 팀을 검색하세요"
              placeholderTextColor="#6B7280"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color="#6B7280" />
              </Pressable>
            )}
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-white font-bold text-lg">최근 검색어</Text>
              <Pressable>
                <Text className="text-gray-400 text-sm">전체 삭제</Text>
              </Pressable>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {RECENT_SEARCHES.map((search, index) => (
                <Pressable key={index} className="flex-row items-center bg-gray-800 rounded-full px-4 py-2">
                  <Text className="text-gray-300 text-sm">{search}</Text>
                  <Ionicons name="close" size={14} color="#9CA3AF" style={{ marginLeft: 8 }} />
                </Pressable>
              ))}
            </View>
          </View>

          <View className="px-6 mb-6">
            <Text className="text-white font-bold text-lg mb-3">인기 검색어</Text>
            <View className="bg-gray-900/50 rounded-xl p-4">
              {POPULAR_SEARCHES.map((item) => (
                <Pressable key={item.rank} className="flex-row items-center py-2">
                  <Text className={`w-6 font-bold ${item.rank <= 3 ? "text-purple-400" : "text-gray-500"}`}>
                    {item.rank}
                  </Text>
                  <Text className="text-white ml-4">{item.keyword}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="px-6">
            <Text className="text-white font-bold text-lg mb-4">추천 크리에이터</Text>
            {RECOMMENDED_CREATORS.map((creator) => (
              <Pressable key={creator.id} className="flex-row items-center bg-gray-900/30 rounded-xl p-4 mb-3">
                <View className="w-14 h-14 rounded-full overflow-hidden">
                  <Image source={{ uri: creator.image }} className="w-full h-full" contentFit="cover" />
                </View>
                <View className="flex-1 ml-4">
                  <Text className="text-white font-semibold">{creator.name}</Text>
                  <Text className="text-gray-400 text-sm">{creator.role}</Text>
                </View>
                <Pressable className="bg-purple-600 px-4 py-2 rounded-lg">
                  <Text className="text-white text-sm font-semibold">프로필</Text>
                </Pressable>
              </Pressable>
            ))}
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
