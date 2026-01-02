import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

type VideoType = "acting" | "work" | null;

export default function FeedbackRequestScreen() {
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedType, setSelectedType] = useState<VideoType>(null);

  const isValid = videoUrl.length > 0 && selectedType !== null;

  return (
    <ScreenWrapper edges={["top", "bottom"]}>
      <Header title="피드백 받기" />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#2A2A2A] rounded-xl h-48 items-center justify-center mb-6">
          <Text className="text-gray-500">썸네일이 표시됩니다.</Text>
        </View>

        <Text className="font-bold mb-3">피드백 받을 영상 추가하기</Text>
        <View className="bg-[#2A2A2A] rounded-xl px-4 py-4 mb-4">
          <Input
            value={videoUrl}
            onChangeText={setVideoUrl}
            placeholder="https://youtu.be..."
            placeholderTextColor="#6B7280"
            className="border-0 bg-transparent p-0"
          />
        </View>

        <View className="border border-orange-500 rounded-xl p-4 mb-6">
          <View className="flex-row items-center mb-3">
            <Ionicons name="warning" size={18} color="#F97316" />
            <Text className="text-orange-500 font-semibold ml-2">유의사항</Text>
          </View>
          <Text className="text-gray-300 leading-6">
            1. 유튜브 영상 링크만 지원합니다.{"\n"}
            2. 유튜브의 영상을 업로드하고 "공개" 또는 "일부공개"로 업로드해주세요..{"\n"}
            2. 연기 영상은 5분, 작품 영상은 30분으로 제한됩니다.
          </Text>
        </View>

        <Text className="font-bold mb-3">어떤 영상인가요?</Text>
        <View className="flex-row gap-3 mb-6">
          <Pressable
            onPress={() => setSelectedType("acting")}
            className="flex-1 py-4 rounded-xl items-center"
            style={{
              backgroundColor: selectedType === "acting" ? "white" : "transparent",
              borderWidth: 1,
              borderColor: selectedType === "acting" ? "white" : "#4B5563",
            }}
          >
            <Text className={selectedType === "acting" ? "text-black font-semibold" : "text-gray-400"}>
              연기(독백)영상
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectedType("work")}
            className="flex-1 py-4 rounded-xl items-center"
            style={{
              backgroundColor: selectedType === "work" ? "white" : "transparent",
              borderWidth: 1,
              borderColor: selectedType === "work" ? "white" : "#4B5563",
            }}
          >
            <Text className={selectedType === "work" ? "text-black font-semibold" : "text-gray-400"}>
              작품(단편영화, M/V 등)
            </Text>
          </Pressable>
        </View>

        <View className="bg-[#1A1A1A] rounded-xl px-4 py-4 mb-3 flex-row items-center">
          <Ionicons name="play-circle-outline" size={20} color="#6B7280" />
          <Text className="text-gray-500 ml-3">유튜브 링크 입력 시 제목이 표시됩니다.</Text>
        </View>
        <View className="bg-[#1A1A1A] rounded-xl px-4 py-4 mb-8 flex-row items-center">
          <Ionicons name="time-outline" size={20} color="#6B7280" />
          <Text className="text-gray-500 ml-3">유튜브 링크 입력 시 러닝타임이 표시됩니다.</Text>
        </View>

        <Button
          className="rounded-xl py-4 items-center mb-8"
          style={{ backgroundColor: isValid ? "#8B5CF6" : "#4B5563" }}
        >
          <Text className={isValid ? "font-bold text-lg" : "text-gray-400 font-bold text-lg"}>다음</Text>
        </Button>

        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
