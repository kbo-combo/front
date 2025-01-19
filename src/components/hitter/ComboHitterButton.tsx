import styled  from "styled-components";
import ComboHittersPopup, {ComboHittersPopupProps} from "@components/hitter/ComboHittersPopup.tsx";
import {useState} from "react";
import {useNavBar} from "@/hooks/useNavBar.ts";

const ComboHitterButton = ({homeTeam, awayTeam} : ComboHittersPopupProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { showNavBar } = useNavBar();


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    showNavBar(false)
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    showNavBar(true)
  };

  return (
      <div>
        <OpenButton onClick={handleOpenPopup}>타자 선택</OpenButton>

        {isPopupOpen && (
            <PopupWrapper>
              <PopupContent>
                <CloseButton
                    onClick={handleClosePopup}
                    aria-label="Close popup"
                >
                  ✕
                </CloseButton>
                <ComboHittersPopup homeTeam={homeTeam} awayTeam={awayTeam}/>
              </PopupContent>
            </PopupWrapper>
        )}
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

const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

`;

const PopupWrapper = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


const PopupContent = styled.div`
  position: relative;
  width: 100rem;
  max-width: 90%;
  height: 60rem;
  max-height: 90%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow: auto;
`;

