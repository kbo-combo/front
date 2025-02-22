import {useMemo, useState} from "react";
import {useHitterQuery} from "@/hooks/useHitterQuery.ts";
import {Team, TeamName} from "@constant/player.ts";

export const useHitterFilter = (homeTeam: TeamName, awayTeam: TeamName) => {
  const hitterRequest = { homeTeam, awayTeam };
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
      const matchesSearch = hitter.name.includes(searchKeyword);
      return matchesTeam && matchesHand && matchesSearch;
    });
  }, [hitters, selectedTeamType, selectedHandType, searchKeyword]);

  return {
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
  };
};
