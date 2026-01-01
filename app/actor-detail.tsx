import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Dimensions, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ACTOR_DATA = {
  id: "3",
  name: "박소영",
  gender: "여자",
  age: 27,
  birthYear: "00",
  height: 160,
  weight: 43,
  shoeSize: 230,
  role: "배우",
  education: "학사",
  instagram: "https://www.instagram.com/psozero/profilecard/?igsh=MXFyeGJueWF6NGlrOQ==",
  mainImage: "https://picsum.photos/600/900?random=200",
  profilePhotos: [
    "https://picsum.photos/300/400?random=201",
    "https://picsum.photos/300/400?random=202",
    "https://picsum.photos/300/400?random=203",
    "https://picsum.photos/300/400?random=204",
    "https://picsum.photos/300/400?random=205",
    "https://picsum.photos/300/400?random=206",
    "https://picsum.photos/300/400?random=207",
    "https://picsum.photos/300/400?random=208",
    "https://picsum.photos/300/400?random=209",
    "https://picsum.photos/300/400?random=210",
  ],
  appearancePhotos: [
    "https://picsum.photos/300/200?random=211",
    "https://picsum.photos/300/200?random=212",
    "https://picsum.photos/300/200?random=213",
    "https://picsum.photos/300/200?random=214",
    "https://picsum.photos/300/200?random=215",
  ],
  styles: ["강아지상", "귀여운", "청순한", "엉뚱한", "내추럴한", "쾌활한", "중성적인", "청량한", "아련한", "솔직한"],
  languages: [],
  activities: [],
  movieGuarantee: "비공개",
  adGuarantee: "비공개",
  collaboration: "가능",
};

function SectionTitle({ title }: { title: string }) {
  return (
    <View className="border-b border-gray-800 pb-2 mb-4">
      <Text className="text-white text-lg font-bold">{title}</Text>
    </View>
  );
}

function PhotoGrid({ photos, columns = 3 }: { photos: string[]; columns?: number }) {
  const itemWidth = (SCREEN_WIDTH - 32 - (columns - 1) * 8) / columns;

  return (
    <View className="flex-row flex-wrap" style={{ gap: 8 }}>
      {photos.map((photo, index) => (
        <View key={index} style={{ width: itemWidth, aspectRatio: 1, borderRadius: 12, overflow: "hidden" }}>
          <Image source={{ uri: photo }} className="w-full h-full" contentFit="cover" />
        </View>
      ))}
    </View>
  );
}

function StyleTag({ label }: { label: string }) {
  return (
    <View className="border border-gray-600 rounded-full px-4 py-2 mr-2 mb-2">
      <Text className="text-gray-300">{label}</Text>
    </View>
  );
}

