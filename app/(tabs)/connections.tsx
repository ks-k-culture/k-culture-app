import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CONNECTIONS = [
  { id: "1", name: "김민수", role: "배우", image: "https://picsum.photos/100?random=101", status: "online" },
  { id: "2", name: "이영희", role: "감독", image: "https://picsum.photos/100?random=102", status: "offline" },
  { id: "3", name: "박철수", role: "작가", image: "https://picsum.photos/100?random=103", status: "online" },
  { id: "4", name: "정수진", role: "배우", image: "https://picsum.photos/100?random=104", status: "offline" },
  { id: "5", name: "최민호", role: "스태프", image: "https://picsum.photos/100?random=105", status: "online" },
];

const REQUESTS = [
  { id: "1", name: "강지은", role: "배우", image: "https://picsum.photos/100?random=106" },
  { id: "2", name: "윤서연", role: "PD", image: "https://picsum.photos/100?random=107" },
];

export default function ConnectionsScreen() {
  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="px-6 py-4">
          <Text className="text-white text-2xl font-bold">일촌</Text>
          <Text className="text-gray-400 mt-1">나와 연결된 사람들</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {REQUESTS.length > 0 && (
            <View className="px-6 mb-6">
              <Text className="text-white font-bold text-lg mb-4">일촌 신청 ({REQUESTS.length})</Text>
              {REQUESTS.map((request) => (
                <View key={request.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-3">
                  <View className="w-12 h-12 rounded-full overflow-hidden">
                    <Image source={{ uri: request.image }} className="w-full h-full" contentFit="cover" />
                  </View>
                  <View className="flex-1 ml-3">
                    <Text className="text-white font-semibold">{request.name}</Text>
                    <Text className="text-gray-400 text-sm">{request.role}</Text>
                  </View>
                  <View className="flex-row gap-2">
                    <Pressable className="bg-lime-500 px-4 py-2 rounded-lg">
                      <Text className="text-black font-semibold text-sm">수락</Text>
                    </Pressable>
                    <Pressable className="bg-gray-700 px-4 py-2 rounded-lg">
                      <Text className="text-white font-semibold text-sm">거절</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>
          )}

          <View className="px-6">
            <Text className="text-white font-bold text-lg mb-4">내 일촌 ({CONNECTIONS.length})</Text>
            {CONNECTIONS.map((connection) => (
              <Pressable key={connection.id} className="flex-row items-center bg-gray-900/30 rounded-xl p-4 mb-3">
                <View className="relative">
                  <View className="w-12 h-12 rounded-full overflow-hidden">
                    <Image source={{ uri: connection.image }} className="w-full h-full" contentFit="cover" />
                  </View>
                  <View
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black ${
                      connection.status === "online" ? "bg-lime-500" : "bg-gray-500"
                    }`}
                  />
                </View>
                <View className="flex-1 ml-3">
                  <Text className="text-white font-semibold">{connection.name}</Text>
                  <Text className="text-gray-400 text-sm">{connection.role}</Text>
                </View>
                <Pressable className="p-2">
                  <Ionicons name="chatbubble-outline" size={20} color="#9CA3AF" />
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
