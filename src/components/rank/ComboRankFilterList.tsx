import styled from "styled-components";
import {GameType} from "@/types/game/game.ts";
import {ComboSortType} from "@/types/combo/combo.ts";
import ComboRankGameTypeFilter from "@components/rank/ComboRankGameTypeFilter.tsx";
import ComboRankSortFilter from "@components/rank/ComboRankSortFilter.tsx";


const marginLeft = "0rem"
const fontSize = "2.0rem"

type ComboRankFilterListProps = {
  selectedGameType: GameType;
  onSelectGameType: (gameType: GameType) => void;
  selectedSortType: ComboSortType;
  onSelectSortType: (sortType: ComboSortType) => void;
};

const ComboRankFilterList = ({selectedGameType, onSelectGameType ,selectedSortType, onSelectSortType }: ComboRankFilterListProps) => {
  return <>
    <Wrapper>
      <ComboRankGameTypeFilter selectedGameType={selectedGameType} onSelectGameType={onSelectGameType} marginLeft={marginLeft} fontSize={fontSize}/>
      <ComboRankSortFilter selectedSortType={selectedSortType} onSelectSortType={onSelectSortType} marginLeft={marginLeft} fontSize={fontSize}/>
    </Wrapper>
  </>
}

export default ComboRankFilterList

const Wrapper = styled.main`
  z-index: ${(props) => props.theme.zIndex.fixed};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;
