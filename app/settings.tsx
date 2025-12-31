import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [blockRequests, setBlockRequests] = useState(false);

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
          <Text className="flex-1 text-white text-xl font-bold text-center mr-10">설정</Text>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <View className="bg-gray-900 rounded-2xl p-5 mt-4">
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
          </View>

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

          <View className="bg-gray-900 rounded-2xl mt-4">
            <View className="flex-row items-center justify-between p-5 border-b border-gray-800">
              <Text className="text-white font-semibold text-base">일촌 요청 받지 않기</Text>
              <Switch
                value={blockRequests}
                onValueChange={setBlockRequests}
                trackColor={{ false: "#374151", true: "#8B5CF6" }}
                thumbColor="white"
              />
            </View>
            <View className="p-5">
              <Text className="text-white font-semibold text-base">차단한 사용자</Text>
              <Text className="text-gray-500 text-sm mt-1">없음</Text>
            </View>
          </View>

          <View className="items-end mt-8">
            <Pressable>
              <Text className="text-gray-500 text-sm">회원탈퇴</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
