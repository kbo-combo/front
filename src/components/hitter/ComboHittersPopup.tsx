import {useMemo, useState} from "react";
import {
  PlayerCard,
  PlayerImage,
  PlayerListWrapper,
  PlayerName,
  PlayerPosition,
  Wrapper,
} from "./ComboHittersPopup.style.ts";
import {useHitterQuery} from "@/hooks/useHitterQuery.ts";
import {HittingHandType, Team} from "@constant/player.ts";
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


  const filteredHitters = useMemo(() => {
    if (!hitters) return [];
    return hitters.filter((hitter) => {
      const matchesTeam = selectedTeamType ? hitter.team === selectedTeamType : true;
      const matchesHand = selectedHandType ? hitter.hittingHandType === selectedHandType : true;
      return matchesTeam && matchesHand;
    });
  }, [hitters, selectedTeamType, selectedHandType]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const ensureAbsoluteUrl = getUrl();

  return (
      <Wrapper>
        <ComboHittersFilter
            title="타격 타입"
            options={Object.entries(HittingHandType).map(([key, value]) => ({ key, value }))}
            selectedOption={selectedHandType}
            onSelectOption={setSelectedHandType}
        />
        <ComboHittersFilter
              title="소속팀"
              options={Team.map((team) => ({ key: team.name, value: team.displayName }))}
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
                <PlayerPosition>{hitter.detailPosition}</PlayerPosition>
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
