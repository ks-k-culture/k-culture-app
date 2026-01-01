import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CONNECTIONS: { id: string; name: string; role: string; image: string }[] = [];

export default function ConnectionsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnections = CONNECTIONS.filter((c) => c.name.includes(searchQuery) || c.role.includes(searchQuery));

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-6 py-4">
          <Text className="text-white text-2xl font-bold">일촌 목록({CONNECTIONS.length})</Text>
          <Pressable onPress={() => router.push("/connection-requests")} className="p-2">
            <Ionicons name="people-outline" size={24} color="white" />
          </Pressable>
        </View>

        <View className="px-6 mb-4">
          <View className="flex-row items-center bg-gray-900 rounded-xl px-4 py-3">
            <Ionicons name="search" size={20} color="#6B7280" />
            <TextInput
              className="flex-1 text-white ml-3 text-base"
              placeholder="일촌 검색하기"
              placeholderTextColor="#6B7280"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {filteredConnections.length === 0 ? (
            <View className="flex-1 items-center justify-center py-40">
              <Text className="text-gray-500">검색 결과가 없습니다</Text>
            </View>
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
      </SafeAreaView>
    </View>
  );
}
