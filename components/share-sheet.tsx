import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ShareSheetProps {
  visible: boolean;
  onClose: () => void;
}

export function ShareSheet({ visible, onClose }: ShareSheetProps) {
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 56 + insets.bottom;

  if (!visible) return null;

  return (
    <View className="absolute inset-0" style={{ bottom: TAB_BAR_HEIGHT }}>
      <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)} className="absolute inset-0">
        <Pressable onPress={onClose} className="flex-1 bg-black/70" />
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(200)}
        className="absolute bottom-0 left-0 right-0 bg-[#121212] rounded-t-3xl px-6 pt-4 pb-8"
      >
        <View className="w-12 h-1 bg-gray-600 rounded-full self-center mb-6" />

        <Text className="text-white text-xl font-bold text-center mb-6">프로필 공유하기</Text>

        <View className="bg-white rounded-2xl p-6 items-center mb-6">
          <View className="w-48 h-48 bg-gray-200 items-center justify-center relative">
            <View className="absolute top-4 left-4 right-4 bottom-4 border-4 border-black" />
            <View className="absolute top-4 left-4 w-12 h-12 border-4 border-black bg-white" />
            <View className="absolute top-4 right-4 w-12 h-12 border-4 border-black bg-white" />
            <View className="absolute bottom-4 left-4 w-12 h-12 border-4 border-black bg-white" />
            <Text className="text-gray-800 font-bold text-sm">T.OID</Text>
          </View>
        </View>

        <View className="flex-row justify-center gap-16">
          <Pressable className="items-center">
            <View className="w-16 h-16 bg-gray-700 rounded-full items-center justify-center mb-2">
              <Ionicons name="link" size={28} color="white" />
            </View>
            <Text className="text-white">링크 복사</Text>
          </Pressable>

          <Pressable className="items-center">
            <View className="w-16 h-16 bg-gray-700 rounded-full items-center justify-center mb-2">
              <Ionicons name="share-social" size={28} color="white" />
            </View>
            <Text className="text-white">공유하기</Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}
