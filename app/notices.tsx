import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Text } from "@/components/ui/text";

type NoticeType = "버그" | "기능" | "일반";

interface Notice {
  id: string;
  type: NoticeType;
  version?: string;
  title: string;
  date: string;
  content: string;
}

const NOTICES: Notice[] = [
  {
    id: "1",
    type: "버그",
    version: "1.7.1",
    title: "업데이트 안내",
    date: "2025.10.01",
    content:
      "• 일부 기기에서 앱이 강제 종료되는 문제 수정\n• 프로필 이미지 업로드 오류 해결\n• 커뮤니티 게시글 작성 시 발생하던 오류 수정\n• 전반적인 앱 안정성 개선",
  },
  {
    id: "2",
    type: "버그",
    version: "1.6.12",
    title: "업데이트 안내",
    date: "2025.09.06",
    content: "• 검색 기능 개선\n• 알림 수신 오류 수정\n• 메시지 전송 실패 문제 해결\n• 일부 UI 버그 수정",
  },
  {
    id: "3",
    type: "기능",
    version: "1.3.0",
    title: "기능 업데이트 안내",
    date: "2025.07.01",
    content:
      "• 새로운 커뮤니티 기능 추가\n• 프로필 꾸미기 기능 개선\n• 작품 검색 필터 기능 추가\n• 일촌 추천 알고리즘 개선",
  },
  {
    id: "4",
    type: "일반",
    title: "iOS 런칭 안내",
    date: "2025.06.02",
    content:
      "안녕하세요, K-Culture입니다.\n\niOS 앱스토어에 K-Culture가 정식 출시되었습니다!\n\n많은 이용 부탁드립니다. 감사합니다.",
  },
];

function NoticeItem({ notice }: { notice: Notice }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: NoticeType) => {
    switch (type) {
      case "버그":
        return "#F59E0B";
      case "기능":
        return "#9CA3AF";
      case "일반":
        return "#60A5FA";
    }
  };

  const color = getTypeColor(notice.type);

  return (
    <Pressable onPress={() => setIsExpanded(!isExpanded)} className="bg-[#1A1A1A] rounded-xl mx-4 mb-3 overflow-hidden">
      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <View className="px-3 py-1.5 rounded-full mr-3" style={{ borderWidth: 1, borderColor: color }}>
              <Text className="text-sm font-medium" style={{ color }}>
                {notice.type}
              </Text>
            </View>
            <Text className="text-white text-base font-medium flex-1" numberOfLines={1}>
              {notice.version ? `[${notice.version}] ` : ""}
              {notice.title}
            </Text>
          </View>
          <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={24} color="#6B7280" />
        </View>
        <Text className="text-gray-500 text-sm mt-2 ml-1">{notice.date}</Text>
      </View>

      {isExpanded && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(150)}
          className="px-4 pb-4 pt-2 border-t border-gray-800"
        >
          <Text className="text-gray-300 text-sm leading-6">{notice.content}</Text>
        </Animated.View>
      )}
    </Pressable>
  );
}

export default function NoticesScreen() {
  return (
    <ScreenWrapper>
      <Header title="공지사항" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="py-2">
          {NOTICES.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))}
        </View>
        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
