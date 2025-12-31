import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDrawer } from "@/contexts/drawer-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BANNERS = [
  { id: "1", title: "K-Culture 서비스 1:1 문의하기", color: "#EAB308" },
  { id: "2", title: "새로운 작품 등록하기", color: "#8B5CF6" },
  { id: "3", title: "인기 배우 프로필 보기", color: "#EC4899" },
];

const MENU_BUTTONS_ROW1 = [
  { id: "1", title: "배우 찾기", icon: "person-outline" as const },
  { id: "2", title: "팀 찾기", icon: "people-outline" as const },
];

const MENU_BUTTONS_ROW2 = [
  { id: "1", title: "이벤트", icon: "calendar-outline" as const },
  { id: "2", title: "피드백", icon: "chatbox-outline" as const },
  { id: "3", title: "구인공고", icon: "briefcase-outline" as const },
];

const COMMUNITY_POSTS = [
  { id: "1", category: "자유 게시판", title: "[작업일지] 게시 오류 안내", likes: 1, comments: 1 },
  { id: "2", category: "질문 게시판", title: "봄풀 추천 부탁드립니다!", likes: 2, comments: 0 },
  { id: "3", category: "현장 스토리", title: "나만아는실수", likes: 2, comments: 0 },
  { id: "4", category: "신문고 게시판", title: "아직도 현장에서 군기잡는팀 있다는데...", likes: 4, comments: 0 },
];

const CREATORS = [
  { id: "1", name: "김민수", image: "https://picsum.photos/100?random=1" },
  { id: "2", name: "이영희", image: "https://picsum.photos/100?random=2" },
  { id: "3", name: "박철수", image: "https://picsum.photos/100?random=3" },
  { id: "4", name: "정수진", image: "https://picsum.photos/100?random=4" },
  { id: "5", name: "최민호", image: "https://picsum.photos/100?random=5" },
  { id: "6", name: "강지은", image: "https://picsum.photos/100?random=6" },
  { id: "7", name: "윤서연", image: "https://picsum.photos/100?random=7" },
  { id: "8", name: "임재현", image: "https://picsum.photos/100?random=8" },
];

const NEW_WORKS = [
  { id: "1", title: "가족계획 시즌2", director: "김정민", participants: 0 },
  { id: "2", title: "소년시대 시즌2", director: "이명우", participants: 0 },
  { id: "3", title: "지금 불륜이 문제가...", director: "이창희", participants: 0 },
];

const MOVIES = [
  { id: "1", title: "새해전야", director: "홍지영", participants: 1, image: "https://picsum.photos/200/300?random=10" },
  {
    id: "2",
    title: "말할 수 없는 비밀",
    director: "서유민",
    participants: 0,
    image: "https://picsum.photos/200/300?random=11",
  },
  {
    id: "3",
    title: "에스퍼의 빛",
    director: "정재훈",
    participants: 1,
    image: "https://picsum.photos/200/300?random=12",
  },
];

const DRAMAS = [
  {
    id: "1",
    title: "펜트하우스 3",
    director: "주동민",
    participants: 2,
    image: "https://picsum.photos/200/300?random=20",
  },
  { id: "2", title: "넥오프", director: "박현석", participants: 4, image: "https://picsum.photos/200/300?random=21" },
  {
    id: "3",
    title: "버터플라이",
    director: "키타오 사쿠라이",
    participants: 5,
    image: "https://picsum.photos/200/300?random=22",
  },
  {
    id: "4",
    title: "LTNS",
    director: "임대형, 전고운",
    participants: 3,
    image: "https://picsum.photos/200/300?random=23",
  },
  {
    id: "5",
    title: "너와 나의 경찰수업",
    director: "김병수",
    participants: 2,
    image: "https://picsum.photos/200/300?random=24",
  },
  {
    id: "6",
    title: "마이 네임",
    director: "김진민",
    participants: 2,
    image: "https://picsum.photos/200/300?random=25",
  },
];

