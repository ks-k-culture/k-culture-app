import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const INQUIRY_TYPES = ["일반문의", "제휴문의", "버그신고", "기능제안"];

export default function InquiryScreen() {
  const [selectedType, setSelectedType] = useState("일반문의");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      return;
    }
    console.log({ type: selectedType, title, content });
    router.back();
  };

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        <View className="flex-row items-center px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="flex-1 text-white text-xl font-bold text-center mr-10">문의하기</Text>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <Text className="text-white font-bold text-base mb-3">문의 유형</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6"
            contentContainerStyle={{ gap: 8 }}
          >
            {INQUIRY_TYPES.map((type) => (
              <Pressable
                key={type}
                onPress={() => setSelectedType(type)}
                className={`px-5 py-2.5 rounded-full border ${
                  selectedType === type ? "bg-purple-500 border-purple-500" : "bg-transparent border-gray-600"
                }`}
              >
                <Text className={`font-semibold ${selectedType === type ? "text-white" : "text-gray-400"}`}>
                  {type}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          <Text className="text-white font-bold text-base mb-3">제목</Text>
          <TextInput
            className="bg-gray-900 rounded-xl px-4 py-4 text-white text-base mb-6"
            placeholder="제목을 입력해주세요"
            placeholderTextColor="#6B7280"
            value={title}
            onChangeText={setTitle}
          />

          <Text className="text-white font-bold text-base mb-3">내용</Text>
          <TextInput
            className="bg-gray-900 rounded-xl px-4 py-4 text-white text-base mb-6"
            placeholder="문의 내용을 입력해주세요"
            placeholderTextColor="#6B7280"
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
            style={{ minHeight: 200 }}
          />
        </ScrollView>

        <View className="px-6 pb-4">
          <Pressable onPress={handleSubmit} className="bg-purple-500 rounded-xl py-4 items-center active:opacity-80">
            <Text className="text-white text-lg font-bold">문의하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
