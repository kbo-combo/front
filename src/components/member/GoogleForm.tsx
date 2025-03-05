import styled from "styled-components";
import {Link} from "react-router-dom";
import theme from "@style/theme.style.ts";

const GoogleForm = () => {
  return (
      <>
        <BottomSheet to="https://forms.gle/6NwhPXi3qUXLEJzn6">
          문의하기
        </BottomSheet>
      </>
  );
};

export default GoogleForm;

export const BottomSheet = styled(Link)`
  position: absolute;
  right: 2rem;
  bottom: 10rem;

  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;

  padding: 2rem 4rem;

  color: ${theme.color.background};
  background: ${theme.color.primary};
  font: ${theme.font.text};
  font-size: 1.5rem;
  border-radius: 1.5rem;
`;
