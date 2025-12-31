import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQ_DATA = [
  {
    id: "1",
    question: "등록한 작품을 삭제하고 싶어요. 어떻게 해야 하나요?",
    answer:
      "두드림에서는 누구나 자유롭게 자신의 필모그래피를 등록할 수 있습니다.\n다만, 등록한 작품을 삭제할 경우에는 서비스 안정성과 정확한 기록 관리를 위해 고객센터를 통해 별도로 요청해주셔야합니다.\n확인 절차를 거친 뒤 신속하게 처리해드리고 있습니다.\n(※ 불편을 드려 죄송하지만, 보다 신뢰할 수 있는 필모그래피 환경을 만들기 위함이니 양해 부탁드립니다.)",
  },
  {
    id: "2",
    question: "두드림에 없는 직군이나 파트가 있어요. 추가 요청이 가능한가요?",
    answer: "물론입니다! 앱 내 문의하기를 통해 제안해주시면, 검토 후 반영하도록 하겠습니다.",
  },
  {
    id: "3",
    question: "두드림 이용은 무료인가요?",
    answer:
      "기본적인 서비스(필모그래피 관리, 일촌 맺기 등)는 무료로 제공됩니다. 일부 고급 기능(광고 노출, 비일촌 메시지 보내기 등)은 유료로 제공됩니다.",
  },
  {
    id: "4",
    question: "내 필모그래피를 수정하거나 삭제할 수 있나요?",
    answer: "네, 가능합니다. 마이페이지에서 본인이 등록한 필모그래피를 자유롭게 수정하거나 삭제할 수 있습니다.",
  },
  {
    id: "5",
    question: "일촌이 아닌 사람에게 메시지를 보내려면 어떻게 하나요?",
    answer: "일촌이 아닌 사용자에게 메시지를 보내기 위해서는 유료 플랜을 통해 별도로 메시지 전송권을 구매해야 합니다.",
  },
  {
    id: "6",
    question: "일촌은 무엇인가요?",
    answer:
      "일촌은 서로 연결되어 직접 메시지를 주고받을 수 있는 관계를 의미합니다. 일촌을 맺으면 상대방의 경력 변동이나 활동 소식도 쉽게 확인할 수 있습니다.",
  },
  {
    id: "7",
    question: "두드림에 가입하려면 어떤 자격이 필요한가요?",
    answer:
      "영화, 드라마, 광고, 방송 등 영상 산업에 참여한 이력이 있다면 누구나 가입할 수 있습니다. 분야별 신입도 환영합니다.",
  },
  {
    id: "8",
    question: "필모그래피 인증은 어떻게 이루어지나요?",
    answer:
      "프로젝트에 참여한 증빙 자료(예: 엔딩크레딧 사진)를 업로드하면, 관리자가 확인 후 인증해드립니다. 작품에 크레딧이 보이는 상업 작품의 경우 이름과 역할만 입력해도 자동 인증 절차가 진행됩니다.",
  },
  {
    id: "9",
    question: "두드림은 어떤 서비스인가요?",
    answer:
      "두드림은 영화, 드라마, 광고 등 영상 산업 종사자들이 자신의 필모그래피를 정리하고, 동료들과 네트워킹하며, 경력을 인증할 수 있는 플랫폼입니다.",
  },
];

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="flex-1 text-white text-xl font-bold text-center mr-10">자주묻는질문</Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {FAQ_DATA.map((item) => (
            <View key={item.id} className="mb-3">
              <Pressable
                onPress={() => toggleExpand(item.id)}
                className="bg-gray-900 rounded-xl px-5 py-5 flex-row items-center justify-between"
              >
                <Text className="text-white flex-1 mr-4">{item.question}</Text>
                <Ionicons name={expandedId === item.id ? "chevron-up" : "chevron-down"} size={20} color="#6B7280" />
              </Pressable>

              {expandedId === item.id && item.answer && (
                <View className="bg-gray-800 rounded-b-xl px-5 py-4 -mt-2">
                  <Text className="text-gray-400">{item.answer}</Text>
                </View>
              )}
            </View>
          ))}
          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
