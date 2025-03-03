import {PlayerImage} from "@components/player/PlayerImage.tsx";
import {ComboStatusType, getStatusText} from "@constant/combo.ts";
import styled from "styled-components";
import {useComboList} from "@/hooks/combo/useCombo.ts";
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
import theme from "@style/theme.style.ts";
import {getComboStatusColor} from "@/function/combo/combo.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";

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
  const {data, isLoading} = useComboList();

  if (isLoading) return <Loading/>;

  return (
      <PageWrapper>
        <ContentHeader title={'콤보 목록'}/>
        {data?.length > 0 ? (
            data.map((combo) => (
                <ComboSection key={combo.comboId}>
                  <GameInfoWrapper>
                    <GameDate>{combo.gameStartDate}</GameDate>
                    <TeamLogosWrapper>
                      <TeamLogo src={teamLogos[combo.homeTeam]} alt={combo.homeTeam}/>
                      <VSLabel>VS</VSLabel>
                      <TeamLogo src={teamLogos[combo.awayTeam]} alt={combo.awayTeam}/>
                    </TeamLogosWrapper>
                  </GameInfoWrapper>
                  <PlayerInfoWrapper>
                    <PlayerImage url={combo.playerImageUrl}/>
                    <PlayerName>{combo.playerName}</PlayerName>
                  </PlayerInfoWrapper>
                  <ComboStatus status={combo.comboStatus}>
                    {getStatusText(combo.comboStatus)}
                  </ComboStatus>
                </ComboSection>
            ))
        ) : (
            <NoComboText>미선택</NoComboText>
        )}
      </PageWrapper>
  );
};

export default ComboPage;

const ComboSection = styled.div`
  display: flex;
  align-items: center;
  max-width: 100rem;
  justify-content: space-between;
  width: 100%;
  gap: 2.0rem;
  padding: 1.0rem;
  border-radius: 0.5rem;
  background: ${({theme}) => theme.color.background};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-wrap: nowrap;
`;

const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameDate = styled.span`
  font-size: 2.0rem;
  font-weight: bold;
  color: ${theme.color.primary};
`;

const TeamLogosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
`;

const VSLabel = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme.color.subLight};
`;

const ComboStatus = styled.div<{ status: ComboStatusType }>`
  font: ${({ theme }) => theme.font.text};
  font-size: 2.0rem;
  min-width: 6.0rem;
  text-align: center;
  flex-shrink: 0; 
  margin-left: auto; 
  color: ${({ status, theme }) => getComboStatusColor(status, theme)};
`;

const TeamLogo = styled.img`
  width: 5rem;
  height: 5rem;
  @media (max-width: 500px) {
    width: 3.6rem;
    height: 3.6rem;
  }
  border-radius: 50%;
  object-fit: contain;
`;

const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem; 
  max-width: 10rem; 
  flex-shrink: 0; 
`;

const PlayerName = styled.span`
  font-size: 1.6rem;
  margin-top: 1rem;
  font-weight: bold;
  color: ${({theme}) => theme.color.sub};
`;

const NoComboText = styled.p`
  font-size: 1.4rem;
  color: gray;
  text-align: center;
  margin-top: 2rem;
`;
