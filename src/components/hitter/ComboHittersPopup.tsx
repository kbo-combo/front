import {useMemo, useState} from "react";
import {
  PlayerCard,
  PlayerImage,
  PlayerListWrapper,
  PlayerName,
  PlayerInfo,
  Wrapper, SearchInput,
} from "./ComboHittersPopup.style.ts";
import {useHitterQuery} from "@/hooks/useHitterQuery.ts";
import {HittingHandType, PlayerDetailPosition, Team} from "@constant/player.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import ComboHittersFilter from "@components/hitter/ComboHittersFilter.tsx";

const ComboHittersPopup = () => {
  const randomIndex = useMemo(() => Math.floor(Math.random() * 10), []);

  const hitterRequest = useMemo(() => {
    const nextIndex = (randomIndex + 1) % Team.length;
    return {
      awayTeam: Team[randomIndex].name,
      homeTeam: Team[nextIndex].name,
    };
  }, [randomIndex]);


  const { data: hitters, error, isLoading } = useHitterQuery(hitterRequest);

  const [selectedTeamType, setSelectedTeamType] = useState<string | null>(null);
  const [selectedHandType, setSelectedHandType] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const teamOptions = useMemo(() => {
    return Team.filter(
        (team) => team.name === hitterRequest.awayTeam || team.name === hitterRequest.homeTeam
    ).map((team) => ({ key: team.name, value: team.displayName }));
  }, [hitterRequest]);

  const filteredHitters = useMemo(() => {
    if (!hitters) return [];
    return hitters.filter((hitter) => {
      const matchesTeam = selectedTeamType ? hitter.team === selectedTeamType : true;
      const matchesHand = selectedHandType ? hitter.hittingHandType === selectedHandType : true;
      const matchesSearch = hitter.name.includes(searchKeyword); // 검색어 필터 추가
      return matchesTeam && matchesHand && matchesSearch;
    });
  }, [hitters, selectedTeamType, selectedHandType, searchKeyword]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const ensureAbsoluteUrl = getUrl();

  return (
      <Wrapper>
        <SearchInput
            type="text"
            placeholder="선수 이름 검색"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <ComboHittersFilter
            title="타격 타입"
            options={Object.entries(HittingHandType).map(([key, value]) => ({ key, value }))}
            selectedOption={selectedHandType}
            onSelectOption={setSelectedHandType}
        />
        <ComboHittersFilter
              title="소속팀"
              options={teamOptions}
              selectedOption={selectedTeamType}
            onSelectOption={setSelectedTeamType}
        />
        <PlayerListWrapper>
          {filteredHitters.map((hitter) => (
              <PlayerCard key={hitter.playerId}>
                <PlayerImage
                    src={ensureAbsoluteUrl(hitter.imageUrl || "/default-player.png")}
                    alt={hitter.name}
                />
                <PlayerName>{hitter.name}</PlayerName>
                <PlayerInfo>  {HittingHandType[hitter.hittingHandType as keyof typeof HittingHandType] +
                    " " +
                    PlayerDetailPosition[hitter.detailPosition as keyof typeof PlayerDetailPosition]}
                </PlayerInfo>
              </PlayerCard>
          ))}
        </PlayerListWrapper>
      </Wrapper>
  );
};

export default ComboHittersPopup;

function getUrl() {
  const ensureAbsoluteUrl = (url: string) => {
    return url.startsWith("http") ? url : `https://${url}`;
  };
  return ensureAbsoluteUrl;
}
