import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";

type TabType = "30days" | "streak";

export default function SparkRankingScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("30days");
  const userName = "김규민";

  return (
    <ScreenWrapper showGradient={false}>
      <View className="flex-1 bg-white">
        <View className="flex-row items-center justify-center px-4 py-4">
          <Pressable onPress={() => require("expo-router").router.back()} className="absolute left-4 p-2">
            <Ionicons name="chevron-back" size={24} color="black" />
          </Pressable>
          <View className="flex-row items-center">
            <Ionicons name="bar-chart" size={20} color="black" />
            <Text className="text-black text-lg font-bold ml-2">스파크 랭킹</Text>
          </View>
        </View>

        <View className="flex-row justify-center mt-2">
          <Pressable
            onPress={() => setActiveTab("30days")}
            className="px-4 py-2 mr-4"
            style={{ borderBottomWidth: activeTab === "30days" ? 2 : 0, borderBottomColor: "#1F2937" }}
          >
            <Text className={`text-base font-medium ${activeTab === "30days" ? "text-gray-900" : "text-gray-400"}`}>
              30일간 스파크
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab("streak")}
            className="px-4 py-2"
            style={{ borderBottomWidth: activeTab === "streak" ? 2 : 0, borderBottomColor: "#1F2937" }}
          >
            <Text className={`text-base font-medium ${activeTab === "streak" ? "text-gray-900" : "text-gray-400"}`}>
              최장 스트릭
            </Text>
          </Pressable>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-row items-center justify-between px-4 py-4 mt-8">
            <Text className="text-gray-900 text-lg font-bold">전체 순위</Text>
            <Badge className="bg-gray-100 rounded-full px-4 py-2">
              <Text className="text-purple-600 font-medium">{userName}님의 순위: -</Text>
            </Badge>
          </View>

          <View className="flex-1 items-center justify-center py-32">
            <Text className="text-gray-400">아직 스파크 기록이 없습니다</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}
