import {
  ContentBox,
  KakaoLogin,
  LoginBox,
  MainMessage,
  SubMessage,
  Wrapper
} from "./Login.style.tsx";
import KakaoLoginLargePng from "@assets/kakao_login_large_narrow.png";
import KakaoLoginLargeWebp from "@assets/kakao_login_large_narrow.webp";
import {useAuthLoginPage} from "@/hooks/login.ts";

const Login = () => {

  const { login } = useAuthLoginPage();

  const handleLogin = (socialProvider: string) => {
    login(socialProvider);
  };

  return (
      <Wrapper>
        <ContentBox>
          <SubMessage>일상의 즐거움</SubMessage>
          <MainMessage>하루, 한타</MainMessage>
        </ContentBox>
        <LoginBox>
            <picture>
              <source srcSet={KakaoLoginLargeWebp} type="image/webp"/>
              <KakaoLogin onClick={() => handleLogin("kakao")} src={KakaoLoginLargePng} alt="카카오 로그인"/>
            </picture>
        </LoginBox>
      </Wrapper>
  );
};

export default Login;
