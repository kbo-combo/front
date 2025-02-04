import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import {Outlet} from "react-router-dom";
import NavBar from "@components/@common/navbar/NavBar.tsx";
import {useNavBarVisibility} from "@/hooks/useNavBar.ts";
import ErrorBoundary from "@components/@common/error/ErrorBoundary.tsx";


const RootTemplate = () => {

  return (
      <Wrapper>
        <PageArea>
          <ErrorBoundary>
          <Outlet />
          {useNavBarVisibility() && <NavBar />}
          </ErrorBoundary>
        </PageArea>
      </Wrapper>
  );
};

export default RootTemplate;
