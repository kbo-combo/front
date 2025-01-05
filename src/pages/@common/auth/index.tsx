import {ContentBox, Wrapper, Text, PrimaryText, LoginBox, KakaoLogin} from "./Login.style.tsx";
import KakaoLoginLargePng from '@assets/kakao_login_large_narrow.png';
import KakaoLoginLargeWebp from '@assets/kakao_login_large_narrow.webp';
import {Link} from "react-router-dom";
import AuthAPI from "@apis/auth";

const Login = () => {

  const { KAKAO_AUTH_URL } = AuthAPI;

  return (
      <Wrapper>
        <ContentBox>
          <Text><PrimaryText>KBO</PrimaryText>를 더욱 즐겁게</Text>
          <Text>
            <PrimaryText>어쩌구저쩌구</PrimaryText>
          </Text>
        </ContentBox>
        <LoginBox>
          <Link to={KAKAO_AUTH_URL} aria-label="카카오로 로그인하기">
            <picture>
              <source srcSet={KakaoLoginLargeWebp} type="image/webp"/>
              <KakaoLogin src={KakaoLoginLargePng} alt="카카오 로그인"/>
            </picture>
          </Link>
        </LoginBox>
      </Wrapper>
  );
};

export default Login;
