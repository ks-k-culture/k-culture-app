import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PARTNERS = ["두드림 공식 파트너"];

export default function PartnerConnectScreen() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = () => {
    if (!selectedPartner) return;
    console.log({ partner: selectedPartner });
    router.back();
  };

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="flex-1 text-white text-xl font-bold text-center mr-10">파트너 기업(학교) 연결하기</Text>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <View className="bg-gray-900 rounded-2xl p-5 mt-4">
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
          </View>

          <View className="bg-gray-900 rounded-2xl p-5 mt-4">
            <Text className="text-white font-bold text-base mb-2">증명서 업로드</Text>
            <Text className="text-gray-400 text-sm mb-4">명함 또는 학생증 사진을 업로드해주세요</Text>

            <Pressable className="bg-gray-800 rounded-xl py-12 items-center justify-center border border-gray-700 border-dashed">
              <Ionicons name="image-outline" size={48} color="#6B7280" />
              <Text className="text-gray-500 mt-3">사진 선택</Text>
            </Pressable>
          </View>
        </ScrollView>

        <View className="px-6 pb-4">
          <Pressable onPress={handleSubmit} className="bg-purple-500 rounded-xl py-4 items-center active:opacity-80">
            <Text className="text-white text-lg font-bold">신청하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
