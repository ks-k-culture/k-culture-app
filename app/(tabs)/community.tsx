import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BOARDS = [
  { id: "free", icon: "chatbox-outline", title: "자유 게시판" },
  { id: "field", icon: "grid-outline", title: "현장 스토리" },
  { id: "student", icon: "school-outline", title: "학생 게시판" },
  { id: "question", icon: "help-circle-outline", title: "질문 게시판" },
  { id: "report", icon: "megaphone-outline", title: "신문고 게시판" },
  { id: "market", icon: "storefront-outline", title: "판매/나눔 게시판" },
];

const POSTS = [
  {
    id: "1",
    author: "동동이",
    role: "연출",
    color: "#F472B6",
    board: "자유 게시판",
    title: "새해복 많이 받으세요~!",
    content: "2026년도 무탈히 행복한 한해 되세요!",
    likes: 2,
    comments: 0,
    time: "15시간 전",
  },
  {
    id: "2",
    author: "산책하는 코알라 362",
    role: "조명",
    color: "#FB923C",
    board: "현장 스토리",
    title: "나만아는실수",
    content:
      "팀 형들이랑 밥먹는데 점심 미리 먹었는데\n혼자만 먹었다고 뭐라할까봐 또 먹었어요;\n\n왜 실수냐.. 조명팀 단체활동 너무 심해서 실수로 생각 한번 해봤어용",
    likes: 0,
    comments: 0,
    time: "1시간 전",
  },
];

export default function CommunityScreen() {
  const handleBoardPress = (boardId: string, boardTitle: string) => {
    router.push({
      pathname: "/community-board",
      params: { boardId, boardTitle },
    });
  };

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-6 py-4">
          <Text className="text-white text-xl font-bold">두드림 커뮤니티</Text>
          <View className="flex-row gap-4">
            <Pressable onPress={() => router.push("/community-settings")}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </Pressable>
            <Pressable onPress={() => router.push("/community-messages")}>
              <Ionicons name="mail-outline" size={24} color="white" />
            </Pressable>
            <Pressable onPress={() => router.push("/community-search")}>
              <Ionicons name="search-outline" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 mb-4">
            <LinearGradient
              colors={["#3B82F6", "#8B5CF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 16,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="shield-checkmark" size={24} color="white" />
              <Text className="text-white font-semibold ml-3">배우&스태프 전용 익명보장 No.1 커뮤니티</Text>
            </LinearGradient>
          </View>

          <View className="px-6 mb-4 gap-2">
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => handleBoardPress("free", "자유 게시판")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="chatbox-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">자유 게시판</Text>
              </Pressable>
              <Pressable
                onPress={() => handleBoardPress("field", "현장 스토리")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="grid-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">현장 스토리</Text>
              </Pressable>
            </View>
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => handleBoardPress("student", "학생 게시판")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="school-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">학생 게시판</Text>
              </Pressable>
              <Pressable
                onPress={() => handleBoardPress("question", "질문 게시판")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="help-circle-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">질문 게시판</Text>
              </Pressable>
            </View>
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => handleBoardPress("report", "신문고 게시판")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="megaphone-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">신문고 게시판</Text>
              </Pressable>
              <Pressable
                onPress={() => handleBoardPress("market", "판매/나눔 게시판")}
                className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
              >
                <Ionicons name="storefront-outline" size={20} color="#9CA3AF" />
                <Text className="text-gray-300 ml-2">판매/나눔 게시판</Text>
              </Pressable>
            </View>
          </View>

          <Pressable className="mx-6 mb-4">
            <LinearGradient
              colors={["#4A1A6B", "#2D1B4E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View className="flex-row items-center flex-1">
                <Ionicons name="flame" size={20} color="#F97316" />
                <Text className="text-purple-300 font-semibold ml-2">인기 글</Text>
                <Text className="text-white ml-3 flex-1" numberOfLines={1}>
                  새해복 많이 받으세요~!
                </Text>
              </View>
              <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
            </LinearGradient>
          </Pressable>

          <View className="px-6">
            {POSTS.map((post) => (
              <View key={post.id} className="bg-gray-900/30 rounded-xl p-4 mb-4">
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
                    <Ionicons name="chatbox-outline" size={14} color="#9CA3AF" />
                    <Text className="text-gray-400 text-xs ml-1">{post.board}</Text>
                  </View>
                </View>

                <Text className="text-white font-semibold text-base mb-2">{post.title}</Text>
                <Text className="text-gray-400 mb-4">{post.content}</Text>

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
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
