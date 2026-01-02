import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TabType = "my" | "applied";

interface Job {
  id: string;
  category: string;
  genre: string;
  genreColor: string;
  title: string;
  daysLeft?: number;
  isClosed?: boolean;
  views: number;
}

const JOBS: Job[] = [
  {
    id: "1",
    category: "스태프",
    genre: "드라마/OTT",
    genreColor: "#3B82F6",
    title: "예시) 공고 글입니다",
    daysLeft: 59,
    views: 570,
  },
  {
    id: "2",
    category: "배우",
    genre: "웹드라마",
    genreColor: "#22C55E",
    title: "신규 웹드라마 주연 남자/여자 배우 모십니다. (20-30대)",
    isClosed: true,
    views: 37,
  },
  {
    id: "3",
    category: "배우",
    genre: "단편영화",
    genreColor: "#EF4444",
    title: "여자 고등학생 느낌의 배우 2명 구합니다!",
    isClosed: true,
    views: 49,
  },
  {
    id: "4",
    category: "배우",
    genre: "단편영화",
    genreColor: "#EF4444",
    title: "단편영화 배우 구합니다! (남배우 2분 구합니다)",
    isClosed: true,
    views: 69,
  },
  {
    id: "5",
    category: "배우",
    genre: "단편영화",
    genreColor: "#EF4444",
    title: "단편영화 <Love tomato juice>의 조연 평식 역 배우님을 모집합니다. (20대 초중반 남성 1)",
    isClosed: true,
    views: 70,
  },
  {
    id: "6",
    category: "배우",
    genre: "단편영화",
    genreColor: "#EF4444",
    title: "단편영화 <한때, 우리> 배우모집 공고(2명)",
    isClosed: true,
    views: 157,
  },
  {
    id: "7",
    category: "배우",
    genre: "광고",
    genreColor: "#F59E0B",
    title: "게임회사 (스카이위크) 코코마인 버츄얼 모델 구인합니다",
    isClosed: true,
    views: 96,
  },
  {
    id: "8",
    category: "배우",
    genre: "단편영화",
    genreColor: "#EF4444",
    title: "단편영화 배우 구인합니다 (2-30대 남성 2 / 중년 여성 1)",
    isClosed: true,
    views: 130,
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <View className="py-4 border-b border-gray-800">
      <View className="flex-row items-center mb-2">
        <View className="border border-gray-600 rounded-full px-3 py-1 mr-2">
          <Text className="text-gray-400 text-sm">{job.category}</Text>
        </View>
        <View className="rounded-full px-3 py-1" style={{ borderWidth: 1, borderColor: job.genreColor }}>
          <Text className="text-sm" style={{ color: job.genreColor }}>
            {job.genre}
          </Text>
        </View>
      </View>

      <View className="flex-row items-start justify-between">
        <Text className="text-white flex-1 mr-4" numberOfLines={2}>
          {job.title}
        </Text>
        {job.daysLeft !== undefined ? (
          <Text className="text-gray-400">D-{job.daysLeft}</Text>
        ) : job.isClosed ? (
          <Text className="text-red-400">마감</Text>
        ) : null}
      </View>

      <View className="flex-row items-center mt-2">
        <Ionicons name="eye-outline" size={14} color="#6B7280" />
        <Text className="text-gray-500 text-sm ml-1">{job.views}</Text>
      </View>
    </View>
  );
}

export default function JobsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("my");

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center justify-between px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold">구인공고</Text>
          <View className="flex-row items-center">
            <Pressable onPress={() => router.push("/job-create")} className="p-2">
              <Ionicons name="create-outline" size={24} color="white" />
            </Pressable>
            <Pressable className="p-2">
              <Ionicons name="search-outline" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* 탭 */}
          <View className="flex-row px-4 mb-4">
            <Pressable onPress={() => setActiveTab("my")} className="mr-6">
              <Text className={activeTab === "my" ? "text-white font-bold text-base" : "text-gray-500 text-base"}>
                내가 올린 공고
              </Text>
            </Pressable>
            <Pressable onPress={() => setActiveTab("applied")}>
              <Text className={activeTab === "applied" ? "text-white font-bold text-base" : "text-gray-500 text-base"}>
                지원한 공고
              </Text>
            </Pressable>
          </View>

          {/* 빈 상태 카드 */}
          <View className="mx-4 border border-dashed border-gray-600 rounded-xl py-16 items-center mb-4">
            <Text className="text-gray-500">
              {activeTab === "my" ? "아직 올린 공고가 없어요." : "아직 지원한 공고가 없어요."}
            </Text>
          </View>

          {/* 배너 */}
          <Pressable className="mx-4 mb-4">
            <View className="bg-purple-600 rounded-xl px-5 py-4 flex-row items-center justify-between">
              <Text className="text-white font-bold">인증된 스태프·배우를 구인해보세요!</Text>
              <View className="flex-row items-center">
                <Text className="text-purple-200 mr-1">사용법</Text>
                <Ionicons name="chevron-forward" size={16} color="#E9D5FF" />
              </View>
            </View>
          </Pressable>

          {/* 필터 */}
          <View className="flex-row px-4 mb-4">
            <Pressable className="border border-gray-600 rounded-full px-4 py-2 mr-3 flex-row items-center">
              <Text className="text-gray-300">배우&스태프</Text>
              <Ionicons name="chevron-down" size={16} color="#9CA3AF" style={{ marginLeft: 4 }} />
            </Pressable>
            <Pressable className="border border-gray-600 rounded-full px-4 py-2 flex-row items-center">
              <Text className="text-gray-300">분야 전체</Text>
              <Ionicons name="chevron-down" size={16} color="#9CA3AF" style={{ marginLeft: 4 }} />
            </Pressable>
          </View>

          {/* 구인 목록 */}
          <View className="px-4">
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
