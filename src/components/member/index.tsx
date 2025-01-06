import {
  EditButton,
  Nickname,
  ProfileImage,
  ProfileWrapper,
  Wrapper
} from "@components/member/member.style.tsx";
import ContentHeader from "@components/@common/contentHeader";
import {FiEdit3} from "react-icons/fi";
import {Link} from "react-router-dom";
import {URL_PATH} from "@/constant";


const MemberPage = () => {

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <ProfileWrapper>
      <ProfileImage src="/santa-sunnam.png" alt="프로필 이미지"/>
      <Nickname>산타 선남 이름을 좀 길게 해보자</Nickname>
      <Link to={`${URL_PATH.member}/modify`}>
      <EditButton>
        <FiEdit3 size={16} color='white'/>
      </EditButton>
      </Link>
    </ProfileWrapper>
  </Wrapper>

}

export default MemberPage
