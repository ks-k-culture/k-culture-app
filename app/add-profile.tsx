import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function AddProfileScreen() {
  return (
    <ScreenWrapper edges={["top", "bottom"]}>
      <Header title="배우&모델 프로필 추가하기" />

      <View className="flex-1 px-6 justify-center">
        <Card className="py-16 items-center mb-6">
          <View className="w-16 h-16 rounded-full bg-purple-600/30 items-center justify-center mb-4">
            <Ionicons name="person-add" size={32} color="#A78BFA" />
          </View>
          <Text className="text-white text-lg font-semibold">새롭게 프로필 등록하기</Text>
        </Card>

        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-700" />
          <Text className="text-gray-500 mx-4">OR</Text>
          <View className="flex-1 h-px bg-gray-700" />
        </View>

        <Card className="py-16 items-center mt-6">
          <View className="w-16 h-16 rounded-full bg-blue-600/30 items-center justify-center mb-4">
            <Ionicons name="link" size={32} color="#60A5FA" />
          </View>
          <Text className="text-white text-lg font-semibold text-center">
            프로필이 등록되어 있나요?{"\n"}프로필 연동하기
          </Text>
        </Card>
      </View>
    </ScreenWrapper>
  );
}
