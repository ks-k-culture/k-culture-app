import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  hint?: string;
  multiline?: boolean;
  isDropdown?: boolean;
  hasSearch?: boolean;
}

function FormField({ label, placeholder, value, onChangeText, hint, multiline, isDropdown, hasSearch }: FormFieldProps) {
  return (
    <View className="flex-row mb-6">
      <Text className="text-gray-400 w-20 pt-4">{label}</Text>
      <View className="flex-1">
        <View className="bg-[#2A2A2A] rounded-xl px-4 py-4 flex-row items-center">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#6B7280"
            className="flex-1 text-white"
            multiline={multiline}
            style={multiline ? { minHeight: 100, textAlignVertical: "top" } : undefined}
          />
          {isDropdown && <Ionicons name="chevron-down" size={20} color="#6B7280" />}
          {hasSearch && <Ionicons name="search-outline" size={20} color="#6B7280" />}
        </View>
        {hint && <Text className="text-gray-500 text-sm mt-2">{hint}</Text>}
      </View>
    </View>
  );
}

export default function TeamRegisterScreen() {
  const [teamField, setTeamField] = useState("");
  const [teamName, setTeamName] = useState("");
  const [oneLiner, setOneLiner] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        {/* 헤더 */}
        <View className="flex-row items-center px-4 py-4">
          <Pressable onPress={() => router.back()} className="p-2 -ml-2">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center mr-8">팀 등록하기</Text>
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {/* 이미지 업로드 */}
          <View className="items-center my-8">
            <Pressable className="w-32 h-32 border border-gray-600 rounded-xl items-center justify-center">
              <Ionicons name="image-outline" size={40} color="#6B7280" />
              <View className="absolute top-2 right-2">
                <Ionicons name="add" size={20} color="#6B7280" />
              </View>
            </Pressable>
          </View>

          {/* 폼 필드들 */}
          <FormField
            label="팀"
            placeholder="팀 분야 선택"
            value={teamField}
            onChangeText={setTeamField}
            hint="팀 분야를 선택해 주세요. (다중선택 가능)"
            isDropdown
          />

          <FormField
            label="팀명"
            placeholder="팀 또는 회사명 입력"
            value={teamName}
            onChangeText={setTeamName}
            hint="실제 활동 중인 팀 또는 회사명을 입력해 주세요."
          />

          <FormField
            label="한줄소개"
            placeholder="한줄소개 입력"
            value={oneLiner}
            onChangeText={setOneLiner}
            hint="팀을 대표하는 내용을 한줄로 작성해 주세요."
          />

          <FormField
            label="소개"
            placeholder="소개 입력"
            value={introduction}
            onChangeText={setIntroduction}
            hint="팀의 주요 특장점 등 소개 정보를 입력해 주세요."
            multiline
          />

          <FormField
            label="팀 연락처"
            placeholder="연락처 입력"
            value={contact}
            onChangeText={setContact}
            hint="실제 연락 가능한 전화번호를 입력해 주세요."
          />

          <FormField
            label="팀 이메일"
            placeholder="이메일 입력"
            value={email}
            onChangeText={setEmail}
            hint="업무용으로 사용하는 이메일 주소를 입력해 주세요."
          />

          <FormField
            label="팀 사이트"
            placeholder="사이트 주소 입력"
            value={website}
            onChangeText={setWebsite}
            hint="팀 또는 회사의 웹사이트가 있다면 입력해 주세요."
          />

          <FormField
            label="사업자번호"
            placeholder="사업자등록번호 입력"
            value={businessNumber}
            onChangeText={setBusinessNumber}
            hint="사업자등록번호가 있는 경우 입력해 주세요."
          />

          {/* 주소 섹션 */}
          <View className="mb-6">
            <Text className="text-gray-400 mb-3">주소</Text>
            <View className="bg-[#2A2A2A] rounded-xl px-4 py-4 flex-row items-center mb-2">
              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="주소 검색"
                placeholderTextColor="#6B7280"
                className="flex-1 text-white"
              />
              <Ionicons name="search-outline" size={20} color="#6B7280" />
            </View>
            <View className="bg-[#2A2A2A] rounded-xl px-4 py-4">
              <TextInput
                value={detailAddress}
                onChangeText={setDetailAddress}
                placeholder="상세주소 입력"
                placeholderTextColor="#6B7280"
                className="text-white"
              />
            </View>
            <Text className="text-gray-500 text-sm mt-2">카카오 우편번호 서비스로 정확한 주소를 입력해 주세요.</Text>
          </View>

          {/* 경고 문구 */}
          <Text className="text-gray-500 text-center mb-6">
            거짓된 정보를 기입할 경우 사용에 제한될 수 있습니다.
          </Text>

          {/* 등록하기 버튼 */}
          <Pressable className="bg-purple-600 rounded-xl py-4 items-center mb-8">
            <Text className="text-white font-bold text-lg">등록하기</Text>
          </Pressable>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

