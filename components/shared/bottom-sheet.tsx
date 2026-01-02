import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";

const TAB_BAR_HEIGHT = 72;

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  aboveTabBar?: boolean;
}

export function BottomSheet({ visible, onClose, children, title, aboveTabBar = false }: BottomSheetProps) {
  if (!visible) return null;

  return (
    <View className="absolute inset-0 z-50" style={aboveTabBar ? { bottom: TAB_BAR_HEIGHT } : undefined}>
      <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)} className="absolute inset-0">
        <Pressable onPress={onClose} className="flex-1 bg-black/70" />
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(200)}
        className="absolute bottom-0 left-0 right-0 bg-[#121212] rounded-t-3xl px-6 pt-4 pb-8"
      >
        <View className="w-12 h-1 bg-gray-600 rounded-full self-center mb-4" />

        {title && <Text className="text-white text-xl font-bold text-center mb-6">{title}</Text>}

        {children}
      </Animated.View>
    </View>
  );
}
