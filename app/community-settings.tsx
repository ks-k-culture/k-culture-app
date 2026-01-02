import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useCommunity } from "@/contexts/community-context";

const COLORS = ["#F472B6", "#FB923C", "#FBBF24", "#4ADE80", "#38BDF8", "#A78BFA", "#F0ABFC", "#1F2937", "#E5E7EB"];

const FIELDS = [
  { icon: "person-outline", label: "배우" },
  { icon: "pencil-outline", label: "작가" },
  { icon: "film-outline", label: "제작" },
  { icon: "videocam-outline", label: "연출" },
  { icon: "camera-outline", label: "촬영" },
  { icon: "bulb-outline", label: "조명" },
  { icon: "construct-outline", label: "그립" },
  { icon: "mic-outline", label: "동시녹음" },
  { icon: "grid-outline", label: "세트" },
  { icon: "color-palette-outline", label: "미술" },
  { icon: "shirt-outline", label: "의상/소품" },
  { icon: "happy-outline", label: "헤어/분장" },
  { icon: "cut-outline", label: "편집" },
  { icon: "server-outline", label: "D.I.T" },
  { icon: "sparkles-outline", label: "특수효과" },
  { icon: "airplane-outline", label: "특수촬영" },
  { icon: "fitness-outline", label: "무술/스턴트" },
  { icon: "body-outline", label: "안무" },
  { icon: "barbell-outline", label: "피지컬" },
  { icon: "people-outline", label: "보조출연" },
  { icon: "images-outline", label: "스틸/메이킹" },
  { icon: "location-outline", label: "로케이션" },
  { icon: "megaphone-outline", label: "캐스팅" },
  { icon: "aperture-outline", label: "렌탈" },
  { icon: "car-outline", label: "차량" },
  { icon: "layers-outline", label: "VFX" },
  { icon: "pulse-outline", label: "모션그래픽" },
  { icon: "options-outline", label: "D.I" },
  { icon: "volume-high-outline", label: "사운드" },
  { icon: "musical-notes-outline", label: "음악" },
  { icon: "text-outline", label: "자막" },
];

export default function CommunitySettingsScreen() {
  const { settings, updateSettings, completeSetup } = useCommunity();
  const [nickname, setNickname] = useState(settings.nickname || "달리는 토끼 816");
  const [selectedColor, setSelectedColor] = useState(settings.color || COLORS[0]);
  const [selectedField, setSelectedField] = useState(settings.field || "");
  const [agreed, setAgreed] = useState(false);

  const handleSave = () => {
    if (!agreed || !nickname || !selectedField) return;
    updateSettings({ nickname, color: selectedColor, field: selectedField });
    completeSetup();
    router.back();
  };

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold">커뮤니티 설정</Text>
          <Pressable className="p-2" onPress={handleSave}>
            <Text
              className={`text-lg font-semibold ${agreed && nickname && selectedField ? "text-purple-400" : "text-gray-600"}`}
            >
              저장
            </Text>
          </Pressable>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <Card variant="outlined" className="border-purple-500/50 mb-4">
            <View className="flex-row items-start">
              <View className="bg-orange-500 rounded-lg px-2 py-1 mr-3">
                <Text className="text-white text-xs font-bold">안내</Text>
              </View>
              <View className="flex-1">
                <Text className="text-gray-300">커뮤니티에서는 익명성을 위해</Text>
                <Text className="text-gray-300">기존 프로필과 별개의 닉네임을 사용합니다.</Text>
              </View>
            </View>
          </Card>

          <Pressable
            onPress={() => setAgreed(!agreed)}
            className="border border-purple-500/50 rounded-xl p-4 mb-6 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <Text className="text-gray-300">두드림 커뮤니티 이용약관 동의(EULA)</Text>
              <Text className="text-purple-400 ml-2">자세히</Text>
            </View>
            {agreed && <Ionicons name="checkmark" size={24} color="#A78BFA" />}
          </Pressable>

          <Text className="text-gray-400 mb-4">프로필 색상</Text>
          <View className="items-center mb-4">
            <View
              className="w-24 h-24 rounded-full items-center justify-center"
              style={{ backgroundColor: selectedColor }}
            >
              <Text className="text-3xl">🍪</Text>
            </View>
          </View>
          <View className="flex-row justify-center gap-3 mb-6">
            {COLORS.map((color) => (
              <Pressable
                key={color}
                onPress={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full ${selectedColor === color ? "border-2 border-white" : ""}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </View>

          <Text className="text-gray-400 mb-3">커뮤니티 닉네임</Text>
          <View className="flex-row items-center mb-2">
            <View className="flex-1">
              <Input value={nickname} onChangeText={setNickname} placeholder="닉네임 입력" />
            </View>
            <Pressable className="ml-3">
              <Text className="text-purple-400">중복체크</Text>
            </Pressable>
          </View>
          <Text className="text-gray-500 text-sm mb-6">닉네임과 활동분야는 언제든지 자유롭게 변경할 수 있습니다.</Text>

          <Text className="text-gray-400 mb-4">활동분야</Text>
          <View className="flex-row flex-wrap gap-2 mb-8">
            {FIELDS.map((field) => (
              <Pressable
                key={field.label}
                onPress={() => setSelectedField(field.label)}
                className={`w-[23%] aspect-square border rounded-xl items-center justify-center ${
                  selectedField === field.label ? "border-purple-500 bg-purple-500/20" : "border-gray-700"
                }`}
              >
                <Ionicons
                  name={field.icon as any}
                  size={24}
                  color={selectedField === field.label ? "#A78BFA" : "#9CA3AF"}
                />
                <Text className={`text-xs mt-2 ${selectedField === field.label ? "text-purple-400" : "text-gray-400"}`}>
                  {field.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
