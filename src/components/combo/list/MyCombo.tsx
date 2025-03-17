import {useMyComboDetail} from "@/hooks/combo-rank/useComboRank.ts";
import {GameType} from "@/types/game/game.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import {
  Bar,
  ComboBarContainer,
  ComboStat,
  ComboStatRow,
  LastSuccessDate,
  MyComboWrapper,
  WinRateText
} from "@components/combo/list/MyCombo.style.ts";
import theme from "@style/theme.style.ts";

interface MyComboProps {
  year: number,
  gameType: GameType,
}

const MyCombo = ({year, gameType}: MyComboProps) => {
  const {myCombo, isLoading} = useMyComboDetail(year, gameType)

  if (isLoading) {
    return <Loading/>
  }

  if (myCombo === null) {
    return <div/>
  }

  const successFailTotal = myCombo.successCount + myCombo.failCount;
  const successRatio = successFailTotal ? (myCombo.successCount / successFailTotal) * 100 : 0;
  const failRatio = 100 - successRatio;
  const winRate = successFailTotal ? Math.round((myCombo.successCount / successFailTotal) * 100) : 0;

  return <MyComboWrapper>
    <ComboStatRow>
      <ComboStat $color={theme.color.subLight}>{myCombo.currentRecord} 현재 연속 콤보</ComboStat>
      <ComboStat $color={theme.color.subLight}>{myCombo.maxRecord} 최다 연속 콤보</ComboStat>
    </ComboStatRow>
    {myCombo.lastSuccessDate && (
        <LastSuccessDate>
          마지막 성공일 {myCombo.lastSuccessDate}
        </LastSuccessDate>
    )}
    <div style={{display: 'flex', alignItems: 'center'}}>
      <ComboBarContainer>
        <Bar $ratio={successRatio} $color={theme.color.primary}>
          {myCombo.successCount} 성공
        </Bar>
        {myCombo.failCount > 0 && (
            <Bar $ratio={failRatio} $color={theme.color.fontRed}>
              {myCombo.failCount} 실패
            </Bar>
        )}
      </ComboBarContainer>
      <WinRateText>{winRate}%</WinRateText>
    </div>
  </MyComboWrapper>;
}

export default MyCombo
