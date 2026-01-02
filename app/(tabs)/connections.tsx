import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

const CONNECTIONS: { id: string; name: string; role: string; image: string }[] = [];

export default function ConnectionsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnections = CONNECTIONS.filter((c) => c.name.includes(searchQuery) || c.role.includes(searchQuery));

  return (
    <ScreenWrapper>
      <View className="flex-row items-center justify-between px-6 py-4">
        <Text className="text-white text-2xl font-bold">일촌 목록({CONNECTIONS.length})</Text>
        <Pressable onPress={() => router.push("/connection-requests")} className="p-2">
          <Ionicons name="people-outline" size={24} color="white" />
        </Pressable>
      </View>

      <View className="px-6 mb-4">
        <Input
          placeholder="일촌 검색하기"
          value={searchQuery}
          onChangeText={setSearchQuery}
          leftIcon={<Ionicons name="search" size={20} color="#6B7280" />}
        />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {filteredConnections.length === 0 ? (
          <EmptyState icon="people-outline" title="검색 결과가 없습니다" />
        ) : (
          <View className="px-6">
            {filteredConnections.map((connection) => (
              <Pressable key={connection.id} className="flex-row items-center bg-gray-900/30 rounded-xl p-4 mb-3">
                <View className="w-12 h-12 rounded-full bg-gray-700" />
                <View className="flex-1 ml-3">
                  <Text className="text-white font-semibold">{connection.name}</Text>
                  <Text className="text-gray-400 text-sm">{connection.role}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}
        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
