import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

interface FormRowProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  buttonLabel?: string;
  buttonActive?: boolean;
  onButtonPress?: () => void;
  hasCalendar?: boolean;
}

function FormRow({
  label,
  placeholder,
  value,
  onChangeText,
  buttonLabel,
  buttonActive,
  onButtonPress,
  hasCalendar,
}: FormRowProps) {
  return (
    <View className="mb-6">
      <Text className="text-gray-400 mb-2">{label}</Text>
      <View className="flex-row items-center">
        <View className="flex-1 bg-[#1A1A1A] rounded-lg px-4 py-4 flex-row items-center">
          <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#6B7280"
            className="flex-1 border-0 bg-transparent p-0"
          />
          {hasCalendar && <Ionicons name="calendar-outline" size={20} color="#6B7280" />}
        </View>
        {buttonLabel && (
          <Pressable
            onPress={onButtonPress}
            className="ml-3 border rounded-lg px-4 py-3"
            style={{ borderColor: buttonActive ? "#F97316" : "#4B5563" }}
          >
            <Text style={{ color: buttonActive ? "#F97316" : "#9CA3AF" }}>{buttonLabel}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default function JobCreateScreen() {
  const [workName, setWorkName] = useState("");
  const [production, setProduction] = useState("");
  const [director, setDirector] = useState("");
  const [pay, setPay] = useState("");
  const [deadline, setDeadline] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [workNamePrivate, setWorkNamePrivate] = useState(true);
  const [productionPrivate, setProductionPrivate] = useState(true);
  const [directorPrivate, setDirectorPrivate] = useState(true);
  const [payNegotiable, setPayNegotiable] = useState(true);

  return (
    <ScreenWrapper>
      <Header
        title="구인공고 작성"
        rightComponent={
          <Pressable className="p-2">
            <Text className="text-orange-500 font-semibold">완료</Text>
          </Pressable>
        }
      />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Text className="text-gray-400 mb-3">카테고리</Text>
        <View className="flex-row mb-6">
          <Pressable className="border border-gray-600 rounded-full px-4 py-2 mr-3 flex-row items-center">
            <Text className="text-gray-300">배우&스태프</Text>
            <Ionicons name="chevron-down" size={16} color="#9CA3AF" style={{ marginLeft: 4 }} />
          </Pressable>
          <Pressable className="border border-gray-600 rounded-full px-4 py-2 flex-row items-center">
            <Text className="text-gray-300">분야 전체</Text>
            <Ionicons name="chevron-down" size={16} color="#9CA3AF" style={{ marginLeft: 4 }} />
          </Pressable>
        </View>

        <FormRow
          label="작품명"
          placeholder="작품명"
          value={workName}
          onChangeText={setWorkName}
          buttonLabel="미팅시 공개"
          buttonActive={workNamePrivate}
          onButtonPress={() => setWorkNamePrivate(!workNamePrivate)}
        />
        <FormRow
          label="제작"
          placeholder="제작"
          value={production}
          onChangeText={setProduction}
          buttonLabel="미팅시 공개"
          buttonActive={productionPrivate}
          onButtonPress={() => setProductionPrivate(!productionPrivate)}
        />
        <FormRow
          label="감독"
          placeholder="감독"
          value={director}
          onChangeText={setDirector}
          buttonLabel="미팅시 공개"
          buttonActive={directorPrivate}
          onButtonPress={() => setDirectorPrivate(!directorPrivate)}
        />
        <FormRow
          label="페이"
          placeholder="페이"
          value={pay}
          onChangeText={setPay}
          buttonLabel="협의"
          buttonActive={payNegotiable}
          onButtonPress={() => setPayNegotiable(!payNegotiable)}
        />
        <FormRow
          label="마감일"
          placeholder="마감일을 선택해주세요"
          value={deadline}
          onChangeText={setDeadline}
          hasCalendar
        />

        <View className="border-b border-gray-700 py-4 mb-4">
          <Input
            value={title}
            onChangeText={setTitle}
            placeholder="제목"
            placeholderTextColor="#6B7280"
            className="text-lg border-0 bg-transparent p-0"
          />
        </View>

        <View className="border-b border-gray-700 py-4 mb-8">
          <Input
            value={content}
            onChangeText={setContent}
            placeholder="내용을 입력하세요."
            placeholderTextColor="#6B7280"
            className="border-0 bg-transparent p-0"
            multiline
            style={{ minHeight: 200, textAlignVertical: "top" }}
          />
        </View>

        <View className="h-8" />
      </ScrollView>
    </ScreenWrapper>
  );
}
