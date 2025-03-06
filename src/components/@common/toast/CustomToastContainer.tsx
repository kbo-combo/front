import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "@style/theme.style.ts";

const CustomToastContainer = styled(ToastContainer).attrs({
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  limit: 2
})`
  z-index: ${theme.zIndex.popover};
  bottom: 6rem;

  .Toastify__toast {
    font: ${theme.font.text};
    font-size: 1.5rem;
    color: ${theme.color.sub};
  }

`;

export default CustomToastContainer;
