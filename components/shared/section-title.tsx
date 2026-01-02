import type { ReactNode } from "react";
import { Text, View } from "react-native";

interface SectionTitleProps {
  title: string;
  emoji?: string;
  titleColor?: string;
  lineColor?: string;
  rightComponent?: ReactNode;
}

export function SectionTitle({
  title,
  emoji,
  titleColor = "#A78BFA",
  lineColor = "#7C3AED",
  rightComponent,
}: SectionTitleProps) {
  return (
    <View className="flex-row items-center mb-4">
      <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
      <Text className="font-bold text-sm mx-4" style={{ color: titleColor }}>
        {title} {emoji}
      </Text>
      <View className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
      {rightComponent}
    </View>
  );
}
