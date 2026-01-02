import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { INQUIRY_TYPES } from "@/constants/data";

export default function InquiryScreen() {
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);
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
    <ScreenWrapper edges={["top", "bottom"]}>
      <Header title="문의하기" />

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        <Label className="text-white font-bold text-base mb-3">문의 유형</Label>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
          contentContainerStyle={{ gap: 8 }}
        >
          {INQUIRY_TYPES.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onPress={() => setSelectedType(type)}
              className="rounded-full px-5"
            >
              <Text className={selectedType === type ? "text-white" : "text-gray-400"}>{type}</Text>
            </Button>
          ))}
        </ScrollView>

        <View className="mb-6">
          <Label className="text-white font-bold text-base mb-3">제목</Label>
          <Input placeholder="제목을 입력해주세요" value={title} onChangeText={setTitle} />
        </View>

        <View className="mb-6">
          <Label className="text-white font-bold text-base mb-3">내용</Label>
          <Input
            placeholder="문의 내용을 입력해주세요"
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
            style={{ minHeight: 200 }}
          />
        </View>
      </ScrollView>

      <View className="px-6 pb-4">
        <Button onPress={handleSubmit} className="w-full py-4">
          <Text className="text-white text-lg font-bold">문의하기</Text>
        </Button>
      </View>
    </ScreenWrapper>
  );
}