export default function ActorDetailScreen() {
  const params = useLocalSearchParams();
  const actor = ACTOR_DATA;

  const handleInstagramPress = () => {
    if (actor.instagram) {
      Linking.openURL(actor.instagram);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 메인 이미지 */}
        <View style={{ height: SCREEN_WIDTH * 1.3 }}>
          <Image source={{ uri: actor.mainImage }} className="w-full h-full" contentFit="cover" />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200 }}
          />

          {/* 헤더 오버레이 */}
          <SafeAreaView edges={["top"]} style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <View className="flex-row items-center justify-between px-4 py-2">
              <Pressable onPress={() => router.back()} className="p-2">
                <Ionicons name="chevron-back" size={28} color="white" />
              </Pressable>
              <View className="flex-row items-center">
                <Pressable className="bg-purple-600 rounded-full px-4 py-2 mr-2">
                  <Text className="text-white font-semibold">사이트</Text>
                </Pressable>
                <Pressable className="p-2">
                  <Ionicons name="ellipsis-vertical" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          </SafeAreaView>

          {/* 하단 정보 오버레이 */}
          <View className="absolute bottom-4 left-4 right-4">
            <View className="flex-row items-center justify-between">
              <View>
                <View className="bg-pink-500 self-start rounded px-3 py-1 mb-2">
                  <Text className="text-white font-semibold text-sm">{actor.role}</Text>
                </View>
                <Text className="text-white text-3xl font-bold">{actor.name}</Text>
              </View>
              <Pressable
                onPress={handleInstagramPress}
                className="w-12 h-12 rounded-full bg-white items-center justify-center"
              >
                <Ionicons name="logo-instagram" size={28} color="#E4405F" />
              </Pressable>
            </View>
          </View>
        </View>

        {/* 기본 정보 */}
        <View className="flex-row justify-between px-4 py-6 border-b border-gray-800">
          <View className="items-center flex-1">
            <Text className="text-gray-500 text-sm mb-1">성별</Text>
            <Text className="text-white font-semibold">{actor.gender}</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-gray-500 text-sm mb-1">나이</Text>
            <Text className="text-white font-semibold">
              {actor.age}세({actor.birthYear})
            </Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-gray-500 text-sm mb-1">키</Text>
            <Text className="text-white font-semibold">{actor.height}cm</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-gray-500 text-sm mb-1">몸무게</Text>
            <Text className="text-white font-semibold">{actor.weight}kg</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-gray-500 text-sm mb-1">신발</Text>
            <Text className="text-white font-semibold">{actor.shoeSize}mm</Text>
          </View>
        </View>

        {/* 아이콘 정보 */}
        <View className="flex-row px-4 py-4 border-b border-gray-800">
          <View className="flex-1 flex-row items-center justify-center">
            <Ionicons name="grid-outline" size={20} color="#9CA3AF" />
            <Text className="text-gray-400 ml-2">-</Text>
          </View>
          <View className="w-px bg-gray-700" />
          <View className="flex-1 flex-row items-center justify-center">
            <Ionicons name="school-outline" size={20} color="#9CA3AF" />
            <Text className="text-gray-400 ml-2">{actor.education}</Text>
          </View>
        </View>

        {/* 연기 영상 */}
        <View className="px-4 pt-6">
          <SectionTitle title="연기 영상" />
          <View className="items-center py-8">
            <Text className="text-gray-500">등록된 영상이 없습니다</Text>
          </View>
        </View>

        {/* 프로필 사진 */}
        <View className="px-4 pt-4">
          <SectionTitle title="프로필 사진" />
          <PhotoGrid photos={actor.profilePhotos} columns={3} />
        </View>

        {/* 출연 이미지 */}
        <View className="px-4 pt-8">
          <SectionTitle title="출연 이미지" />
          <PhotoGrid photos={actor.appearancePhotos} columns={3} />
        </View>

        {/* 스타일 */}
        <View className="px-4 pt-8">
          <SectionTitle title="스타일" />
          <View className="flex-row flex-wrap">
            {actor.styles.map((style, index) => (
              <StyleTag key={index} label={style} />
            ))}
          </View>
        </View>

        {/* 언어 / 활동 */}
        <View className="flex-row px-4 pt-8">
          <View className="flex-1 pr-4 border-r border-gray-800">
            <Text className="text-white text-lg font-bold mb-4">언어</Text>
            <Text className="text-gray-500 mb-3">키워드가 없습니다.</Text>
            <Text className="text-gray-500">키워드가 없습니다.</Text>
          </View>
          <View className="flex-1 pl-4">
            <Text className="text-white text-lg font-bold mb-4">활동</Text>
            <Text className="text-gray-500 mb-3">키워드가 없습니다.</Text>
            <Text className="text-gray-500">키워드가 없습니다.</Text>
          </View>
        </View>

        {/* SNS */}
        <View className="px-4 pt-8">
          <SectionTitle title="SNS" />
          <View className="flex-row">
            <Text className="text-gray-400 w-20">인스타그램</Text>
            <Text className="text-white flex-1" numberOfLines={3}>
              {actor.instagram}
            </Text>
          </View>
        </View>

        {/* 개런티 정보 */}
        <View className="px-4 pt-8 pb-8">
          <SectionTitle title="개런티 정보" />
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-gray-400 mb-1">영화 개런티</Text>
              <Text className="text-white">{actor.movieGuarantee}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 mb-1">광고 개런티</Text>
              <Text className="text-white">{actor.adGuarantee}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 mb-1">품앗이</Text>
              <Text className="text-white">{actor.collaboration}</Text>
            </View>
          </View>
        </View>

        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
