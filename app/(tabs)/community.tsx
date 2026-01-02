import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/ui/text";
import { COMMUNITY_BOARD_LIST, COMMUNITY_POSTS_DETAIL } from "@/constants/data";

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
            {[0, 2, 4].map((startIdx) => (
              <View key={startIdx} className="flex-row gap-2">
                {COMMUNITY_BOARD_LIST.slice(startIdx, startIdx + 2).map((board) => (
                  <Pressable
                    key={board.id}
                    onPress={() => handleBoardPress(board.id, board.title)}
                    className="flex-1 flex-row items-center border border-gray-700 rounded-xl px-4 py-3"
                  >
                    <Ionicons name={board.icon as any} size={20} color="#9CA3AF" />
                    <Text className="text-gray-300 ml-2">{board.title}</Text>
                  </Pressable>
                ))}
              </View>
            ))}
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
            {COMMUNITY_POSTS_DETAIL.map((post) => (
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
