import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { SEARCH_USERS, SEARCH_WORKS } from "@/constants/data";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers =
    searchQuery.length > 0
      ? SEARCH_USERS.filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  const filteredWorks =
    searchQuery.length > 0
      ? SEARCH_WORKS.filter(
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
          <Input
            placeholder="이름(아이디) 또는 작품명 검색하기"
            value={searchQuery}
            onChangeText={setSearchQuery}
            leftIcon={<Ionicons name="search" size={20} color="#9CA3AF" />}
            rightIcon={
              searchQuery.length > 0 ? (
                <Pressable onPress={() => setSearchQuery("")}>
                  <Ionicons name="close" size={20} color="#6B7280" />
                </Pressable>
              ) : undefined
            }
          />
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
