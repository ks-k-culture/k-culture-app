import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
}

export function Header({ title, showBack = true, onBack, rightComponent, leftComponent }: HeaderProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center px-4 py-3">
      <View className="w-10">
        {leftComponent ??
          (showBack && (
            <Pressable className="p-2" onPress={handleBack}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
          ))}
      </View>

      <Text className="flex-1 text-white text-xl font-bold text-center">{title}</Text>

      <View className="w-10 items-end">{rightComponent}</View>
    </View>
  );
}
