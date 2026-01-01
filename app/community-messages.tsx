import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CommunityMessagesScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="flex-1 text-white text-lg font-bold text-center mr-10">쪽지함</Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">받은 쪽지가 없습니다.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
