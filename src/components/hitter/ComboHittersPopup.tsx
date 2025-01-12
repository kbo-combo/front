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

  const [selectedHandType, setSelectedHandType] = useState<HittingHandType | null>(null);

  const { data: hitters, error, isLoading } = useHitterQuery(hitterRequest);


  const filteredHitters = useMemo(() => {
    if (!hitters) return [];
    return selectedHandType
        ? hitters.filter((hitter) => hitter.hittingHandType === selectedHandType)
        : hitters;
  }, [hitters, selectedHandType]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const ensureAbsoluteUrl = (url: string) => {
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
      <Wrapper>
        <ComboHittersFilter
            title="타격 타입"
            options={HittingHandType}
            selectedOption={selectedHandType}
            onSelectOption={setSelectedHandType}
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
