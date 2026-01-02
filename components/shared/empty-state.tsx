import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}

export function EmptyState({ icon = "document-outline", title, description, action }: EmptyStateProps) {
  return (
    <View className="flex-1 items-center justify-center py-12">
      <Ionicons name={icon as any} size={64} color="#6B7280" />
      <Text className="text-gray-400 text-lg font-semibold mt-4">{title}</Text>
      {description && <Text className="text-gray-500 text-sm mt-2 text-center px-8">{description}</Text>}
      {action && (
        <Pressable onPress={action.onPress} className="mt-6 bg-purple-500 px-6 py-3 rounded-xl active:opacity-80">
          <Text className="text-white font-semibold">{action.label}</Text>
        </Pressable>
      )}
    </View>
  );
}
