import styled, { keyframes } from "styled-components";
import ComboHittersPopup from "@components/hitter/ComboHittersPopup.tsx";
import { useState } from "react";
import {useNavBar} from "@/hooks/useNavBar.ts";

const ComboHitterButton = () => {
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
        <OpenButton onClick={handleOpenPopup}>Show Combo Hitters</OpenButton>

        {isPopupOpen && (
            <PopupWrapper>
              <PopupContent>
                <CloseButton
                    onClick={handleClosePopup}
                    aria-label="Close popup"
                >
                  ✕
                </CloseButton>
                <ComboHittersPopup />
              </PopupContent>
              <Overlay onClick={handleClosePopup} />
            </PopupWrapper>
        )}
      </div>
  );
};

export default ComboHitterButton;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const OpenButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const PopupContent = styled.div`
  position: relative;
  z-index: 1001;
  width: 80%;
  height: 400px;
  width: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow: auto;
  animation: ${slideUp} 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;
