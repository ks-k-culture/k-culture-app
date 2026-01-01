import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Gender = "전체" | "남자" | "여자";
type SortOption = "추천순" | "등록순" | "인기순" | "나이순(오름차순)" | "나이순(내림차순)";

interface Actor {
  id: string;
  name: string;
  gender: "남자" | "여자";
  age: number;
  height: number;
  weight: number;
  image: string;
  likes: number;
  isNew?: boolean;
  isVerified?: boolean;
}

const ACTORS: Actor[] = [
  {
    id: "1",
    name: "이무준",
    gender: "남자",
    age: 28,
    height: 173,
    weight: 90,
    image: "https://picsum.photos/200/300?random=101",
    likes: 2,
    isVerified: true,
  },
  {
    id: "2",
    name: "김세훈",
    gender: "남자",
    age: 30,
    height: 174,
    weight: 61,
    image: "https://picsum.photos/200/300?random=102",
    likes: 2,
    isVerified: true,
  },
  {
    id: "3",
    name: "박소영",
    gender: "여자",
    age: 27,
    height: 160,
    weight: 43,
    image: "https://picsum.photos/200/300?random=103",
    likes: 1,
  },
  {
    id: "4",
    name: "민지우",
    gender: "여자",
    age: 22,
    height: 156,
    weight: 61,
    image: "https://picsum.photos/200/300?random=104",
    likes: 0,
    isNew: true,
  },
  {
    id: "5",
    name: "채상민",
    gender: "남자",
    age: 34,
    height: 188,
    weight: 85,
    image: "https://picsum.photos/200/300?random=105",
    likes: 0,
    isNew: true,
  },
  {
    id: "6",
    name: "우예주",
    gender: "여자",
    age: 29,
    height: 162,
    weight: 52,
    image: "https://picsum.photos/200/300?random=106",
    likes: 1,
  },
  {
    id: "7",
    name: "배가현",
    gender: "여자",
    age: 26,
    height: 160,
    weight: 46,
    image: "https://picsum.photos/200/300?random=107",
    likes: 1,
  },
  {
    id: "8",
    name: "배연희",
    gender: "여자",
    age: 71,
    height: 158,
    weight: 49,
    image: "https://picsum.photos/200/300?random=108",
    likes: 1,
  },
  {
    id: "9",
    name: "이은미",
    gender: "여자",
    age: 31,
    height: 162,
    weight: 60,
    image: "https://picsum.photos/200/300?random=109",
    likes: 2,
  },
];

const SORT_OPTIONS: SortOption[] = ["추천순", "등록순", "인기순", "나이순(오름차순)", "나이순(내림차순)"];

function StatBar({ value, max, color }: { value: number; max: number; color: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <View className="flex-1 h-1.5 bg-gray-700 rounded-full ml-2">
      <View className="h-full rounded-full" style={{ width: `${percentage}%`, backgroundColor: color }} />
    </View>
  );
}

