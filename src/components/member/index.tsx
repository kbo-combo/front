import {
  EditButton,
  MemberEditLink,
  Nickname,
  ProfileWrapper,
  Wrapper
} from "@components/member/member.style.ts";
import ContentHeader from "@components/@common/contentHeader";
import {FiEdit3} from "react-icons/fi";
import {URL_PATH} from "@/constant";
import {useMemberDetail} from "@/hooks/useMember.ts";
import Loading from "@pages/@common/common/Loading.tsx";


const MemberPage = () => {

  const {data, isLoading, error,}  = useMemberDetail();
  if (isLoading) return <Loading />;
  if (error || !data) return <div>데이터를 불러올 수 없습니다.</div>;

  return <Wrapper>
    <ContentHeader title={"마이페이지"}/>
    <ProfileWrapper>
      <Nickname>{data.nickname}</Nickname>
      <MemberEditLink to={`${URL_PATH.member}/edit`}>
      <EditButton>
        <FiEdit3 size={16} color='white'/>
      </EditButton>
      </MemberEditLink>
    </ProfileWrapper>
  </Wrapper>

}

export default MemberPage

