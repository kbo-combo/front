import {Link} from 'react-router-dom';
import {Button, Wrapper} from "./Navbar.style.ts";
import {URL_PATH} from "../../../constant";
import NavItem from "./NavItem.tsx";

const NavBar = () => {
  return (
      <Wrapper>
        <Button as={Link} to={URL_PATH.main}>
          <NavItem isActive={true} iconId="home-line" label="메인"/>
        </Button>
        <Button as={Link} to={URL_PATH.login}>
          <NavItem isActive={true} iconId="account-circle-line" label="로그인"/>
        </Button>
      </Wrapper>
  );
};

export default NavBar;`
`
