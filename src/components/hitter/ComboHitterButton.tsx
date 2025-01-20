import styled from "styled-components";
import ComboHittersPopup, {ComboHittersPopupProps} from "@components/hitter/ComboHittersPopup.tsx";

const ComboHitterButton = ({homeTeam, awayTeam}: ComboHittersPopupProps) => {


  return (
      <div>
        <OpenButton>타자 선택</OpenButton>
        <ComboHittersPopup homeTeam={homeTeam} awayTeam={awayTeam}/>
      </div>
  );
};

export default ComboHitterButton;

const OpenButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

`;
