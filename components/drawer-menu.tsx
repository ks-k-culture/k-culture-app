import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";

const TAB_BAR_HEIGHT = 70;

const MENU_ITEMS = [
  { icon: "information-circle-outline", title: "토이드 가이드", route: "/guide" },
  { icon: "megaphone-outline", title: "공지사항", route: null },
  { icon: "help-circle-outline", title: "자주묻는질문", route: null },
  { icon: "chatbox-outline", title: "문의하기", route: "/inquiry" },
  { icon: "settings-outline", title: "설정", route: null },
];

interface DrawerMenuProps {
  visible: boolean;
  onClose: () => void;
}

export function DrawerMenu({ visible, onClose }: DrawerMenuProps) {
  if (!visible) return null;

  const handleMenuPress = (route: string | null) => {
    onClose();
    if (route) {
      router.push(route as any);
    }
  };

  const handleLogout = () => {
    onClose();
    router.replace("/");
  };

  return (
    <View style={[StyleSheet.absoluteFillObject, { bottom: TAB_BAR_HEIGHT }]} className="z-50">
      <Animated.View
        entering={FadeIn.duration(200)}
        exiting={FadeOut.duration(200)}
        style={StyleSheet.absoluteFillObject}
      >
        <Pressable onPress={onClose} className="flex-1 bg-black/70" />
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(300)}
        exiting={SlideOutDown.duration(200)}
        className="absolute bottom-0 left-0 right-0 bg-[#121212] rounded-t-2xl px-5 pt-6 pb-6"
      >
        {MENU_ITEMS.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => handleMenuPress(item.route)}
            className="flex-row items-center py-4"
          >
            <Ionicons name={item.icon as any} size={24} color="#9CA3AF" />
            <Text className="text-gray-200 text-base ml-4">{item.title}</Text>
          </Pressable>
        ))}

        <View className="h-px bg-gray-700 my-3" />

        <Pressable onPress={handleLogout} className="flex-row items-center py-4">
          <Ionicons name="log-out-outline" size={24} color="#EF4444" />
          <Text className="text-red-500 text-base ml-4">로그아웃</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
