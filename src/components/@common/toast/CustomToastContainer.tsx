import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "@style/theme.style.ts";

const CustomToastContainer = styled(ToastContainer).attrs({
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
})`
  z-index: ${theme.zIndex.popover};
  bottom: 6rem;

  .Toastify__toast {
    font: ${theme.font.text};
    font-size: 2.0rem;
    color: ${theme.color.sub};
  }

`;

export default CustomToastContainer;
