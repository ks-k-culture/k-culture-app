import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Text } from "@/components/ui/text";

type TabType = "production" | "postProduction";

interface Category {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

interface Team {
  id: string;
  name: string;
  category: string;
  image?: string;
  hasPhone: boolean;
  hasEmail: boolean;
  worksCount?: number;
}

const PRODUCTION_CATEGORIES: Category[] = [
  { id: "1", icon: "briefcase-outline", label: "제작" },
  { id: "2", icon: "calendar-outline", label: "연출" },
  { id: "3", icon: "pencil-outline", label: "작가" },
  { id: "4", icon: "book-outline", label: "스토리보드" },
  { id: "5", icon: "camera-outline", label: "촬영" },
  { id: "6", icon: "bulb-outline", label: "조명" },
  { id: "7", icon: "build-outline", label: "그립" },
  { id: "8", icon: "mic-outline", label: "동시녹음" },
  { id: "9", icon: "grid-outline", label: "세트" },
  { id: "10", icon: "color-palette-outline", label: "미술" },
  { id: "11", icon: "shirt-outline", label: "의상/소품" },
  { id: "12", icon: "happy-outline", label: "헤어/분장" },
];

const PRODUCTION_CATEGORIES_EXPANDED: Category[] = [
  { id: "13", icon: "cut-outline", label: "현장편집" },
  { id: "14", icon: "server-outline", label: "데이터(DIT)" },
  { id: "15", icon: "sparkles-outline", label: "특수효과" },
  { id: "16", icon: "airplane-outline", label: "특수촬영/드론" },
  { id: "17", icon: "body-outline", label: "무술/스턴트" },
  { id: "18", icon: "accessibility-outline", label: "안무" },
  { id: "19", icon: "barbell-outline", label: "피지컬" },
  { id: "20", icon: "people-outline", label: "보조출연" },
  { id: "21", icon: "business-outline", label: "스틸/메이킹" },
  { id: "22", icon: "location-outline", label: "로케이션" },
  { id: "23", icon: "person-add-outline", label: "캐스팅" },
  { id: "24", icon: "aperture-outline", label: "장비렌탈" },
  { id: "25", icon: "car-outline", label: "차량" },
  { id: "26", icon: "restaurant-outline", label: "밥차" },
  { id: "27", icon: "cafe-outline", label: "간식차" },
  { id: "28", icon: "cafe-outline", label: "커피차" },
];

const POST_PRODUCTION_CATEGORIES: Category[] = [
  { id: "p1", icon: "cut-outline", label: "편집" },
  { id: "p2", icon: "film-outline", label: "VFX" },
  { id: "p3", icon: "pulse-outline", label: "모션그래픽" },
  { id: "p4", icon: "tv-outline", label: "색보정(DI)" },
  { id: "p5", icon: "radio-outline", label: "사운드" },
  { id: "p6", icon: "musical-notes-outline", label: "음악" },
  { id: "p7", icon: "chatbox-outline", label: "자막" },
];

const TEAMS: Team[] = [
  { id: "1", name: "국민커피차더자유", category: "커피차", image: "https://picsum.photos/100?random=301", hasPhone: true, hasEmail: true },
  { id: "2", name: "나이스츄미츄", category: "간식차, 커피차", image: "https://picsum.photos/100?random=302", hasPhone: true, hasEmail: true },
  { id: "3", name: "데일리 퀘스트", category: "데이터(DIT)", hasPhone: true, hasEmail: true },
  { id: "4", name: "서울액션스쿨", category: "무술/스턴트", image: "https://picsum.photos/100?random=304", hasPhone: true, hasEmail: true },
  { id: "5", name: "128컴퍼니", category: "의상/소품", hasPhone: true, hasEmail: true, worksCount: 14 },
  { id: "6", name: "그립아일랜드", category: "그립", hasPhone: true, hasEmail: true },
  { id: "7", name: "(주) 에임허브", category: "데이터(DIT)", hasPhone: true, hasEmail: true, worksCount: 1 },
  { id: "8", name: "(주) 아이피박스...", category: "제작", hasPhone: true, worksCount: 1 },
  { id: "9", name: "(주) 하이그라운드", category: "제작", hasPhone: true, worksCount: 1 },
  { id: "10", name: "(주) 유오케이이...", category: "색보정(DI)", hasPhone: true, hasEmail: true, worksCount: 21 },
  { id: "11", name: "(주) 블루캡", category: "사운드, 음악", hasPhone: true, hasEmail: true, worksCount: 6 },
  { id: "12", name: "(주) 덱스터스튜...", category: "VFX, 색보정(DI)", hasPhone: true, hasEmail: true },
];

function CategoryButton({ category, isSelected }: { category: Category; isSelected?: boolean }) {
  return (
    <Pressable className="w-1/4 items-center py-4">
      <Ionicons name={category.icon} size={28} color={isSelected ? "#FFFFFF" : "#9CA3AF"} />
      <Text className={`text-sm mt-2 ${isSelected ? "" : "text-gray-400"}`}>{category.label}</Text>
    </Pressable>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <View className="w-1/3 items-center mb-6">
      <View className="w-16 h-16 rounded-full bg-gray-700 items-center justify-center overflow-hidden mb-2">
        {team.image ? (
          <Image source={{ uri: team.image }} className="w-full h-full" contentFit="cover" />
        ) : (
          <Ionicons name="people" size={28} color="#9CA3AF" />
        )}
      </View>
      <Text className="font-semibold text-center text-sm" numberOfLines={1}>{team.name}</Text>
      <Text className="text-gray-500 text-xs text-center" numberOfLines={1}>{team.category}</Text>
      <View className="flex-row items-center mt-1">
        {team.hasPhone && <Ionicons name="call-outline" size={14} color="#EF4444" style={{ marginRight: 4 }} />}
        {team.hasEmail && <Ionicons name="mail-outline" size={14} color="#22C55E" style={{ marginRight: 4 }} />}
        {team.worksCount && <Text className="text-gray-400 text-xs">{team.worksCount}편</Text>}
      </View>
    </View>
  );
}

export default function TeamProfilesScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("production");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = activeTab === "production"
    ? isExpanded
      ? [...PRODUCTION_CATEGORIES, ...PRODUCTION_CATEGORIES_EXPANDED]
      : PRODUCTION_CATEGORIES
    : POST_PRODUCTION_CATEGORIES;

