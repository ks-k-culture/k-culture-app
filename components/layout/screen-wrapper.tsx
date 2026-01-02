import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DEFAULT_GRADIENT_COLORS = ["#1a0a2e", "#0d0615", "#000000"] as const;

interface ScreenWrapperProps {
  children: ReactNode;
  edges?: ("top" | "bottom" | "left" | "right")[];
  showGradient?: boolean;
  gradientColors?: readonly [string, string, ...string[]];
}

export function ScreenWrapper({
  children,
  edges = ["top"],
  showGradient = true,
  gradientColors = DEFAULT_GRADIENT_COLORS,
}: ScreenWrapperProps) {
  return (
    <View className="flex-1 bg-black">
      {showGradient && (
        <LinearGradient colors={gradientColors} locations={[0, 0.3, 1]} style={StyleSheet.absoluteFillObject} />
      )}
      <SafeAreaView className="flex-1" edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
}
