import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/ui/text";
import { useCommunity } from "@/contexts/community-context";

const BOARD_POSTS: Record<string, any[]> = {
  free: [
    {
      id: "1",
      author: "동동이",
      role: "연출",
      color: "#F472B6",
      visibility: "전체공개",
      title: "새해복 많이 받으세요~!",
      content: "2026년도 무탈히 행복한 한해 되세요!",
      likes: 2,
      comments: 0,
      time: "15시간 전",
      image: null,
    },
    {
      id: "2",
      author: "운영자",
      role: "제작",
      color: "#FBBF24",
      visibility: "전체공개",
      title: "[작업일지] 게시 오류 안내",
      content:
        "안녕하세요. 두드림 개발팀입니다.\n현재 작품 페이지속 '작업일지'를 통해 글을 쓸 경우 '작업일지' 페이지가 아닌 '커뮤니티' 페이지 내에 업로드 되는 문제가 확인되었습니다.\n\n...",
      likes: 1,
      comments: 1,
      time: "15일 전",
      image: null,
    },
    {
      id: "3",
      author: "동동이",
      role: "연출",
      color: "#F472B6",
      visibility: "전체공개",
      title: "방어입니다",
      content: "겨울엔 방어가 최고",
      likes: 0,
      comments: 0,
      time: "20일 전",
      image: "https://picsum.photos/400/300?random=food",
    },
  ],
  field: [],
  student: [],
  question: [],
  report: [],
  market: [],
};

export default function CommunityBoardScreen() {
  const { boardId, boardTitle } = useLocalSearchParams<{ boardId: string; boardTitle: string }>();
  const { settings } = useCommunity();
  const posts = BOARD_POSTS[boardId || "free"] || [];

  const handleWritePress = () => {
    if (!settings.isSetup) {
      router.push("/community-settings");
    }
  };

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold">{boardTitle || "게시판"}</Text>
          <Pressable className="p-2" onPress={handleWritePress}>
            <Ionicons name="pencil" size={22} color="white" />
          </Pressable>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Pressable
            onPress={handleWritePress}
            className="mx-6 mb-4 flex-row items-center border-b border-gray-800 pb-4"
          >
            <Ionicons name="pencil-outline" size={20} color="#6B7280" />
            <Text className="text-gray-500 ml-3">게시글 작성...</Text>
          </Pressable>

          {posts.map((post) => (
            <View key={post.id} className="px-6 py-4 border-b border-gray-900">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <View
                    className="w-10 h-10 rounded-full items-center justify-center"
                    style={{ backgroundColor: post.color }}
                  >
                    <Text className="text-lg">🍪</Text>
                  </View>
                  <View className="ml-3">
                    <View className="flex-row items-center">
                      <Text className="text-white font-semibold">{post.author}</Text>
                      <Text className="text-gray-400 text-sm ml-2">· {post.role}</Text>
                    </View>
                  </View>
                </View>
                <View className="border border-gray-600 rounded-lg px-2 py-1 flex-row items-center">
                  <Ionicons name="earth-outline" size={14} color="#9CA3AF" />
                  <Text className="text-gray-400 text-xs ml-1">{post.visibility}</Text>
                </View>
              </View>

              <Text className="text-white font-semibold text-base mb-2">{post.title}</Text>
              <Text className="text-gray-400 mb-3">{post.content}</Text>

              {post.image && (
                <View className="rounded-xl overflow-hidden mb-3">
                  <Image source={{ uri: post.image }} className="w-full h-48" contentFit="cover" />
                </View>
              )}

              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-4">
                  <View className="flex-row items-center">
                    <Ionicons name="heart-outline" size={18} color="#9CA3AF" />
                    <Text className="text-gray-400 ml-1">{post.likes}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={18} color="#9CA3AF" />
                    <Text className="text-gray-400 ml-1">{post.comments}</Text>
                  </View>
                </View>
                <Text className="text-gray-500 text-sm">{post.time}</Text>
              </View>
            </View>
          ))}

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
