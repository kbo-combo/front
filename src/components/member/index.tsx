import {
  EditButton,
  Nickname,
  ProfileImage,
  ProfileWrapper,
  Wrapper
} from "@components/member/member.style.tsx";
import ContentHeader from "@components/@common/contentHeader";
import {FiEdit3} from "react-icons/fi";


const MemberPage = () => {

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <ProfileWrapper>
      <ProfileImage src="/santa-sunnam.png" alt="프로필 이미지"/>
      <Nickname>산타 선남</Nickname>
      <EditButton>
        <FiEdit3 size={16} color='white'/>
      </EditButton>
    </ProfileWrapper>
  </Wrapper>

}

export default MemberPage
