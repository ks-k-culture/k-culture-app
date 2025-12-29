import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TOTAL_STEPS = 6;

type Gender = "male" | "female" | null;
type ActivityType = "staff" | "actor" | null;

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);

  // Step 1: 이름
  const [name, setName] = useState("");

  // Step 2: 아이디
  const [userId, setUserId] = useState("");

  // Step 3: 전화번호
  const [phone, setPhone] = useState("");

  // Step 4: 성별
  const [gender, setGender] = useState<Gender>(null);

  // Step 5: 생년월일
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showDayPicker, setShowDayPicker] = useState(false);

  // Step 6: 활동분야
  const [activityType, setActivityType] = useState<ActivityType>(null);

  // 유효성 검사
  const isStep1Valid = name.trim().length >= 2;
  const isStep2Valid = /^[a-zA-Z0-9_]{4,}$/.test(userId);
  const isStep3Valid = /^[0-9]{10,11}$/.test(phone.replace(/-/g, ""));
  const isStep4Valid = gender !== null;
  const isStep5Valid = birthYear && birthMonth && birthDay;
  const isStep6Valid = activityType !== null;

  const isCurrentStepValid = () => {
    switch (step) {
      case 1:
        return isStep1Valid;
      case 2:
        return isStep2Valid;
      case 3:
        return isStep3Valid;
      case 4:
        return isStep4Valid;
      case 5:
        return isStep5Valid;
      case 6:
        return isStep6Valid;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      // TODO: 회원가입 데이터 백엔드로 전송
      console.log({
        name,
        userId,
        phone,
        gender,
        birthDate: `${birthYear}-${birthMonth}-${birthDay}`,
        activityType,
      });
      router.replace("/guide" as any);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const formatPhone = (text: string) => {
    const numbers = text.replace(/[^0-9]/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => String(currentYear - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">이름</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="엔딩크레딧에 올라가는 본명을 입력하세요"
              placeholderTextColor="#6B7280"
              className="bg-gray-800 text-white text-base px-4 py-4 rounded-xl mb-3"
              autoFocus
            />
            <Text className="text-gray-400 text-sm leading-5">
              작품 인증을 위해 크레딧에 올라가는 본명(활동명)을 사용해주세요.
            </Text>
            <Text className="text-gray-400 text-sm leading-5">
              크레딧과 이름이 일치하지 않을 시 인증이 불가능합니다.
            </Text>
          </>
        );

      case 2:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">아이디</Text>
            <TextInput
              value={userId}
              onChangeText={setUserId}
              placeholder="사용할 아이디를 입력하세요"
              placeholderTextColor="#6B7280"
              className="bg-gray-800 text-white text-base px-4 py-4 rounded-xl mb-3"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text className="text-gray-400 text-sm leading-5">
              영어, 숫자, 언더바만 사용 가능하며 4글자 이상이어야 합니다.
            </Text>
          </>
        );

      case 3:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">전화번호</Text>
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(formatPhone(text))}
              placeholder="010-0000-0000"
              placeholderTextColor="#6B7280"
              className="bg-gray-800 text-white text-base px-4 py-4 rounded-xl mb-3"
              keyboardType="phone-pad"
              maxLength={13}
            />
            <Text className="text-gray-400 text-sm leading-5">숫자만 입력해 주세요.</Text>
            <Text className="text-gray-400 text-sm leading-5">전화번호는 일촌에게만 공개됩니다.</Text>
          </>
        );

      case 4:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">성별</Text>
            <View className="flex-row gap-3 mb-3">
              <Pressable
                onPress={() => setGender("male")}
                className={`flex-1 py-6 rounded-xl items-center ${gender === "male" ? "bg-purple-500" : "bg-gray-800"}`}
              >
                <Text className={`text-base font-semibold ${gender === "male" ? "text-white" : "text-gray-300"}`}>
                  남자
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setGender("female")}
                className={`flex-1 py-6 rounded-xl items-center ${gender === "female" ? "bg-purple-500" : "bg-gray-800"}`}
              >
                <Text className={`text-base font-semibold ${gender === "female" ? "text-white" : "text-gray-300"}`}>
                  여자
                </Text>
              </Pressable>
            </View>
            <Text className="text-gray-400 text-sm leading-5">성별을 선택해주세요.</Text>
          </>
        );

      case 5:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">생년월일</Text>
            <View className="flex-row gap-2 mb-3">
              <Pressable
                onPress={() => setShowYearPicker(!showYearPicker)}
                className="flex-1 flex-row items-center justify-between bg-gray-800 px-4 py-4 rounded-xl"
              >
                <Text className={birthYear ? "text-white" : "text-gray-500"}>{birthYear || "년도"}</Text>
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </Pressable>

              <Pressable
                onPress={() => setShowMonthPicker(!showMonthPicker)}
                className="flex-1 flex-row items-center justify-between bg-gray-800 px-4 py-4 rounded-xl"
              >
                <Text className={birthMonth ? "text-white" : "text-gray-500"}>{birthMonth || "월"}</Text>
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </Pressable>

              <Pressable
                onPress={() => setShowDayPicker(!showDayPicker)}
                className="flex-1 flex-row items-center justify-between bg-gray-800 px-4 py-4 rounded-xl"
              >
                <Text className={birthDay ? "text-white" : "text-gray-500"}>{birthDay || "일"}</Text>
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </Pressable>
            </View>

            {showYearPicker && (
              <ScrollView className="max-h-48 bg-gray-800 rounded-xl mb-3">
                {years.map((year) => (
                  <Pressable
                    key={year}
                    onPress={() => {
                      setBirthYear(year);
                      setShowYearPicker(false);
                    }}
                    className="py-3 px-4 border-b border-gray-700"
                  >
                    <Text className="text-white text-center">{year}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            )}

            {showMonthPicker && (
              <ScrollView className="max-h-48 bg-gray-800 rounded-xl mb-3">
                {months.map((month) => (
                  <Pressable
                    key={month}
                    onPress={() => {
                      setBirthMonth(month);
                      setShowMonthPicker(false);
                    }}
                    className="py-3 px-4 border-b border-gray-700"
                  >
                    <Text className="text-white text-center">{month}월</Text>
                  </Pressable>
                ))}
              </ScrollView>
            )}

            {showDayPicker && (
              <ScrollView className="max-h-48 bg-gray-800 rounded-xl mb-3">
                {days.map((day) => (
                  <Pressable
                    key={day}
                    onPress={() => {
                      setBirthDay(day);
                      setShowDayPicker(false);
                    }}
                    className="py-3 px-4 border-b border-gray-700"
                  >
                    <Text className="text-white text-center">{day}일</Text>
                  </Pressable>
                ))}
              </ScrollView>
            )}

            <Text className="text-gray-400 text-sm leading-5">생년월일을 모두 선택해주세요.</Text>
            <Text className="text-gray-400 text-sm leading-5">만 14세 이상만 가입이 가능합니다.</Text>
          </>
        );

      case 6:
        return (
          <>
            <Text className="text-white text-xl font-bold mb-4">활동분야</Text>
            <View className="flex-row gap-3 mb-3">
              <Pressable
                onPress={() => setActivityType("staff")}
                className={`flex-1 py-6 rounded-xl items-center ${activityType === "staff" ? "bg-purple-500" : "bg-gray-800"}`}
              >
                <Text
                  className={`text-base font-semibold ${activityType === "staff" ? "text-white" : "text-gray-300"}`}
                >
                  제작(스태프)
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setActivityType("actor")}
                className={`flex-1 py-6 rounded-xl items-center ${activityType === "actor" ? "bg-purple-500" : "bg-gray-800"}`}
              >
                <Text
                  className={`text-base font-semibold ${activityType === "actor" ? "text-white" : "text-gray-300"}`}
                >
                  출연(배우)
                </Text>
              </Pressable>
            </View>
            <Text className="text-gray-400 text-sm leading-5">주로 활동하시는 분야를 선택해주세요.</Text>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
        <View className="flex-1 px-6 pt-4">
          <Text className="text-white text-2xl font-bold mb-6">회원가입</Text>
          <View className="flex-row h-1 mb-8">
            {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
              <View
                key={index}
                className={`flex-1 rounded-full ${index < TOTAL_STEPS - 1 ? "mr-1" : ""} ${
                  index < step ? "bg-purple-500" : "bg-gray-700"
                }`}
              />
            ))}
          </View>
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {renderStep()}
          </ScrollView>
        </View>
        <View className="flex-row px-6 pb-8 gap-3">
          {step > 1 && (
            <Pressable
              onPress={handlePrev}
              className="bg-gray-800 py-4 px-6 rounded-xl items-center active:bg-gray-700"
            >
              <Text className="text-white text-base font-semibold">이전</Text>
            </Pressable>
          )}
          <Pressable
            onPress={handleNext}
            disabled={!isCurrentStepValid()}
            className={`flex-1 py-4 rounded-xl items-center ${
              isCurrentStepValid() ? "bg-purple-500 active:bg-purple-600" : "bg-purple-500/50"
            }`}
          >
            <Text className={`text-base font-semibold ${isCurrentStepValid() ? "text-white" : "text-white/50"}`}>
              {step === TOTAL_STEPS ? "이제 끝났어요!" : "다음으로"}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
