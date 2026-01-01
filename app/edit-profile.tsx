import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const [name, setName] = useState("김규민");
  const [userId, setUserId] = useState("user7269");
  const [intro, setIntro] = useState("");
  const [phone, setPhone] = useState("010-6612-1915");
  const [email, setEmail] = useState("abc2232002@naver.com");
  const [isFree, setIsFree] = useState(true);
  const [phonePublic, setPhonePublic] = useState(false);
  const [emailPublic, setEmailPublic] = useState(false);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [birthYear, setBirthYear] = useState("2001");
  const [birthMonth, setBirthMonth] = useState("11");
  const [birthDay, setBirthDay] = useState("05");
  const [category, setCategory] = useState<"staff" | "actor">("actor");

  const handleSave = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-black">
      <LinearGradient
        colors={["#1a0a2e", "#0d0615", "#000000"]}
        locations={[0, 0.3, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView className="flex-1" edges={["top"]}>
        <View className="flex-row items-center justify-between px-4 py-3">
          <Pressable className="p-2" onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold">프로필 편집</Text>
          <Pressable className="p-2" onPress={handleSave}>
            <Text className="text-purple-400 font-semibold text-base">저장</Text>
          </Pressable>
        </View>

        <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
          <View className="items-center py-8">
            <View className="relative">
              <View className="w-24 h-24 rounded-full bg-gray-700" />
              <View className="absolute bottom-0 right-0 w-8 h-8 bg-purple-600 rounded-full items-center justify-center">
                <Ionicons name="camera" size={16} color="white" />
              </View>
            </View>
            <Text className="text-gray-400 mt-3">프로필 사진</Text>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-purple-400 font-semibold">상태: 프리</Text>
            <Switch
              value={isFree}
              onValueChange={setIsFree}
              trackColor={{ false: "#374151", true: "#22C55E" }}
              thumbColor="white"
            />
          </View>
          <Text className="text-gray-500 text-sm mb-6">현재 작품을 진행 중이거나 있는지 상태를 공유해 보세요.</Text>

          <Text className="text-gray-400 mb-2">이름</Text>
          <View className="bg-gray-900 rounded-xl px-4 py-4 mb-1">
            <TextInput className="text-white text-base" value={name} onChangeText={setName} maxLength={14} />
          </View>
          <Text className="text-gray-500 text-sm text-right mb-2">{name.length}/14</Text>
          <Text className="text-gray-500 text-sm mb-6">
            작품 인증을 위해 크레딧에 올라가는 본명(활동명)을 사용해주세요.{"\n"}
            크레딧과 이름이 일치하지 않을 시 인증이 불가능합니다.
          </Text>

          <Text className="text-gray-400 mb-2">아이디</Text>
          <View className="flex-row items-center bg-gray-900 rounded-xl px-4 py-4 mb-1">
            <TextInput className="flex-1 text-white text-base" value={userId} onChangeText={setUserId} />
            <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
          </View>
          <Text className="text-gray-500 text-sm mb-6">
            영어, 숫자, 언더바만 사용 가능하며 4글자 이상이어야 합니다.{"\n"}
            아이디 변경 후 14일 이내에 변경이 불가능합니다.
          </Text>

          <Text className="text-gray-400 mb-2">소개</Text>
          <View className="bg-gray-900 rounded-xl px-4 py-4 mb-1">
            <TextInput
              className="text-white text-base"
              value={intro}
              onChangeText={setIntro}
              placeholder="간단한 소개를 입력하세요"
              placeholderTextColor="#6B7280"
              multiline
              maxLength={50}
            />
          </View>
          <Text className="text-gray-500 text-sm text-right mb-6">{intro.length}/50</Text>

          <Text className="text-gray-400 mb-2">전화번호</Text>
          <View className="flex-row items-center mb-1">
            <View className="flex-1 bg-gray-900 rounded-xl px-4 py-4 mr-3">
              <TextInput
                className="text-white text-base"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
            <Switch
              value={phonePublic}
              onValueChange={setPhonePublic}
              trackColor={{ false: "#374151", true: "#22C55E" }}
              thumbColor="white"
            />
          </View>
          <Text className="text-gray-500 text-sm mb-6">일촌에게만 공개됩니다</Text>

          <Text className="text-gray-400 mb-2">이메일</Text>
          <View className="flex-row items-center mb-1">
            <View className="flex-1 bg-gray-900 rounded-xl px-4 py-4 mr-3">
              <TextInput
                className="text-white text-base"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <Switch
              value={emailPublic}
              onValueChange={setEmailPublic}
              trackColor={{ false: "#374151", true: "#22C55E" }}
              thumbColor="white"
            />
          </View>
          <Text className="text-gray-500 text-sm mb-6">일촌에게만 공개됩니다</Text>

          <Text className="text-gray-400 mb-3">성별</Text>
          <View className="flex-row gap-3 mb-6">
            <Pressable
              onPress={() => setGender("male")}
              className={`flex-1 py-4 rounded-xl items-center ${gender === "male" ? "bg-purple-600" : "bg-gray-900"}`}
            >
              <Text className={gender === "male" ? "text-white font-semibold" : "text-gray-400"}>남자</Text>
            </Pressable>
            <Pressable
              onPress={() => setGender("female")}
              className={`flex-1 py-4 rounded-xl items-center ${gender === "female" ? "bg-purple-600" : "bg-gray-900"}`}
            >
              <Text className={gender === "female" ? "text-white font-semibold" : "text-gray-400"}>여자</Text>
            </Pressable>
          </View>

          <Text className="text-gray-400 mb-3">생년월일</Text>
          <View className="flex-row gap-3 mb-6">
            <View className="flex-1 bg-gray-900 rounded-xl px-4 py-4 flex-row items-center justify-between">
              <Text className="text-white">{birthYear}</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </View>
            <View className="flex-1 bg-gray-900 rounded-xl px-4 py-4 flex-row items-center justify-between">
              <Text className="text-white">{birthMonth}</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </View>
            <View className="flex-1 bg-gray-900 rounded-xl px-4 py-4 flex-row items-center justify-between">
              <Text className="text-white">{birthDay}</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </View>
          </View>

          <Text className="text-gray-400 mb-3">구분</Text>
          <View className="flex-row gap-3 mb-8">
            <Pressable
              onPress={() => setCategory("staff")}
              className={`flex-1 py-4 rounded-xl items-center ${
                category === "staff" ? "bg-purple-600" : "bg-gray-900"
              }`}
            >
              <Text className={category === "staff" ? "text-white font-semibold" : "text-gray-400"}>제작(스태프)</Text>
            </Pressable>
            <Pressable
              onPress={() => setCategory("actor")}
              className={`flex-1 py-4 rounded-xl items-center ${
                category === "actor" ? "bg-purple-600" : "bg-gray-900"
              }`}
            >
              <Text className={category === "actor" ? "text-white font-semibold" : "text-gray-400"}>출연(배우)</Text>
            </Pressable>
          </View>

          <View className="h-8" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
