import { useMemo } from "react";
import {
  Wrapper,
  PlayerListWrapper,
  PlayerCard,
  PlayerImage,
  PlayerName,
  PlayerPosition,
} from "./ComboHittersPopup.style.ts";
import {useHitterQuery} from "@/hooks/useHitterQuery.ts";
import {Team} from "@constant/player.ts";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const ensureAbsoluteUrl = (url: string) => {
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
      <Wrapper>
        <PlayerListWrapper>
          {hitters?.map((hitter) => (
              <PlayerCard key={hitter.playerId}>
                <PlayerImage
                    src={ensureAbsoluteUrl(hitter.imageUrl || "/default-player.png")}
                    alt={hitter.name} />
                <PlayerName>{hitter.name}</PlayerName>
                <PlayerPosition>{hitter.detailPosition}</PlayerPosition>
              </PlayerCard>
          ))}
        </PlayerListWrapper>
      </Wrapper>
  );
};

export default ComboHittersPopup;