function ActorCard({ actor }: { actor: Actor }) {
  const handlePress = () => {
    router.push({
      pathname: "/actor-detail",
      params: { id: actor.id, name: actor.name },
    });
  };

  return (
    <Pressable onPress={handlePress} className="w-[31%] mb-4">
      <View className="relative rounded-xl overflow-hidden" style={{ aspectRatio: 3 / 4 }}>
        <Image source={{ uri: actor.image }} className="w-full h-full" contentFit="cover" />

        {actor.isNew && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-0.5 rounded">
            <Text className="text-white text-xs font-bold">NEW</Text>
          </View>
        )}

        {actor.isVerified && (
          <View className="absolute top-2 right-2">
            <Ionicons name="checkmark-circle" size={20} color="#A78BFA" />
          </View>
        )}

        <View className="absolute bottom-2 left-2 flex-row items-center bg-black/60 px-2 py-1 rounded-full">
          <Ionicons name="thumbs-up" size={12} color="white" />
          <Text className="text-white text-xs ml-1">{actor.likes}</Text>
        </View>
      </View>

      <View className="mt-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-white font-semibold">{actor.name}</Text>
          <View
            className="px-2 py-0.5 rounded border"
            style={{
              borderColor: actor.gender === "남자" ? "#6B7280" : "#EC4899",
            }}
          >
            <Text className="text-xs" style={{ color: actor.gender === "남자" ? "#9CA3AF" : "#F472B6" }}>
              {actor.gender}
            </Text>
          </View>
        </View>

        <View className="mt-1.5 gap-1">
          <View className="flex-row items-center">
            <Text className="text-gray-400 text-xs w-12">{actor.age}세</Text>
            <StatBar value={actor.age} max={90} color="#6366F1" />
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-400 text-xs w-12">{actor.height} cm</Text>
            <StatBar value={actor.height - 130} max={70} color="#6366F1" />
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-400 text-xs w-12">{actor.weight} kg</Text>
            <StatBar value={actor.weight - 30} max={70} color="#EC4899" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function FilterPanel({
  visible,
  onClose,
  gender,
  setGender,
}: {
  visible: boolean;
  onClose: () => void;
  gender: Gender;
  setGender: (g: Gender) => void;
}) {
  const [ageRange, setAgeRange] = useState([0, 90]);
  const [heightRange, setHeightRange] = useState([130, 200]);
  const [weightRange, setWeightRange] = useState([30, 100]);

  if (!visible) return null;

  const handleReset = () => {
    setGender("전체");
    setAgeRange([0, 90]);
    setHeightRange([130, 200]);
    setWeightRange([30, 100]);
  };

  return (
    <Animated.View
      entering={SlideInDown.duration(300)}
      exiting={SlideOutDown.duration(200)}
      className="bg-[#1A1A1A] rounded-t-2xl px-5 pt-6 pb-8"
    >
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row gap-2">
          {(["전체", "남자", "여자"] as Gender[]).map((g) => (
            <Pressable
              key={g}
              onPress={() => setGender(g)}
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: gender === g ? "transparent" : "transparent",
                borderWidth: 1,
                borderColor: gender === g ? "white" : "#4B5563",
              }}
            >
              <Text className={gender === g ? "text-white font-semibold" : "text-gray-400"}>{g}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable onPress={handleReset} className="flex-row items-center">
          <Ionicons name="refresh" size={16} color="#EF4444" />
          <Text className="text-red-500 ml-1">초기화</Text>
        </Pressable>
      </View>

      <View className="gap-4">
        <View className="flex-row items-center">
          <Text className="text-white w-16">나이</Text>
          <View className="flex-1 h-1 bg-gray-600 rounded-full mx-3">
            <View className="absolute left-[10%] right-[10%] h-full bg-white rounded-full" />
            <View className="absolute left-[10%] w-4 h-4 bg-white rounded-full -top-1.5" />
            <View className="absolute right-[10%] w-4 h-4 bg-white rounded-full -top-1.5" />
          </View>
          <Text className="text-gray-400 w-20 text-right">0 ~ 90 세</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-white w-16">키</Text>
          <View className="flex-1 h-1 bg-gray-600 rounded-full mx-3">
            <View className="absolute left-[5%] right-[5%] h-full bg-white rounded-full" />
            <View className="absolute left-[5%] w-4 h-4 bg-white rounded-full -top-1.5" />
            <View className="absolute right-[5%] w-4 h-4 bg-white rounded-full -top-1.5" />
          </View>
          <Text className="text-gray-400 w-20 text-right">130 ~ 200 cm</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-white w-16">몸무게</Text>
          <View className="flex-1 h-1 bg-gray-600 rounded-full mx-3">
            <View className="absolute left-[15%] right-[5%] h-full bg-white rounded-full" />
            <View className="absolute left-[15%] w-4 h-4 bg-white rounded-full -top-1.5" />
            <View className="absolute right-[5%] w-4 h-4 bg-white rounded-full -top-1.5" />
          </View>
          <Text className="text-gray-400 w-20 text-right">30 ~ 100 kg</Text>
        </View>
      </View>

      <Pressable className="bg-orange-400 rounded-xl py-4 items-center mt-6">
        <Text className="text-black font-bold text-lg">적용</Text>
      </Pressable>

      <Pressable onPress={onClose} className="flex-row items-center justify-center mt-4">
        <Ionicons name="chevron-up" size={20} color="#9CA3AF" />
        <Text className="text-gray-400 ml-1">접기</Text>
      </Pressable>
    </Animated.View>
  );
}

function SortModal({
  visible,
  onClose,
  selected,
  onSelect,
}: {
  visible: boolean;
  onClose: () => void;
  selected: SortOption;
  onSelect: (option: SortOption) => void;
}) {
  if (!visible) return null;

  return (
    <Pressable onPress={onClose} className="absolute inset-0 bg-black/50 justify-end">
      <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(150)}
        className="bg-[#1A1A1A] rounded-t-2xl px-5 py-6"
      >
        {SORT_OPTIONS.map((option) => (
          <Pressable
            key={option}
            onPress={() => {
              onSelect(option);
              onClose();
            }}
            className="py-4"
          >
            <View className="flex-row items-center">
              {selected === option && <Ionicons name="checkmark" size={20} color="#F59E0B" />}
              <Text
                className={`text-base ml-2 ${selected === option ? "text-orange-400 font-semibold" : "text-gray-300"}`}
              >
                {option}
              </Text>
            </View>
          </Pressable>
        ))}
      </Animated.View>
    </Pressable>
  );
}

export default function ActorProfilesScreen() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [gender, setGender] = useState<Gender>("전체");
  const [sortOption, setSortOption] = useState<SortOption>("추천순");

  const filteredActors = ACTORS.filter((actor) => {
    if (gender === "전체") return true;
    return actor.gender === gender;
  });

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* 헤더 */}
        <View className="flex-row items-center justify-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="absolute left-4 p-2">
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold">배우 프로필</Text>
        </View>

        {/* 필터/정렬 바 */}
        <View className="flex-row items-center justify-between px-4 py-3">
          <Pressable onPress={() => setShowFilter(!showFilter)} className="flex-row items-center">
            <Ionicons name="filter" size={18} color="white" />
            <Text className="text-white ml-2">필터</Text>
          </Pressable>
          <Pressable onPress={() => setShowSortModal(true)} className="flex-row items-center">
            <Ionicons name="swap-vertical" size={18} color="white" />
            <Text className="text-white ml-2">{sortOption}</Text>
          </Pressable>
        </View>

        {/* 필터 패널 */}
        {showFilter && (
          <FilterPanel
            visible={showFilter}
            onClose={() => setShowFilter(false)}
            gender={gender}
            setGender={setGender}
          />
        )}

        {/* 배우 목록 */}
        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between pt-4">
            {filteredActors.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </View>
          <View className="h-8" />
        </ScrollView>

        {/* 정렬 모달 */}
        <SortModal
          visible={showSortModal}
          onClose={() => setShowSortModal(false)}
          selected={sortOption}
          onSelect={setSortOption}
        />
      </SafeAreaView>
    </View>
  );
}
