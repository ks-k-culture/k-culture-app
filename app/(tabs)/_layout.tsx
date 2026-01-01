import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DrawerMenu } from "@/components/drawer-menu";
import { HapticTab } from "@/components/haptic-tab";
import { ShareSheet } from "@/components/share-sheet";
import { DrawerProvider, useDrawer } from "@/contexts/drawer-context";
import { ShareSheetProvider, useShareSheet } from "@/contexts/share-sheet-context";

function TabLayoutContent() {
  const { isOpen, closeDrawer } = useDrawer();
  const { isOpen: isShareSheetOpen, closeShareSheet } = useShareSheet();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#A3E635",
          tabBarInactiveTintColor: "#6B7280",
          tabBarStyle: {
            backgroundColor: "#000000",
            borderTopColor: "#1F2937",
            borderTopWidth: 1,
            paddingTop: 8,
            paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
            height: 56 + insets.bottom,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "500",
            marginTop: 4,
          },
          headerShown: false,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "홈",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="connections"
          options={{
            title: "일촌",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "people" : "people-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "프로필",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "검색",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "search" : "search-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: "커뮤니티",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "chatbubbles" : "chatbubbles-outline"} size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <DrawerMenu visible={isOpen} onClose={closeDrawer} />
      <ShareSheet visible={isShareSheetOpen} onClose={closeShareSheet} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <DrawerProvider>
      <ShareSheetProvider>
        <TabLayoutContent />
      </ShareSheetProvider>
    </DrawerProvider>
  );
}
