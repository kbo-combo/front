import {Link} from 'react-router-dom';
import {Button, Wrapper} from "./Navbar.style.ts";
import {URL_PATH} from "../../../constant";
import NavItem from "./NavItem.tsx";
import {useCheckLogin} from "@/hooks/login.ts";
import Loading from "@pages/@common/common/Loading.tsx";

const NavBar = () => {

  const {isLoggedIn, isLoading} = useCheckLogin();

  if (isLoading) {
    return <Loading/>
  }

  return (
      <Wrapper>
        <Button as={Link} to={URL_PATH.main}>
          <NavItem isActive={true} iconId="home-line" label="메인"/>
        </Button>
        <Button as={Link} to={URL_PATH.rank}>
          <NavItem isActive={true} iconId="combo-rank" label="랭킹"/>
        </Button>
        {isLoggedIn ? (
            <>
              <Button as={Link} to={URL_PATH.combo}>
                <NavItem isActive={true} iconId="combo-icon" label="콤보"/>
              </Button>
              <Button as={Link} to={URL_PATH.rule_book}>
                <NavItem isActive={true} iconId="rulebook" label="규칙"/>
              </Button>
              <Button as={Link} to={URL_PATH.member}>
                <NavItem isActive={true} iconId="account-circle-line" label="내정보"/>
              </Button>
            </>
        ) : (
            <>
              <Button as={Link} to={URL_PATH.rule_book}>
                <NavItem isActive={true} iconId="rulebook" label="규칙"/>
              </Button>
            <Button as={Link} to={URL_PATH.login}>
              <NavItem isActive={true} iconId="account-circle-line" label="로그인"/>
            </Button>
            </>
        )}

      </Wrapper>
  );
};

export default NavBar;
