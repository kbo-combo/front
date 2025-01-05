import {ContentBox, Wrapper, Text, PrimaryText, LoginBox, GoToMain} from "./Login.style.tsx";
import {URL_PATH} from "../../../constant";

const Login = () => {

  return (
      <Wrapper>
        <ContentBox>
          <Text><PrimaryText>KBO</PrimaryText>를 더욱 즐겁게</Text>
          <Text>
            <PrimaryText>어쩌구저쩌구</PrimaryText>
          </Text>
        </ContentBox>

        <LoginBox>
          <GoToMain to={URL_PATH.main}>메인으로 돌아가기</GoToMain>
        </LoginBox>
      </Wrapper>
  );
};

export default Login;
