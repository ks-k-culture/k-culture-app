import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    scale.value = withTiming(1, { duration: 800 });

    const timer = setTimeout(() => {
      opacity.value = withDelay(0, withTiming(0, { duration: 500 }));
      scale.value = withDelay(0, withTiming(1.1, { duration: 500 }));

      setTimeout(onFinish, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#16082a", "#0d0615", "#000000"]}
        locations={[0, 0.3, 0.6, 1]}
        style={StyleSheet.absoluteFillObject}
      />
      <View className="flex-1 items-center justify-center">
        <Animated.View style={animatedStyle} className="items-center">
          <Text className="text-white text-6xl font-bold tracking-wider">K-Culture</Text>
          <View className="w-20 h-1 bg-purple-500 rounded-full mt-4" />
        </Animated.View>
      </View>
    </View>
  );
}
