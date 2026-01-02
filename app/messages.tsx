import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function MessagesScreen() {
  return (
    <ScreenWrapper>
      <Header title="메시지" />
      <EmptyState icon="chatbubble-outline" title="받은 메시지가 없습니다." />
    </ScreenWrapper>
  );
}
