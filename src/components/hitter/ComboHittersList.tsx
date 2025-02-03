import {useState} from "react";
import {
  BottomButton,
  PlayerCard,
  PlayerInfo,
  PlayerListWrapper,
  PlayerName,
  Wrapper,
} from "./ComboHittersList.style.ts";

import {HittingHandType, PlayerDetailPosition, TeamName} from "@constant/player.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import ComboHitterFilterList from "@components/hitter/ComboHitterFilterList.tsx";
import {useHitterFilter} from "@/hooks/useHitterFilter.ts";
import {HitterQueryResponse} from "@apis/player.ts";
import {PlayerImage} from "@components/player/PlayerImage.tsx";

interface ComboHitterListProps {
  homeTeam: TeamName;
  awayTeam: TeamName;
}

const ComboHitterList = ({ homeTeam, awayTeam }: ComboHitterListProps) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

  const handleSelectPlayer = (playerId: number) => {
    setSelectedPlayerId(playerId);
  };

  const {
    filteredHitters,
    teamOptions,
    searchKeyword,
    setSearchKeyword,
    selectedTeamType,
    setSelectedTeamType,
    selectedHandType,
    setSelectedHandType,
    isLoading,
    error,
  } = useHitterFilter(homeTeam, awayTeam);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
      <Wrapper>
        <ComboHitterFilterList searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}
                               selectedTeamType={selectedTeamType} setSelectedTeamType={setSelectedTeamType}
                               selectedHandType={selectedHandType} setSelectedHandType={setSelectedHandType}
                               teamOptions={teamOptions}/>
        <PlayerListWrapper>
          {filteredHitters.map((hitter : HitterQueryResponse) => (
              <PlayerCard
                  key={hitter.playerId}
                  selected={hitter.playerId === selectedPlayerId}
                  onClick={() => handleSelectPlayer(hitter.playerId)}
              >
                <PlayerImage url={hitter.imageUrl}/>
                <PlayerName>{hitter.name}</PlayerName>
                <PlayerInfo>  {HittingHandType[hitter.hittingHandType as keyof typeof HittingHandType] +
                    " " +
                    PlayerDetailPosition[hitter.detailPosition as keyof typeof PlayerDetailPosition]}
                </PlayerInfo>
              </PlayerCard>
          ))}
        </PlayerListWrapper>
          <BottomButton
              selected={selectedPlayerId !== null}
              onClick={() => alert(`선택된 선수: ${selectedPlayerId}`)}
          >
            타자 선택
          </BottomButton>
      </Wrapper>
  );
};

export default ComboHitterList;
