import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { PARTNERS } from "@/constants/data";

export default function PartnerConnectScreen() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = () => {
    if (!selectedPartner) return;
    console.log({ partner: selectedPartner });
    router.back();
  };

  return (
    <ScreenWrapper edges={["top", "bottom"]}>
      <Header title="파트너 기업(학교) 연결하기" />

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Card className="mt-4">
          <Text className="text-white font-bold text-base mb-4">파트너 선택</Text>
          <Pressable
            onPress={() => setShowDropdown(!showDropdown)}
            className="flex-row items-center justify-between border border-gray-700 rounded-xl px-4 py-4"
          >
            <Text className={selectedPartner ? "text-white" : "text-gray-500"}>
              {selectedPartner || "파트너를 선택해주세요"}
            </Text>
            <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={20} color="#6B7280" />
          </Pressable>

          {showDropdown && (
            <View className="border border-gray-700 rounded-xl mt-2 overflow-hidden">
              {PARTNERS.map((partner, index) => (
                <Pressable
                  key={partner}
                  onPress={() => {
                    setSelectedPartner(partner);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-3 ${index !== PARTNERS.length - 1 ? "border-b border-gray-700" : ""} ${
                    selectedPartner === partner ? "bg-purple-900/30" : ""
                  }`}
                >
                  <Text className={selectedPartner === partner ? "text-purple-400" : "text-gray-300"}>{partner}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </Card>

        <Card className="mt-4">
          <Text className="text-white font-bold text-base mb-2">증명서 업로드</Text>
          <Text className="text-gray-400 text-sm mb-4">명함 또는 학생증 사진을 업로드해주세요</Text>

          <Pressable className="bg-gray-800 rounded-xl py-12 items-center justify-center border border-gray-700 border-dashed">
            <Ionicons name="image-outline" size={48} color="#6B7280" />
            <Text className="text-gray-500 mt-3">사진 선택</Text>
          </Pressable>
        </Card>
      </ScrollView>

      <View className="px-6 pb-4">
        <Button onPress={handleSubmit} className="w-full py-4">
          <Text className="text-white text-lg font-bold">신청하기</Text>
        </Button>
      </View>
    </ScreenWrapper>
  );
}
