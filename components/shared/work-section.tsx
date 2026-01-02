import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

import { SectionTitle } from "./section-title";

import type { WorkItem } from "@/types";

interface WorkSectionProps {
  title: string;
  emoji: string;
  data: WorkItem[];
  columns?: 2 | 3;
  titleColor?: string;
  lineColor?: string;
  onItemPress?: (item: WorkItem) => void;
  onMorePress?: () => void;
}

export function WorkSection({
  title,
  emoji,
  data,
  columns = 3,
  titleColor = "#A78BFA",
  lineColor = "#7C3AED",
  onItemPress,
  onMorePress,
}: WorkSectionProps) {
  const displayData = data.slice(0, 6);
  const hasMore = data.length > 6;

  return (
    <View className="px-6 mt-8">
      <SectionTitle title={title} emoji={emoji} titleColor={titleColor} lineColor={lineColor} />

      <View className="flex-row flex-wrap justify-between">
        {displayData.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => onItemPress?.(item)}
            className="mb-4"
            style={{ width: columns === 3 ? "31%" : "48%" }}
          >
            <View className="rounded-xl overflow-hidden mb-2" style={{ aspectRatio: columns === 3 ? 2 / 3 : 1 }}>
              {item.image ? (
                <Image source={{ uri: item.image }} className="w-full h-full" contentFit="cover" />
              ) : (
                <View className="w-full h-full bg-purple-900/50 items-center justify-center">
                  <Ionicons name="film" size={36} color="#A78BFA" />
                </View>
              )}
              {item.participants > 0 && (
                <View className="absolute bottom-2 right-2 flex-row items-center bg-black/70 px-2 py-1 rounded">
                  <Ionicons name="person" size={10} color="white" />
                  <Text className="text-white text-xs ml-1">{item.participants}</Text>
                </View>
              )}
            </View>
            <Text className="text-white font-semibold text-sm" numberOfLines={1}>
              {item.title}
            </Text>
            <Text className="text-gray-400 text-xs" numberOfLines={1}>
              감독: {item.director || "-"}
            </Text>
          </Pressable>
        ))}
      </View>

      {hasMore && (
        <Pressable onPress={onMorePress} className="flex-row items-center justify-end mt-2">
          <Text className="text-purple-400 text-sm font-semibold">더보기</Text>
          <Ionicons name="chevron-forward" size={16} color="#A78BFA" />
        </Pressable>
      )}
    </View>
  );
}
