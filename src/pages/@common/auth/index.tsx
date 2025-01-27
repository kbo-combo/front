import {ContentBox, KakaoLogin, LoginBox, PrimaryText, Text, Wrapper} from "./Login.style.tsx";
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
          <Text>야구와 일상에 즐거움을</Text>
          <Text>
            <PrimaryText>하루한타</PrimaryText>
          </Text>
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
