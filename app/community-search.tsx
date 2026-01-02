import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";
import { Input } from "@/components/ui/input";

export default function CommunitySearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScreenWrapper>
      <Header title="게시글 검색" />
      <Input
        className="mx-6"
        placeholder="제목으로 검색하기"
        value={searchQuery}
        onChangeText={setSearchQuery}
        leftIcon={<Ionicons name="search" size={20} color="#6B7280" />}
      />
      <EmptyState icon="search-outline" title="검색어를 입력해주세요" />
    </ScreenWrapper>
  );
}
