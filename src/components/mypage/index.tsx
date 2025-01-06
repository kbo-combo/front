import {Nickname, ProfileImage, ProfileWrapper, Wrapper} from "@components/mypage/mypage.style.tsx";
import ContentHeader from "@components/@common/contentHeader";


const MyPage = () => {

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <ProfileWrapper>
      <ProfileImage src="/santa-sunnam.png" alt="프로필 이미지"/>
      <Nickname>산타 선남</Nickname>
    </ProfileWrapper>
  </Wrapper>

}

export default MyPage