  return (
    <ScreenWrapper>
      <Header
        title="팀 찾기"
        rightComponent={
          <View className="flex-row items-center">
            <Pressable onPress={() => router.push("/team-favorites")} className="p-2">
              <Ionicons name="star-outline" size={24} color="white" />
            </Pressable>
            <Pressable onPress={() => router.push("/team-search")} className="p-2">
              <Ionicons name="search-outline" size={24} color="white" />
            </Pressable>
          </View>
        }
      />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 카테고리 섹션 */}
        <View className="mx-4 bg-[#1A1A1A] rounded-2xl p-4 mb-4">
          {/* 탭 */}
          <View className="flex-row bg-[#2A2A2A] rounded-xl p-1 mb-4">
            <Pressable
              onPress={() => { setActiveTab("production"); setIsExpanded(false); }}
              className="flex-1 py-3 rounded-lg items-center"
              style={{ backgroundColor: activeTab === "production" ? "white" : "transparent" }}
            >
              <Text className={activeTab === "production" ? "text-black font-semibold" : "text-gray-400"}>프로덕션</Text>
            </Pressable>
            <Pressable
              onPress={() => { setActiveTab("postProduction"); setIsExpanded(false); }}
              className="flex-1 py-3 rounded-lg items-center"
              style={{ backgroundColor: activeTab === "postProduction" ? "white" : "transparent" }}
            >
              <Text className={activeTab === "postProduction" ? "text-black font-semibold" : "text-gray-400"}>포스트프로덕션</Text>
            </Pressable>
          </View>

          {/* 카테고리 그리드 */}
          <View className="flex-row flex-wrap">
            {categories.map((category) => (
              <CategoryButton key={category.id} category={category} />
            ))}
          </View>

          {/* 더보기/접기 버튼 */}
          {activeTab === "production" && (
            <Pressable onPress={() => setIsExpanded(!isExpanded)} className="flex-row items-center justify-center py-2">
              <Text className="text-gray-400 mr-1">{isExpanded ? "접기" : "더보기"}</Text>
              <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={16} color="#9CA3AF" />
            </Pressable>
          )}
        </View>

        {/* 팀 등록 배너 */}
        <Pressable onPress={() => router.push("/team-register")} className="mx-4 mb-6">
          <View className="bg-orange-400 rounded-2xl px-5 py-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Ionicons name="add-circle-outline" size={24} color="white" />
              <Text className="font-bold text-base ml-3">지금바로 팀을 등록해 보세요!</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </Pressable>

        {/* 팀 목록 */}
        <View className="px-4">
          <View className="flex-row flex-wrap">
            {TEAMS.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </View>
        </View>

        {/* 팀 등록하기 링크 */}
        <Pressable onPress={() => router.push("/team-register")} className="items-center py-8">
          <Text className="text-gray-400 underline">팀 등록하기</Text>
        </Pressable>

        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
