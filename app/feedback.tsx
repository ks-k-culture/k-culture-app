import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function StatCard({
  label,
  value,
  unit,
  onPress,
}: {
  label: string;
  value: number;
  unit?: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} className="flex-1 items-center py-4">
      <Text className="text-gray-400 text-sm mb-2">{label}</Text>
      <Text className="text-white text-2xl font-bold">
        {value} {unit && <Text className="text-lg">{unit}</Text>}
      </Text>
      <Ionicons name="chevron-down" size={16} color="#6B7280" style={{ marginTop: 4 }} />
    </Pressable>
  );
}

export default function FeedbackScreen() {
  const userName = "김규민";

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center justify-between px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold">피드백</Text>
          <Pressable className="p-2 -mr-2">
            <Ionicons name="help-circle-outline" size={24} color="white" />
          </Pressable>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {/* 내가 요청한 피드백 */}
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-lg font-bold">내가 요청한 피드백</Text>
            <Pressable
              onPress={() => router.push("/feedback-request")}
              className="flex-row items-center"
            >
              <Text className="text-gray-400">피드백 요청</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </Pressable>
          </View>

          {/* 피드백 요청하기 카드 */}
          <Pressable
            onPress={() => router.push("/feedback-request")}
            className="border border-dashed border-gray-600 rounded-xl py-8 items-center mb-4"
          >
            <Text className="text-gray-400 mb-2">피드백 요청하기</Text>
            <Ionicons name="add" size={24} color="#6B7280" />
          </Pressable>

          {/* 피드백 서비스 배너 */}
          <LinearGradient
            colors={["#6366F1", "#8B5CF6", "#A855F7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 16, padding: 20, marginBottom: 16 }}
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text className="text-white text-xl font-bold mb-2">피드백 서비스를 이용해보세요!</Text>
                <Text className="text-purple-200 mb-4">현장 경험이 많은 스태프와 배우가 전하는 피드백</Text>
                <Pressable
                  onPress={() => router.push("/feedback-request")}
                  className="bg-orange-400 self-start rounded-full px-5 py-2"
                >
                  <Text className="text-white font-semibold">피드백 받기</Text>
                </Pressable>
              </View>
              <Ionicons name="rocket" size={40} color="rgba(255,255,255,0.5)" />
            </View>
          </LinearGradient>

          {/* 통계 카드 */}
          <View className="bg-[#1A1A1A] rounded-xl flex-row mb-6">
            <StatCard
              label="연기 피드백 수"
              value={0}
              unit="건"
              onPress={() => router.push("/feedback-history")}
            />
            <View className="w-px bg-gray-700" />
            <StatCard
              label="작품 피드백 수"
              value={0}
              unit="건"
              onPress={() => router.push("/feedback-history")}
            />
            <View className="w-px bg-gray-700" />
            <StatCard label="나의 크레딧" value={0} onPress={() => router.push("/credits")} />
          </View>

          {/* 피드백 가능한 영상 */}
          <Text className="text-white text-lg font-bold mb-6">피드백 가능한 영상</Text>

          {/* 빈 상태 */}
          <View className="items-center py-12">
            <View className="w-24 h-24 mb-4">
              <Ionicons name="planet" size={80} color="#4B5563" />
            </View>
            <Text className="text-gray-500">{userName}님 조건에 맞는 피드백이 아직 없어요!</Text>
          </View>

          {/* 하단 정보 */}
          <View className="border-t border-gray-800 pt-6 pb-4 items-center">
            <Text className="text-gray-500 mb-2">레벨에 따라 최대 적립 크레딧이 달라집니다.</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400">현재 레벨 : 2</Text>
              <Text className="text-lg ml-1">🍪</Text>
            </View>
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

