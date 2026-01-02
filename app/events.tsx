import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function EventsScreen() {
  return (
    <ScreenWrapper>
      <Header title="이벤트" />
      <EmptyState icon="calendar-outline" title="현재 진행중인 이벤트가 없습니다." />
    </ScreenWrapper>
  );
}
