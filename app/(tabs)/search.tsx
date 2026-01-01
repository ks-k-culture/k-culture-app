import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const USERS_DATA = [
  { id: "1", name: "박소영", username: "sjsy8356", image: null },
  { id: "2", name: "박소영희", username: "soyoung123", image: null },
];

const WORKS_DATA = [
  {
    id: "1",
    title: "귀울음",
    director: "박소영",
    image: null,
  },
  {
    id: "2",
    title: "범죄도시",
    director: "강윤성",
    image:
      "https://i.namu.wiki/i/lTypMqs0MnVWMJYTdQ53PB6TNdwc7IcIhY4Nc9SQwsMLZH7n1H9qiLYVT8p2c_qD60r4g-c3WgZOH20DGmjBhw.webp",
  },
  {
    id: "3",
    title: "범죄도시2",
    director: "이상용",
    image:
      "https://i.namu.wiki/i/v00I9E5N5hwU-A2BtmWNMPxLxOG2pBtqh1kH53e6T7hVOK9Q-5iSPG4xMiRgGQUNy1lSNl4x5G3nXLZ9_hWAZg.webp",
  },
  {
    id: "4",
    title: "범죄도시3",
    director: "이상용",
    image:
      "https://i.namu.wiki/i/0cN8tWHtlIR5dBQGHNcMI4ZGpUCwsijBdUP0QKdYejKCyJfcXFYiIZvqRlJJXlb_ZXMQNZ2eEz47SLwGg8r2Xw.webp",
  },
  {
    id: "5",
    title: "범죄도시4",
    director: "허명행",
    image:
      "https://i.namu.wiki/i/W7nbrA5d6G8jLpB3XiNMJGvGmBZzjGM3U0w2lBfKcG8Y1L8p1lZfD8yKjKv2L8G8mT2kLhGq7R8bMnZ9_KKKKA.webp",
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers =
    searchQuery.length > 0
      ? USERS_DATA.filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  const filteredWorks =
    searchQuery.length > 0
      ? WORKS_DATA.filter(
          (work) =>
            work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            work.director.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="px-6 py-4">
          <Text className="text-white text-2xl font-bold mb-4">찾기</Text>
          <View className="flex-row items-center bg-gray-900 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="flex-1 text-white ml-3 text-base"
              placeholder="이름(아이디) 또는 작품명 검색하기"
              placeholderTextColor="#6B7280"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")}>
                <Ionicons name="close" size={20} color="#6B7280" />
              </Pressable>
            )}
          </View>
        </View>

        {searchQuery.length === 0 ? (
          <View className="flex-1 items-center justify-center px-6">
            <View className="items-center mb-6">
              <View className="relative">
                <View className="w-24 h-24 bg-gray-600 rounded-full items-center justify-center">
                  <Ionicons name="globe-outline" size={48} color="#9CA3AF" />
                </View>
                <View className="absolute -top-2 -left-2">
                  <Ionicons name="person" size={32} color="#9CA3AF" />
                </View>
                <View className="absolute -top-4 right-0">
                  <Ionicons name="search" size={24} color="#9CA3AF" />
                </View>
              </View>
            </View>
            <Text className="text-gray-500 text-base">아티스트와 작품 행성 찾아 떠나기</Text>
          </View>
        ) : (
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {filteredUsers.length > 0 && (
              <View className="px-6 mb-6">
                <Text className="text-gray-400 text-sm mb-3">이용자</Text>
                {filteredUsers.map((user) => (
                  <Pressable key={user.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-2">
                    <View className="w-14 h-14 bg-gray-700 rounded-full items-center justify-center">
                      {user.image ? (
                        <Image source={{ uri: user.image }} className="w-full h-full rounded-full" contentFit="cover" />
                      ) : (
                        <Ionicons name="person" size={28} color="#9CA3AF" />
                      )}
                    </View>
                    <View className="ml-4">
                      <Text className="text-white font-semibold">{user.name}</Text>
                      <Text className="text-gray-400 text-sm">{user.username}</Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            )}

            {filteredWorks.length > 0 && (
              <View className="px-6">
                <Text className="text-gray-400 text-sm mb-3">작품</Text>
                {filteredWorks.map((work) => (
                  <Pressable key={work.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-2">
                    <View className="w-16 h-20 bg-white rounded overflow-hidden">
                      {work.image ? (
                        <Image source={{ uri: work.image }} className="w-full h-full" contentFit="cover" />
                      ) : (
                        <View className="w-full h-full bg-gray-200" />
                      )}
                    </View>
                    <View className="ml-4 flex-1">
                      <Text className="text-white font-semibold">{work.title}</Text>
                      <Text className="text-gray-400 text-sm">감독: {work.director}</Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            )}

            {filteredUsers.length === 0 && filteredWorks.length === 0 && (
              <View className="flex-1 items-center justify-center py-20">
                <Text className="text-gray-500">검색 결과가 없습니다</Text>
              </View>
            )}

            <View className="h-8" />
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
}
