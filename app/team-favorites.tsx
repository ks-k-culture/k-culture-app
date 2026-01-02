import { Header } from "@/components/layout/header";
import { ScreenWrapper } from "@/components/layout/screen-wrapper";
import { EmptyState } from "@/components/shared/empty-state";

export default function TeamFavoritesScreen() {
  return (
    <ScreenWrapper>
      <Header title="즐겨찾기한 팀" />
      <EmptyState icon="star-outline" title="즐겨찾기한 팀이 없습니다" />
    </ScreenWrapper>
  );
}
