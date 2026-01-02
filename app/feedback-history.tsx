import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function FeedbackHistoryScreen() {
  return (
    <ScreenWrapper>
      <Header title="내가 남긴 연기 피드백" />
      <EmptyState icon="chatbubbles-outline" title="남긴 연기 피드백이 없습니다." />
    </ScreenWrapper>
  );
}