const SHORT_FILMS = [
  { id: "1", title: "절규", director: "김은성", participants: 1, image: null },
  { id: "2", title: "갈비", director: "송에스더", participants: 1, image: null },
  {
    id: "3",
    title: "우라까이 하루키",
    director: "김초희",
    participants: 1,
    image: "https://picsum.photos/200/300?random=30",
  },
  { id: "4", title: "거울: 비춰진 진실", director: "박경서", participants: 2, image: null },
  { id: "5", title: "복숭아", director: "박경서", participants: 1, image: null },
  { id: "6", title: "울고싶은 날", director: "안찬우", participants: 1, image: null },
];

const WEB_DRAMAS = [
  { id: "1", title: "카페인 로맨스", director: "", participants: 2, image: "https://picsum.photos/200/300?random=40" },
  { id: "2", title: "짧은대본 망한소개팅", director: "짧은대본", participants: 1, image: null },
  { id: "3", title: "정글기획 생존기", director: "", participants: 1, image: null },
  {
    id: "4",
    title: "무장해제 로맨스",
    director: "정다미",
    participants: 1,
    image: "https://picsum.photos/200/300?random=41",
  },
  { id: "5", title: "하트웨이", director: "이예진", participants: 1, image: "https://picsum.photos/200/300?random=42" },
  {
    id: "6",
    title: "러브 인 블랙홀",
    director: "홍충기",
    participants: 1,
    image: "https://picsum.photos/200/300?random=43",
  },
  {
    id: "7",
    title: "시간을 담은 카페",
    director: "김민수",
    participants: 2,
    image: "https://picsum.photos/200/300?random=44",
  },
];

const SHORT_FORM_DRAMAS = [
  {
    id: "1",
    title: "러브웨이브",
    director: "이남철",
    participants: 1,
    image: "https://picsum.photos/200/300?random=50",
  },
  {
    id: "2",
    title: "죽느니 퇴사하겠습니다",
    director: "안소희",
    participants: 0,
    image: "https://picsum.photos/200/300?random=51",
  },
  {
    id: "3",
    title: "로미오와 로미오와 줄리엣",
    director: "전보람",
    participants: 1,
    image: "https://picsum.photos/200/300?random=52",
  },
  { id: "4", title: "악센트", director: "박태민", participants: 1, image: "https://picsum.photos/200/300?random=53" },
  {
    id: "5",
    title: "더블 플레이",
    director: "박태민",
    participants: 1,
    image: "https://picsum.photos/200/300?random=54",
  },
  {
    id: "6",
    title: "폭풍같은 결혼생활",
    director: "이창우",
    participants: 1,
    image: "https://picsum.photos/200/300?random=55",
  },
  {
    id: "7",
    title: "첫사랑 시즌2",
    director: "김지훈",
    participants: 3,
    image: "https://picsum.photos/200/300?random=56",
  },
];

const BROADCASTS = [
  {
    id: "1",
    title: "펜트하우스",
    director: "김남호",
    participants: 1,
    image: "https://picsum.photos/200/300?random=60",
  },
  { id: "2", title: "슈퍼액션", director: "김종기", participants: 1, image: "https://picsum.photos/200/300?random=61" },
  {
    id: "3",
    title: "인더숲 BTS편",
    director: "박준수, 기항미",
    participants: 2,
    image: "https://picsum.photos/200/300?random=62",
  },
  { id: "4", title: "EBS 다큐프라임", director: "", participants: 1, image: "https://picsum.photos/200/300?random=63" },
  {
    id: "5",
    title: "무엇이든 물어보세요",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=64",
  },
  {
    id: "6",
    title: "그것이 알고싶다",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=65",
  },
];

const MUSIC_VIDEOS = [
  { id: "1", title: "안녕멜로디", director: "비안", participants: 1, image: "https://picsum.photos/200/300?random=70" },
  {
    id: "2",
    title: "forbidden midnight",
    director: "공승현",
    participants: 1,
    image: "https://picsum.photos/200/300?random=71",
  },
  {
    id: "3",
    title: "입술에 걸린 말",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=72",
  },
  {
    id: "4",
    title: "haedache",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=73",
  },
  {
    id: "5",
    title: "기상청",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=74",
  },
  { id: "6", title: "마크툽-시작의아이", director: "김경선", participants: 1, image: null },
];

