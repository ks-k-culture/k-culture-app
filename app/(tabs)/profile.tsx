import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PORTFOLIO = [
  { id: "1", title: "드라마 출연", image: "https://picsum.photos/200/300?random=201" },
  { id: "2", title: "영화 조연", image: "https://picsum.photos/200/300?random=202" },
  { id: "3", title: "뮤직비디오", image: "https://picsum.photos/200/300?random=203" },
  { id: "4", title: "광고 촬영", image: "https://picsum.photos/200/300?random=204" },
];

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="items-center pt-6 pb-8">
            <View className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 mb-4">
              <Image
                source={{ uri: "https://picsum.photos/200?random=300" }}
                className="w-full h-full"
                contentFit="cover"
              />
            </View>
            <Text className="text-white text-2xl font-bold">홍길동</Text>
            <Text className="text-purple-400 mt-1">배우 · 서울</Text>

            <View className="flex-row mt-6 gap-8">
              <View className="items-center">
                <Text className="text-white text-xl font-bold">12</Text>
                <Text className="text-gray-400 text-sm">작품</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-xl font-bold">156</Text>
                <Text className="text-gray-400 text-sm">일촌</Text>
              </View>
              <View className="items-center">
                <Text className="text-white text-xl font-bold">89</Text>
                <Text className="text-gray-400 text-sm">스크랩</Text>
              </View>
            </View>

            <Pressable className="mt-6 bg-purple-600 px-8 py-3 rounded-xl">
              <Text className="text-white font-semibold">프로필 편집</Text>
            </Pressable>
          </View>

          <View className="px-6 mb-6">
            <Text className="text-white font-bold text-lg mb-3">자기소개</Text>
            <View className="bg-gray-900/50 rounded-xl p-4">
              <Text className="text-gray-300 leading-6">
                안녕하세요! 다양한 작품에 도전하고 싶은 배우 홍길동입니다. 드라마, 영화, 뮤직비디오 등 다양한 장르의
                작품에 참여하고 있습니다.
              </Text>
            </View>
          </View>

          <View className="px-6 mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white font-bold text-lg">포트폴리오</Text>
              <Pressable>
                <Text className="text-purple-400 text-sm">전체보기</Text>
              </Pressable>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {PORTFOLIO.map((item) => (
                <Pressable key={item.id} className="w-[48%] mb-4">
                  <View className="aspect-[3/4] rounded-xl overflow-hidden">
                    <Image source={{ uri: item.image }} className="w-full h-full" contentFit="cover" />
                  </View>
                  <Text className="text-white text-sm mt-2">{item.title}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="px-6 mb-8">
            <View className="bg-gray-900/50 rounded-xl overflow-hidden">
              {[
                { icon: "bookmark-outline", title: "스크랩" },
                { icon: "document-text-outline", title: "내 게시글" },
                { icon: "settings-outline", title: "설정" },
                { icon: "help-circle-outline", title: "고객센터" },
              ].map((item, index) => (
                <Pressable
                  key={item.title}
                  className={`flex-row items-center p-4 ${index !== 3 ? "border-b border-gray-800" : ""}`}
                >
                  <Ionicons name={item.icon as any} size={22} color="#9CA3AF" />
                  <Text className="text-white flex-1 ml-4">{item.title}</Text>
                  <Ionicons name="chevron-forward" size={20} color="#6B7280" />
                </Pressable>
              ))}
            </View>
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
