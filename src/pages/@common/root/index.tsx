import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import NavBar from "../../../components/@common/navbar/NavBar.tsx";
import {Outlet} from "react-router-dom";

const RootTemplate = () => {

  return (
      <Wrapper>
        <PageArea>
          <Outlet />
          <NavBar/>
        </PageArea>
      </Wrapper>
  );
};

export default RootTemplate;
