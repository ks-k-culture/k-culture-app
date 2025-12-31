import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = ["전체", "자유 게시판", "질문 게시판", "현장 스토리", "신문고"];

const POSTS = [
  {
    id: "1",
    category: "자유 게시판",
    title: "[작업일지] 게시 오류 안내",
    content: "안녕하세요. 최근 게시물 업로드 시 발생한 오류에 대해 안내드립니다...",
    author: "관리자",
    authorImage: "https://picsum.photos/100?random=401",
    time: "10분 전",
    likes: 12,
    comments: 5,
  },
  {
    id: "2",
    category: "질문 게시판",
    title: "봄풀 추천 부탁드립니다!",
    content: "배우 지망생인데 처음으로 작품에 참여하려고 합니다. 추천 부탁드려요!",
    author: "김신입",
    authorImage: "https://picsum.photos/100?random=402",
    time: "30분 전",
    likes: 8,
    comments: 12,
  },
  {
    id: "3",
    category: "현장 스토리",
    title: "오늘 촬영 현장에서 있었던 일",
    content: "드라마 촬영 현장에서 정말 감동적인 일이 있었습니다...",
    author: "현장스태프",
    authorImage: "https://picsum.photos/100?random=403",
    time: "1시간 전",
    likes: 45,
    comments: 23,
  },
  {
    id: "4",
    category: "신문고",
    title: "아직도 현장에서 군기잡는팀 있다는데...",
    content: "요즘도 이런 팀이 있다니 정말 안타깝습니다. 모두 조심하세요.",
    author: "익명",
    authorImage: null,
    time: "2시간 전",
    likes: 89,
    comments: 67,
  },
  {
    id: "5",
    category: "자유 게시판",
    title: "다음 주 오디션 정보 공유합니다",
    content: "여러 작품의 오디션 정보를 정리했습니다. 관심 있으신 분들 참고하세요!",
    author: "정보통",
    authorImage: "https://picsum.photos/100?random=404",
    time: "3시간 전",
    likes: 156,
    comments: 42,
  },
];

export default function CommunityScreen() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredPosts =
    selectedCategory === "전체" ? POSTS : POSTS.filter((post) => post.category === selectedCategory);

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-6 py-4">
          <Text className="text-white text-2xl font-bold">커뮤니티</Text>
          <Pressable className="bg-purple-600 px-4 py-2 rounded-lg flex-row items-center">
            <Ionicons name="create-outline" size={18} color="white" />
            <Text className="text-white font-semibold ml-2">글쓰기</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 mb-4"
          contentContainerStyle={{ paddingRight: 24 }}
        >
          {CATEGORIES.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full mr-2 ${
                selectedCategory === category ? "bg-purple-600" : "bg-gray-800"
              }`}
            >
              <Text className={`font-semibold ${selectedCategory === category ? "text-white" : "text-gray-400"}`}>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          {filteredPosts.map((post) => (
            <Pressable key={post.id} className="bg-gray-900/50 rounded-xl p-4 mb-4">
              <View className="flex-row items-center mb-2">
                <View className="bg-purple-900/50 px-2 py-1 rounded">
                  <Text className="text-purple-300 text-xs">{post.category}</Text>
                </View>
                <Text className="text-gray-500 text-xs ml-2">{post.time}</Text>
              </View>

              <Text className="text-white font-bold text-base mb-1">{post.title}</Text>
              <Text className="text-gray-400 text-sm mb-3" numberOfLines={2}>
                {post.content}
              </Text>

              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  {post.authorImage ? (
                    <View className="w-6 h-6 rounded-full overflow-hidden">
                      <Image source={{ uri: post.authorImage }} className="w-full h-full" contentFit="cover" />
                    </View>
                  ) : (
                    <View className="w-6 h-6 rounded-full bg-gray-700 items-center justify-center">
                      <Ionicons name="person" size={14} color="#9CA3AF" />
                    </View>
                  )}
                  <Text className="text-gray-400 text-sm ml-2">{post.author}</Text>
                </View>

                <View className="flex-row items-center gap-4">
                  <View className="flex-row items-center">
                    <Ionicons name="heart-outline" size={16} color="#9CA3AF" />
                    <Text className="text-gray-400 text-sm ml-1">{post.likes}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={16} color="#9CA3AF" />
                    <Text className="text-gray-400 text-sm ml-1">{post.comments}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