const ADVERTISEMENTS = [
  { id: "1", title: "농심 보노스프", director: "", participants: 1, image: "https://picsum.photos/200/300?random=80" },
  { id: "2", title: "유니세프", director: "", participants: 1, image: null },
  {
    id: "3",
    title: "77인의 써보고 유플추천드림",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=81",
  },
  { id: "4", title: "sk하이닉스", director: "방준영", participants: 1, image: null },
  { id: "5", title: "북두의 권", director: "", participants: 1, image: null },
  { id: "6", title: "LG에너지솔루션", director: "유승엽", participants: 1, image: null },
  { id: "7", title: "삼성전자", director: "이민호", participants: 2, image: "https://picsum.photos/200/300?random=82" },
];

const PERFORMANCES = [
  {
    id: "1",
    title: "쉬어매드니스",
    director: "이레아, 김서현",
    participants: 1,
    image: "https://picsum.photos/200/300?random=90",
  },
  { id: "2", title: "응답하라썬니", director: "", participants: 1, image: null },
  { id: "3", title: "택시드리벌", director: "", participants: 1, image: null },
  { id: "4", title: "칼레야 부탈소로", director: "김재청 연출", participants: 1, image: null },
  { id: "5", title: "프리즌 더 라스트", director: "", participants: 1, image: null },
  { id: "6", title: "반쪽이전", director: "권호성 연출", participants: 1, image: null },
  { id: "7", title: "태양의 꽃", director: "추정화 연출", participants: 1, image: null },
  { id: "8", title: "졸풍목우", director: "구태한 연출", participants: 1, image: null },
  {
    id: "9",
    title: "지우는 선",
    director: "한은성",
    participants: 1,
    image: "https://picsum.photos/200/300?random=91",
  },
];

interface WorkItem {
  id: string;
  title: string;
  director: string;
  participants: number;
  image?: string | null;
}

interface WorkSectionProps {
  title: string;
  emoji: string;
  data: WorkItem[];
  columns?: 2 | 3;
  titleColor?: string;
  lineColor?: string;
}

function WorkSection({
  title,
  emoji,
  data,
  columns = 3,
  titleColor = "#A78BFA",
  lineColor = "#7C3AED",
}: WorkSectionProps) {
  const displayData = data.slice(0, 6);
  const hasMore = data.length > 6;

  return (
    <View className="px-6 mt-8">
      {/* 섹션 헤더 */}
      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
        <Text className="font-bold text-sm mx-4" style={{ color: titleColor }}>
          {title} {emoji}
        </Text>
        <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
      </View>

      <View className="flex-row flex-wrap justify-between">
        {displayData.map((item) => (
          <Pressable key={item.id} className="mb-4" style={{ width: columns === 3 ? "31%" : "48%" }}>
            <View className="rounded-xl overflow-hidden mb-2" style={{ aspectRatio: columns === 3 ? 2 / 3 : 1 }}>
              {item.image ? (
                <Image source={{ uri: item.image }} className="w-full h-full" contentFit="cover" />
              ) : (
                <View className="w-full h-full bg-purple-900/50 items-center justify-center">
                  <Ionicons name="film" size={36} color="#A78BFA" />
                </View>
              )}
              {item.participants > 0 && (
                <View className="absolute bottom-2 right-2 flex-row items-center bg-black/70 px-2 py-1 rounded">
                  <Ionicons name="person" size={10} color="white" />
                  <Text className="text-white text-xs ml-1">{item.participants}</Text>
                </View>
              )}
            </View>
            <Text className="text-white font-semibold text-sm" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="text-gray-400 text-xs" numberOfLines={1}>
              감독: {item.director || "-"}
            </Text>
          </Pressable>
        ))}
      </View>

      {hasMore && (
        <Pressable className="flex-row items-center justify-end mt-2">
          <Text className="text-purple-400 text-sm font-semibold">더보기</Text>
          <Ionicons name="chevron-forward" size={16} color="#A78BFA" />
        </Pressable>
      )}
    </View>
  );
}

