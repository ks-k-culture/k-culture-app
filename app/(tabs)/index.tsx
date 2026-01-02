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
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { WorkSection } from "@/components/shared/work-section";
import { Text } from "@/components/ui/text";
import {
  ADVERTISEMENTS,
  BANNERS,
  BROADCASTS,
  COMMUNITY_POSTS,
  CREATORS,
  DRAMAS,
  MENU_BUTTONS_ROW1,
  MENU_BUTTONS_ROW2,
  MOVIES,
  MUSIC_VIDEOS,
  NEW_WORKS,
  PERFORMANCES,
  SHORT_FILMS,
  SHORT_FORM_DRAMAS,
  WEB_DRAMAS,
} from "@/constants/data";
import { useDrawer } from "@/contexts/drawer-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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
                  style={{ width: SCREEN_WIDTH - 48, borderRadius: 12, overflow: "hidden" }}
                  className="h-32 justify-center items-center px-6"
                >
                  <LinearGradient colors={[item.color, `${item.color}CC`]} style={StyleSheet.absoluteFillObject} />
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
            <View className="flex-row gap-2 mb-2">
              {MENU_BUTTONS_ROW1.map((button) => (
                <Pressable
                  key={button.id}
                  onPress={() => router.push(button.route as any)}
                  className="flex-1 border border-gray-600 rounded-lg py-3 items-center active:opacity-80"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  <Text className="text-white font-medium">{button.title}</Text>
                </Pressable>
              ))}
            </View>

            <View className="flex-row gap-2">
              {MENU_BUTTONS_ROW2.map((button) => (
                <Pressable
                  key={button.id}
                  onPress={() => router.push(button.route as any)}
                  className="flex-1 rounded-lg py-3 items-center active:opacity-80"
                  style={{ backgroundColor: button.bgColor, borderWidth: 1, borderColor: button.borderColor }}
                >
                  <Text className="text-white font-medium text-sm">{button.title}</Text>
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
              {CREATORS.map((creator) => (
                <Pressable key={creator.id} className="items-center mr-4">
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
            <Pressable onPress={() => router.push("/spark")} className="rounded-2xl overflow-hidden">
              <LinearGradient
                colors={["#8B5CF6", "#6366F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
              >
                <View className="flex-1">
                  <Text className="text-white font-bold text-lg">스파크로 작품 응원하기</Text>
                  <Text className="text-purple-200 text-sm mt-1">매일 새로운 작품을 발견하고 응원해보세요</Text>
                </View>
                <View className="bg-white/20 p-3 rounded-full ml-4">
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
