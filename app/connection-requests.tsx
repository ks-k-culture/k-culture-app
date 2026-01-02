import { ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const RECEIVED_REQUESTS: { id: string; name: string; role: string }[] = [];
const SENT_REQUESTS: { id: string; name: string; role: string }[] = [];

export default function ConnectionRequestsScreen() {
  return (
    <ScreenWrapper>
      <Header title="일촌 요청" />

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Text className="text-white font-bold text-base mb-4">받은 요청</Text>
        {RECEIVED_REQUESTS.length === 0 ? (
          <View className="items-center py-8">
            <Text className="text-gray-500">받은 요청이 없습니다.</Text>
          </View>
        ) : (
          RECEIVED_REQUESTS.map((request) => (
            <View key={request.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-3">
              <View className="w-12 h-12 rounded-full bg-gray-700" />
              <View className="flex-1 ml-3">
                <Text className="text-white font-semibold">{request.name}</Text>
                <Text className="text-gray-400 text-sm">{request.role}</Text>
              </View>
              <View className="flex-row gap-2">
                <Button size="sm" className="bg-lime-500">
                  <Text className="text-black font-semibold text-sm">수락</Text>
                </Button>
                <Button variant="secondary" size="sm">
                  <Text className="text-white font-semibold text-sm">거절</Text>
                </Button>
              </View>
            </View>
          ))
        )}

        <Text className="text-white font-bold text-base mb-4 mt-8">보낸 요청</Text>
        {SENT_REQUESTS.length === 0 ? (
          <View className="items-center py-8">
            <Text className="text-gray-500">보낸 요청이 없습니다.</Text>
          </View>
        ) : (
          SENT_REQUESTS.map((request) => (
            <View key={request.id} className="flex-row items-center bg-gray-900/50 rounded-xl p-4 mb-3">
              <View className="w-12 h-12 rounded-full bg-gray-700" />
              <View className="flex-1 ml-3">
                <Text className="text-white font-semibold">{request.name}</Text>
                <Text className="text-gray-400 text-sm">{request.role}</Text>
              </View>
              <Button variant="secondary" size="sm">
                <Text className="text-white font-semibold text-sm">취소</Text>
              </Button>
            </View>
          ))
        )}

        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
