import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Text } from "@/components/ui/text";

export default function SettingsScreen() {
  const [blockRequests, setBlockRequests] = useState(false);

  return (
    <ScreenWrapper edges={["top", "bottom"]}>
      <Header title="설정" />

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Card className="mt-4">
          <View className="flex-row">
            <View className="flex-1 items-center border-r border-gray-700">
              <Text className="text-gray-400 text-sm mb-2">남은 메시지권</Text>
              <View className="flex-row items-center">
                <Ionicons name="chatbox" size={20} color="white" />
                <Text className="text-white text-xl font-bold ml-2">5회</Text>
              </View>
            </View>
            <View className="flex-1 items-center">
              <Text className="text-gray-400 text-sm mb-2">계정 인증 상태</Text>
              <View className="flex-row items-center">
                <Ionicons name="shield-checkmark-outline" size={20} color="white" />
                <Text className="text-white text-xl font-bold ml-2">비활성화</Text>
              </View>
            </View>
          </View>
        </Card>

        <Pressable onPress={() => router.push("/partner-connect")} className="mt-4 rounded-2xl overflow-hidden">
          <LinearGradient
            colors={["#3B82F6", "#60A5FA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flexDirection: "row", alignItems: "center", padding: 16, borderRadius: 16 }}
          >
            <View style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: 8, borderRadius: 8, marginRight: 12 }}>
              <Ionicons name="business" size={20} color="white" />
            </View>
            <Text style={{ flex: 1, color: "white", fontWeight: "600", fontSize: 12 }} numberOfLines={1}>
              파트너 기업(학교)을 통해 인증 계정 활성화 하기
            </Text>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </LinearGradient>
        </Pressable>

        <Card className="mt-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-semibold text-base">일촌 요청 받지 않기</Text>
            <Switch checked={blockRequests} onCheckedChange={setBlockRequests} />
          </View>

          <Separator className="my-4" />

          <Pressable>
            <Text className="text-white font-semibold text-base">차단한 사용자</Text>
            <Text className="text-gray-500 text-sm mt-1">없음</Text>
          </Pressable>
        </Card>

        <View className="items-end mt-8">
          <Pressable>
            <Text className="text-gray-500 text-sm">회원탈퇴</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
