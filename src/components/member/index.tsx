import {
  EditButton,
  MemberEditLink,
  Nickname,
  ProfileImage,
  ProfileWrapper,
  Wrapper
} from "@components/member/member.style.tsx";
import ContentHeader from "@components/@common/contentHeader";
import {FiEdit3} from "react-icons/fi";
import {URL_PATH} from "@/constant";


const MemberPage = () => {

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <ProfileWrapper>
      <ProfileImage src="/santa-sunnam.png" alt="프로필 이미지"/>
      <Nickname>산타 선남 이름을 좀 길게 해보자</Nickname>
      <MemberEditLink to={`${URL_PATH.member}/edit`}>
      <EditButton>
        <FiEdit3 size={16} color='white'/>
      </EditButton>
      </MemberEditLink>
    </ProfileWrapper>
  </Wrapper>

}

export default MemberPage

