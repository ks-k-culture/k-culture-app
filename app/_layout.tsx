import "../global.css";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { SplashScreen } from "@/components/splash-screen";
import { CommunityProvider } from "@/contexts/community-context";
import { useColorScheme } from "@/hooks/use-color-scheme";

ExpoSplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    ExpoSplashScreen.hideAsync();
  }, []);

  if (showSplash) {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <CommunityProvider>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="guide" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="notifications" options={{ headerShown: false }} />
            <Stack.Screen name="messages" options={{ headerShown: false }} />
            <Stack.Screen name="inquiry" options={{ headerShown: false }} />
            <Stack.Screen name="settings" options={{ headerShown: false }} />
            <Stack.Screen name="partner-connect" options={{ headerShown: false }} />
            <Stack.Screen name="faq" options={{ headerShown: false }} />
            <Stack.Screen name="connection-requests" options={{ headerShown: false }} />
            <Stack.Screen name="add-profile" options={{ headerShown: false }} />
            <Stack.Screen name="add-work" options={{ headerShown: false }} />
            <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
            <Stack.Screen name="community-board" options={{ headerShown: false }} />
            <Stack.Screen name="community-settings" options={{ headerShown: false }} />
            <Stack.Screen name="community-messages" options={{ headerShown: false }} />
            <Stack.Screen name="community-search" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </CommunityProvider>
    </SafeAreaProvider>
  );
}
