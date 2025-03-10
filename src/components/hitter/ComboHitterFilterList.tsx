import { SearchInput } from "./ComboHittersList.style.ts";
import ComboHittersFilter from "@components/hitter/ComboHittersFilter.tsx";
import {HittingHandType} from "@constant/player.ts";
import styled from "styled-components";

const ComboHitterFilterList = ({
                                searchKeyword,
                                setSearchKeyword,
                                selectedTeamType,
                                setSelectedTeamType,
                                selectedHandType,
                                setSelectedHandType,
                                teamOptions,
                              }: {
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
  selectedTeamType: string | null;
  setSelectedTeamType: (value: string | null) => void;
  selectedHandType: string | null;
  setSelectedHandType: (value: string | null) => void;
  teamOptions: { key: string; value: string }[];
}) => (
    <>
      <Wrapper>
        <SearchInput
            type="text"
            placeholder="선수명 검색"
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
      </Wrapper>
    </>
);

export default ComboHitterFilterList


export const Wrapper = styled.main`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.fixed};
  display: flex;
  flex-direction: column;
    gap: 1rem;
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;
