import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {URL_PATH} from "@/constant";

interface ComboHitterButtonProps {
  homeTeam: string;
  awayTeam: string;
}


const ComboHitterButton = ({homeTeam, awayTeam}: ComboHitterButtonProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(URL_PATH.combo_hitters, {
      state: { homeTeam, awayTeam },
    });
  };

  return (
        <Button onClick={handleClick}>타자 선택</Button>
  );
};

export default ComboHitterButton;


const Button = styled.button`
padding: 10px 20px;
background: #007bff;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 1rem;
transition: background 0.3s ease;

`;
