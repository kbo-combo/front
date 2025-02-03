import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemberDetail, useChangeNickname } from "@/hooks/useMember.ts";
import {
  Wrapper,
  ProfileWrapper,
  ProfileImage,
  MemberEditLink,
  EditButton,
} from "@components/member/member.style.ts";
import ContentHeader from "@components/@common/contentHeader";
import { FiEdit3 } from "react-icons/fi";
import { URL_PATH } from "@/constant";
import Loading from "@pages/@common/common/Loading.tsx";
import {NicknameInput, SaveButton} from "@components/member/member-edit.style.ts";

const MemberPage = () => {
  const { data, isLoading, error } = useMemberDetail();
  const { mutate: changeNickname } = useChangeNickname();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (data?.nickname) {
      setNickname(data.nickname);
    }
  }, [data]);

  const handleNicknameChange = () => {
    changeNickname({ request: { nickname } }, {
      onSuccess: () => {
        navigate(URL_PATH.member);
        alert("닉네임이 변경되었습니다!");
      },
    });
  };

  if (isLoading) return <Loading />;
  if (error || !data) return <div>데이터를 불러올 수 없습니다.</div>;

  return (
      <Wrapper>
        <ContentHeader title="마이페이지" />
        <ProfileWrapper>
          <ProfileImage src="/santa-sunnam.png" alt="프로필 이미지" />
          <NicknameInput
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
          />
          <SaveButton onClick={handleNicknameChange}>닉네임 변경</SaveButton>
          <MemberEditLink to={`${URL_PATH.member}/edit`}>
            <EditButton>
              <FiEdit3 size={16} color="white" />
            </EditButton>
          </MemberEditLink>
        </ProfileWrapper>
      </Wrapper>
  );
};

export default MemberPage;
