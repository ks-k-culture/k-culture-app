import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

interface GuideSlide {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBgColor: string[];
  title: string;
  description: string;
  isLast?: boolean;
}

const GUIDE_SLIDES: GuideSlide[] = [
  {
    id: "1",
    icon: "planet",
    iconBgColor: ["#8B5CF6", "#6D28D9"],
    title: "K-Culture 플랫폼",
    description: "한류 문화의 모든 것을 연결하는 플랫폼입니다.",
  },
  {
    id: "2",
    icon: "checkmark-circle",
    iconBgColor: ["#A855F7", "#7C3AED"],
    title: "크레딧 인증",
    description: "내가 참여한 작품의 크레딧 인증을 받아보세요.",
  },
  {
    id: "3",
    icon: "people",
    iconBgColor: ["#F59E0B", "#D97706"],
    title: "직접적인 네트워킹",
    description: "작품에 참여한 사람들과 네트워킹을 해보세요.",
  },
  {
    id: "4",
    icon: "person-circle",
    iconBgColor: ["#6366F1", "#4F46E5"],
    title: "프로필 연동",
    description: "배우&모델 온라인 프로필을 연동해 보세요.",
  },
  {
    id: "5",
    icon: "rocket",
    iconBgColor: ["#8B5CF6", "#6D28D9"],
    title: "지금 바로 시작하세요!",
    description: "K-Culture와 함께 새로운 경험을 시작해보세요.",
    isLast: true,
  },
];

export default function GuideScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleStart = () => {
    router.replace("/(tabs)");
  };

  const renderSlide = ({ item }: { item: GuideSlide }) => (
    <View style={{ width }} className="flex-1 items-center justify-center px-8">
      <View className="mb-12">
        <LinearGradient
          colors={item.iconBgColor}
          className="w-40 h-40 rounded-3xl items-center justify-center"
          style={{ elevation: 10 }}
        >
          <Ionicons name={item.icon} size={80} color="white" />
        </LinearGradient>
      </View>

      <Text className="text-white text-2xl font-bold text-center mb-4">{item.title}</Text>
      <Text className="text-gray-400 text-base text-center leading-6">{item.description}</Text>
    </View>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="py-4">
        <Text className="text-white text-lg font-bold text-center">K-Culture 가이드</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={GUIDE_SLIDES}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />

      <View className="px-6 pb-8">
        <View className="flex-row justify-center mb-8">
          {GUIDE_SLIDES.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}
            />
          ))}
        </View>

        {currentIndex === GUIDE_SLIDES.length - 1 ? (
          <Pressable onPress={handleStart}>
            <LinearGradient
              colors={["#6366F1", "#06B6D4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-4 rounded-xl items-center"
            >
              <Text className="text-white text-base font-semibold">시작하기</Text>
            </LinearGradient>
          </Pressable>
        ) : (
          <View className="h-14" />
        )}
      </View>
    </SafeAreaView>
  );
}
