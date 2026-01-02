import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function CommunityMessagesScreen() {
  return (
    <ScreenWrapper>
      <Header title="쪽지함" />
      <EmptyState icon="mail-outline" title="받은 쪽지가 없습니다." />
    </ScreenWrapper>
  );
}
