import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

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
    type: "버그",
    version: "1.6.11",
    title: "업데이트 안내",
    date: "2025.09.05",
    content: "• 로그인 관련 오류 수정\n• 작품 등록 시 이미지 업로드 문제 해결\n• 푸시 알림 딜레이 개선",
  },
  {
    id: "4",
    type: "버그",
    version: "1.6.10",
    title: "업데이트 안내",
    date: "2025.09.04",
    content: "• 커뮤니티 댓글 작성 오류 수정\n• 프로필 편집 저장 실패 문제 해결\n• 앱 성능 최적화",
  },
  {
    id: "5",
    type: "버그",
    version: "1.6.9",
    title: "업데이트 안내",
    date: "2025.09.03",
    content: "• 일촌 신청 알림 오류 수정\n• 작품 상세 페이지 로딩 개선\n• 기타 버그 수정",
  },
  {
    id: "6",
    type: "버그",
    version: "1.6.8",
    title: "업데이트 안내",
    date: "2025.08.27",
    content: "• 채팅 기능 안정성 개선\n• 이미지 로딩 속도 향상\n• 메모리 사용량 최적화",
  },
  {
    id: "7",
    type: "버그",
    version: "1.6.6",
    title: "업데이트 안내",
    date: "2025.08.14",
    content: "• 회원가입 과정 오류 수정\n• 소셜 로그인 연동 개선\n• UI/UX 개선사항 적용",
  },
  {
    id: "8",
    type: "버그",
    version: "1.6.3",
    title: "업데이트 안내",
    date: "2025.08.11",
    content: "• 앱 최초 실행 시 크래시 문제 해결\n• 네트워크 연결 안정성 개선\n• 기타 마이너 버그 수정",
  },
  {
    id: "9",
    type: "기능",
    version: "1.3.0",
    title: "기능 업데이트 안내",
    date: "2025.07.01",
    content:
      "• 새로운 커뮤니티 기능 추가\n• 프로필 꾸미기 기능 개선\n• 작품 검색 필터 기능 추가\n• 일촌 추천 알고리즘 개선",
  },
  {
    id: "10",
    type: "기능",
    version: "1.2.0",
    title: "기능 업데이트 안내",
    date: "2025.06.30",
    content: "• 실시간 채팅 기능 추가\n• 작품 스크랩 기능 추가\n• 알림 설정 세분화",
  },
  {
    id: "11",
    type: "기능",
    version: "1.1.0",
    title: "기능 업데이트 안내",
    date: "2025.06.28",
    content: "• 다크모드 지원\n• 프로필 공유 기능 추가\n• 작품 상세 페이지 UI 개선",
  },
  {
    id: "12",
    type: "버그",
    version: "1.0.9",
    title: "버그 패치 안내",
    date: "2025.06.26",
    content: "• 로그인 유지 오류 수정\n• 이미지 캐싱 문제 해결\n• 기타 안정성 개선",
  },
  {
    id: "13",
    type: "버그",
    version: "1.0.2",
    title: "버그 패치 안내",
    date: "2025.06.08",
    content: "• 회원가입 오류 수정\n• 앱 크래시 문제 해결\n• 성능 최적화",
  },
  {
    id: "14",
    type: "일반",
    title: "iOS 런칭 안내",
    date: "2025.06.02",
    content:
      "안녕하세요, K-Culture입니다.\n\niOS 앱스토어에 K-Culture가 정식 출시되었습니다!\n\n많은 이용 부탁드립니다. 감사합니다.",
  },
  {
    id: "15",
    type: "일반",
    title: "안드로이드 런칭 안내",
    date: "2025.05.28",
    content:
      "안녕하세요, K-Culture입니다.\n\n구글 플레이스토어에 K-Culture가 정식 출시되었습니다!\n\n많은 이용 부탁드립니다. 감사합니다.",
  },
];

function NoticeItem({ notice }: { notice: Notice }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: NoticeType) => {
    switch (type) {
      case "버그":
        return { border: "#F59E0B", text: "#F59E0B", bg: "transparent" };
      case "기능":
        return { border: "#6B7280", text: "#9CA3AF", bg: "transparent" };
      case "일반":
        return { border: "#3B82F6", text: "#60A5FA", bg: "transparent" };
    }
  };

  const colors = getTypeColor(notice.type);

  return (
    <Pressable onPress={() => setIsExpanded(!isExpanded)} className="bg-[#1A1A1A] rounded-xl mx-4 mb-3 overflow-hidden">
      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            <View className="px-3 py-1.5 rounded-full mr-3" style={{ borderWidth: 1, borderColor: colors.border }}>
              <Text className="text-sm font-medium" style={{ color: colors.text }}>
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
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">공지사항</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="py-2">
            {NOTICES.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </View>
          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
