import { useEffect, useState, useMemo } from "react";
import { HitterQueryResponse } from "@apis/player.ts";
import {FilterButton, FilterWrapper} from "@components/hitter/ComboHittersFilter.style.ts";

type ComboHittersFilterProps = {
  hitters: HitterQueryResponse[];
  teams: string[];
  onFilteredHitters: (filtered: HitterQueryResponse[]) => void;
};

const ComboHittersFilter = ({ hitters, teams, onFilteredHitters }: ComboHittersFilterProps) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const filteredHitters = useMemo(() => {
    return hitters.filter((hitter) => {
      const isInRequestTeams = teams.includes(hitter.team);
      return !selectedTeam ? isInRequestTeams : hitter.team === selectedTeam;
    });
  }, [hitters, teams, selectedTeam]);

  useEffect(() => {
    onFilteredHitters(filteredHitters);
  }, [filteredHitters, onFilteredHitters]);

  return (
      <FilterWrapper>
        <div>
          <span>팀:</span>
          {teams.map((team) => (
              <FilterButton
                  key={team}
                  isSelected={selectedTeam === team}
                  onClick={() => setSelectedTeam(selectedTeam === team ? null : team)}
              >
                {team}
              </FilterButton>
          ))}
        </div>
      </FilterWrapper>
  );
};

export default ComboHittersFilter;
