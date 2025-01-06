import {Nickname,  Wrapper} from "@components/mypage/mypage.style.tsx";
import ContentHeader from "@components/@common/contentHeader";


const MyPage = () => {

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <Nickname>멋있는 임선남</Nickname>
  </Wrapper>

}

export default MyPage
