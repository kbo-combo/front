import {PlayerImage} from "@components/player/PlayerImage.tsx";
import {getStatusText} from "@constant/combo.ts";
import {useInfiniteComboList} from "@/hooks/combo/useCombo.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import ncLogo from "@assets/logos/nc-logo.svg";
import kiaLogo from "@assets/logos/kia-logo.svg";
import doosanLogo from "@assets/logos/doosan-log.svg";
import lgLogo from "@assets/logos/lg-logo.svg";
import ssgLogo from "@assets/logos/ssg-logo.svg";
import samsungLogo from "@assets/logos/samsung-logo.svg";
import lotteLogo from "@assets/logos/lotte-logo.svg";
import kiwoomLogo from "@assets/logos/kiwoom-logo.svg";
import hanwhwaLogo from "@assets/logos/hanhwa-logo.svg";
import ktLogo from "@assets/logos/kt-logo.svg";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import {useInfiniteScroll} from "@/hooks/@common/usePage.ts";
import {
  ComboSection, ComboStatus,
  GameDate,
  GameInfoWrapper,
  Message, PlayerInfoWrapper, PlayerName, TeamLogo, TeamLogosWrapper, VSLabel
} from "@pages/@common/combo/ComboListPage.style.ts";

const teamLogos: { [key: string]: string } = {
  NC: ncLogo,
  KIA: kiaLogo,
  DOOSAN: doosanLogo,
  LG: lgLogo,
  SSG: ssgLogo,
  SAMSUNG: samsungLogo,
  LOTTE: lotteLogo,
  KIWOOM: kiwoomLogo,
  HANWHA: hanwhwaLogo,
  KT: ktLogo,
};

const ComboPage = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteComboList(10);
  const { observerRef } = useInfiniteScroll({ hasNextPage, fetchNextPage });

  if (isLoading) return <Loading />;

  return (
      <PageWrapper>
        <ContentHeader title={"콤보 목록"} />
        {data?.length === 0 ? (
            <Message>등록된 콤보가 없습니다.</Message>
        ) : (
            data?.map((combo, index) => (
                <ComboSection key={combo.comboId} ref={index === data.length - 1 ? observerRef : null}>
                  <GameInfoWrapper>
                    <GameDate>{combo?.gameStartDate}</GameDate>
                    <TeamLogosWrapper>
                      <TeamLogo src={teamLogos[combo?.homeTeam]} alt={combo?.homeTeam} />
                      <VSLabel>VS</VSLabel>
                      <TeamLogo src={teamLogos[combo?.awayTeam]} alt={combo?.awayTeam} />
                    </TeamLogosWrapper>
                  </GameInfoWrapper>
                  <PlayerInfoWrapper>
                    <PlayerImage url={combo?.playerImageUrl} />
                    <PlayerName>{combo?.playerName}</PlayerName>
                  </PlayerInfoWrapper>
                  <ComboStatus status={combo?.comboStatus}>
                    {getStatusText(combo?.comboStatus)}
                  </ComboStatus>
                </ComboSection>
            ))
        )}
        {!hasNextPage && data?.length !== 0 && <Message>더 이상 콤보가 없습니다.</Message>}
      </PageWrapper>
  );
};

export default ComboPage;
