import { Pressable, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function CreditsScreen() {
  return (
    <ScreenWrapper>
      <Header title="나의 크레딧" />

      <Card className="mx-4 p-5 mb-6">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-gray-400 mb-2">나의 보유 크레딧</Text>
            <Text className="text-3xl font-bold mb-1">0 크레딧</Text>
            <Text className="text-yellow-400">+0 크레딧 예정</Text>
          </View>
          <View className="gap-2">
            <Pressable className="border border-gray-600 rounded-lg px-4 py-2">
              <Text className="text-gray-300">충전하기</Text>
            </Pressable>
            <Pressable className="border border-gray-600 rounded-lg px-4 py-2">
              <Text className="text-gray-300">출금하기</Text>
            </Pressable>
          </View>
        </View>
      </Card>

      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-500">표시할 리스트가 없습니다.</Text>
      </View>
    </ScreenWrapper>
  );
}
