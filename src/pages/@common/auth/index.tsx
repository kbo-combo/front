import {ContentBox, KakaoLogin, LoginBox, PrimaryText, Text, Wrapper} from "./Login.style.tsx";
import KakaoLoginLargePng from '@assets/kakao_login_large_narrow.png';
import KakaoLoginLargeWebp from '@assets/kakao_login_large_narrow.webp';
import useLogin from "@/hooks/useLogin.ts";

const Login = () => {

  const { login} = useLogin();

  const handleKakaoLogin = () => {
    login({ socialProvider: 'kakao' });
  };

  return (
      <Wrapper>
        <ContentBox>
          <Text><PrimaryText>KBO</PrimaryText>를 더욱 즐겁게</Text>
          <Text>
            <PrimaryText>어쩌구저쩌구</PrimaryText>
          </Text>
        </ContentBox>
        <LoginBox>
            <picture>
              <source srcSet={KakaoLoginLargeWebp} type="image/webp"/>
              <KakaoLogin onClick={handleKakaoLogin} src={KakaoLoginLargePng} alt="카카오 로그인"/>
            </picture>
        </LoginBox>
      </Wrapper>
  );
};

export default Login;
