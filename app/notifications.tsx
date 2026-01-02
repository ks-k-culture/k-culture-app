import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function NotificationsScreen() {
  return (
    <ScreenWrapper>
      <Header title="알림" />
      <EmptyState icon="notifications-outline" title="알림이 없습니다." />
    </ScreenWrapper>
  );
}
