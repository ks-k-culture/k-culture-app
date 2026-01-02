import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

const MONTHS = ["8월", "9월", "10월", "11월", "12월"];
const DAYS_PER_WEEK = 7;
const WEEKS_COUNT = 10;

function ContributionGrid() {
  const generateEmptyGrid = () => {
    const grid = [];
    for (let week = 0; week < WEEKS_COUNT; week++) {
      const weekData = [];
      for (let day = 0; day < DAYS_PER_WEEK; day++) {
        weekData.push(0);
      }
      grid.push(weekData);
    }
    return grid;
  };

  const grid = generateEmptyGrid();

  const getColor = (value: number) => {
    if (value === 0) return "#2A2A2A";
    if (value === 1) return "#6B7280";
    return "#8B5CF6";
  };

  return (
    <View className="mt-4">
      <View className="flex-row justify-between mb-2">
        {MONTHS.map((month) => (
          <Text key={month} className="text-gray-500 text-xs">
            {month}
          </Text>
        ))}
      </View>
      <View className="flex-row">
        {grid.map((week, weekIndex) => (
          <View key={weekIndex} className="flex-1">
            {week.map((day, dayIndex) => (
              <View
                key={`${weekIndex}-${dayIndex}`}
                className="aspect-square m-0.5 rounded-sm"
                style={{ backgroundColor: getColor(day) }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

export default function SparkScreen() {
  const userName = "김규민";

  return (
    <ScreenWrapper>
      <Header
        title={`${userName}님의 스파크`}
        rightComponent={
          <Pressable onPress={() => router.push("/spark-ranking")} className="p-2">
            <Ionicons name="bar-chart" size={24} color="white" />
          </Pressable>
        }
      />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#7C3AED", "#6366F1", "#8B5CF6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 16, padding: 20, marginTop: 8 }}
        >
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-lg font-bold">{userName}님의 스트릭</Text>
            <View className="flex-row items-center bg-white rounded-full px-3 py-1.5">
              <Ionicons name="flame" size={16} color="#F97316" />
              <Text className="text-gray-900 font-semibold ml-1">연속 0일째</Text>
            </View>
          </View>

          <View className="flex-row">
            <View className="flex-1 items-center">
              <Text className="text-3xl font-bold">0일</Text>
              <Text className="text-purple-200 text-sm mt-1">연속 스트릭</Text>
            </View>
            <View className="w-px bg-white/30" />
            <View className="flex-1 items-center">
              <Text className="text-3xl font-bold">0개</Text>
              <Text className="text-purple-200 text-sm mt-1">전체 스파크</Text>
            </View>
            <View className="w-px bg-white/30" />
            <View className="flex-1 items-center">
              <Text className="text-3xl font-bold">-</Text>
              <Text className="text-purple-200 text-sm mt-1">랭킹</Text>
            </View>
          </View>
        </LinearGradient>

        <Card className="mt-4 p-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">365일간의 기록</Text>
            <View className="flex-row items-center gap-3">
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-[#2A2A2A] rounded-sm mr-1" />
                <Text className="text-gray-500 text-xs">0개</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-gray-500 rounded-sm mr-1" />
                <Text className="text-gray-500 text-xs">1개</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-purple-500 rounded-sm mr-1" />
                <Text className="text-gray-500 text-xs">2개+</Text>
              </View>
            </View>
          </View>
          <ContributionGrid />
        </Card>

        <Card className="mt-4 p-5">
          <View className="flex-row items-center mb-3">
            <View className="bg-orange-500/20 p-2 rounded-lg mr-3">
              <Ionicons name="flame" size={20} color="#F97316" />
            </View>
            <Text className="text-lg font-bold">스파크란?</Text>
          </View>
          <Text className="text-gray-400 leading-6">
            스파크는 작품의 응원 기록입니다.{"\n"}
            매일 새로운 작품을 발견하고 작품을 응원해보세요!{"\n"}
            높아지는 작품 응원 사실은 제작자에게 힘이 됩니다.
          </Text>
        </Card>

        <View className="items-center py-16">
          <Text className="text-gray-500">스파크한 작품이 없습니다</Text>
        </View>

        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