export default function HomeScreen() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerRef = useRef<FlatList>(null);
  const { openDrawer } = useDrawer();

  const handleBannerScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 48));
    setCurrentBannerIndex(index);
  };

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-4 py-3">
          <Pressable className="p-2" onPress={openDrawer}>
            <Ionicons name="menu" size={24} color="white" />
          </Pressable>

          <Text className="text-white text-2xl font-bold">K-Culture</Text>

          <View className="flex-row gap-2">
            <Pressable className="p-2" onPress={() => router.push("/notifications")}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </Pressable>
            <Pressable className="p-2" onPress={() => router.push("/messages")}>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 mt-4">
            <FlatList
              ref={bannerRef}
              data={BANNERS}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleBannerScroll}
              scrollEventThrottle={16}
              renderItem={({ item }) => (
                <Pressable
                  style={{ width: SCREEN_WIDTH - 48 }}
                  className="h-32 rounded-2xl justify-center items-center px-6"
                  onPress={() => {}}
                >
                  <LinearGradient
                    colors={[item.color, `${item.color}CC`]}
                    className="absolute inset-0 rounded-2xl"
                    style={StyleSheet.absoluteFillObject}
                  />
                  <View className="flex-row items-center">
                    <Ionicons name="chatbubble" size={28} color="#3C1E1E" style={{ marginRight: 12 }} />
                    <Text className="text-gray-900 text-lg font-bold">{item.title}</Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />

            <View className="flex-row justify-center mt-3 gap-2">
              {BANNERS.map((_, index) => (
                <View
                  key={index}
                  className={`h-1.5 rounded-full ${index === currentBannerIndex ? "w-6 bg-white" : "w-1.5 bg-gray-600"}`}
                />
              ))}
            </View>
          </View>

          <View className="px-6 mt-6">
            <View className="flex-row gap-3 mb-3">
              {MENU_BUTTONS_ROW1.map((button) => (
                <Pressable
                  key={button.id}
                  className="flex-1 bg-teal-900/50 border border-teal-700 rounded-xl py-4 items-center active:opacity-80"
                >
                  <Ionicons name={button.icon} size={20} color="#5EEAD4" style={{ marginBottom: 4 }} />
                  <Text className="text-teal-300 font-semibold">{button.title}</Text>
                </Pressable>
              ))}
            </View>

            <View className="flex-row gap-3">
              {MENU_BUTTONS_ROW2.map((button) => (
                <Pressable
                  key={button.id}
                  className="flex-1 bg-teal-900/50 border border-teal-700 rounded-xl py-4 items-center active:opacity-80"
                >
                  <Ionicons name={button.icon} size={18} color="#5EEAD4" style={{ marginBottom: 4 }} />
                  <Text className="text-teal-300 font-semibold text-sm">{button.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="px-6 mt-8">
            <View className="flex-row items-center mb-4">
              <View className="flex-1 h-px bg-gray-700" />
              <Text className="text-white font-bold text-base mx-4">커뮤니티</Text>
              <View className="flex-1 h-px bg-gray-700" />
            </View>

            {COMMUNITY_POSTS.map((post) => (
              <Pressable key={post.id} className="flex-row items-center py-3 border-b border-gray-800">
                <Text className="text-gray-400 text-sm w-24">{post.category}</Text>
                <Text className="text-white flex-1 text-sm" numberOfLines={1}>
                  {post.title}
                </Text>
                <View className="flex-row items-center gap-3">
                  <View className="flex-row items-center">
                    <Ionicons name="heart-outline" size={14} color="#9CA3AF" />
                    <Text className="text-gray-400 text-xs ml-1">{post.likes}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={14} color="#9CA3AF" />
                    <Text className="text-gray-400 text-xs ml-1">{post.comments}</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          <View className="mt-8">
            <Text className="text-white font-bold text-lg px-6 mb-4">작품을 만드는 사람들 🔥</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6">
              {CREATORS.map((creator, index) => (
                <Pressable key={creator.id} className="items-center mr-4" style={{ marginLeft: index === 0 ? 0 : 0 }}>
                  <View className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
                    <Image source={{ uri: creator.image }} className="w-full h-full" contentFit="cover" />
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View className="mt-8">
            <Text className="text-white font-bold text-lg px-6 mb-4">새롭게 추가된 작품 🎬</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6">
              {NEW_WORKS.map((work) => (
                <Pressable key={work.id} className="mr-4 w-40">
                  <View className="w-40 h-48 bg-purple-900/50 rounded-xl items-center justify-center mb-2">
                    <Ionicons name="film" size={48} color="#A78BFA" />
                    <View className="absolute bottom-2 right-2 flex-row items-center bg-black/50 px-2 py-1 rounded">
                      <Ionicons name="person" size={12} color="white" />
                      <Text className="text-white text-xs ml-1">{work.participants}</Text>
                    </View>
                  </View>
                  <Text className="text-white font-semibold" numberOfLines={1}>
                    {work.title}
                  </Text>
                  <Text className="text-gray-400 text-sm">감독: {work.director}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          <View className="px-6 mt-8">
            <Pressable className="rounded-2xl overflow-hidden">
              <LinearGradient colors={["#8B5CF6", "#6366F1"]} className="p-5 flex-row items-center justify-between">
                <View>
                  <Text className="text-white font-bold text-lg">스파크로 작품 응원하기</Text>
                  <Text className="text-purple-200 text-sm mt-1">매일 새로운 작품을 발견하고 응원해보세요</Text>
                </View>
                <View className="bg-white/20 p-3 rounded-full">
                  <Ionicons name="arrow-forward" size={24} color="white" />
                </View>
              </LinearGradient>
            </Pressable>
          </View>

          <View className="mt-8 px-6">
            <Text className="text-white font-bold text-lg mb-2">참여자가 새롭게 등록되었어요! 🎉</Text>
          </View>

          <WorkSection title="장편영화" emoji="🎬" data={MOVIES} columns={3} />

          <WorkSection title="드라마/OTT" emoji="📺" data={DRAMAS} columns={3} />

          <WorkSection title="단편영화" emoji="🎬" data={SHORT_FILMS} columns={3} />

          <WorkSection title="웹드라마" emoji="💻" data={WEB_DRAMAS} columns={3} />

          <WorkSection title="숏폼 드라마" emoji="▶️" data={SHORT_FORM_DRAMAS} columns={3} />

          <WorkSection title="방송" emoji="📺" data={BROADCASTS} columns={3} titleColor="#F59E0B" lineColor="#D97706" />

          <WorkSection
            title="M/V"
            emoji="🎵"
            data={MUSIC_VIDEOS}
            columns={2}
            titleColor="#F59E0B"
            lineColor="#D97706"
          />

          <WorkSection
            title="광고"
            emoji="📢"
            data={ADVERTISEMENTS}
            columns={2}
            titleColor="#F59E0B"
            lineColor="#D97706"
          />

          <WorkSection
            title="공연"
            emoji="🎭"
            data={PERFORMANCES}
            columns={3}
            titleColor="#F59E0B"
            lineColor="#D97706"
          />

          <View className="px-6 mt-8 mb-4">
            <View className="bg-gray-900/70 rounded-2xl p-5 flex-row items-center">
              <View className="bg-purple-900/50 p-3 rounded-xl mr-4">
                <Ionicons name="film-outline" size={28} color="#A78BFA" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-400 text-sm">현재까지 등록된 작품 수</Text>
                <Text className="text-white text-2xl font-bold">19,080</Text>
              </View>
              <Ionicons name="chevron-down" size={24} color="#6B7280" />
            </View>
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
