import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useChangeNickname, useMemberDetail} from "@/hooks/useMember.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {URL_PATH} from "@/constant";
import Loading from "@pages/@common/common/Loading.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import {ProfileWrapper} from "@pages/@common/member/member.style.ts";
import {CharCount, NicknameInput, SaveButton} from "@pages/@common/member/member-edit.style.ts";


const MAX_NICKNAME_LENGTH = 25;

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

  const isChanged = nickname.trim() !== data?.nickname;

  const handleNicknameChange = () => {
    if (!isChanged) return;
    changeNickname({ request: { nickname } }, {
      onSuccess: () => {
        navigate(URL_PATH.member);
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    if (newNickname.length <= MAX_NICKNAME_LENGTH) {
      setNickname(newNickname);
    }
  };

  if (isLoading) return <Loading />;
  if (error || !data) return <div>데이터를 불러올 수 없습니다.</div>;

  return (
      <PageWrapper>
        <ContentHeader title="마이페이지" />
        <ProfileWrapper>
            <NicknameInput
                type="text"
                value={nickname}
                onChange={handleInputChange}
                maxLength={MAX_NICKNAME_LENGTH}
            />
            <CharCount>{nickname.length} / {MAX_NICKNAME_LENGTH}</CharCount>
          <SaveButton onClick={handleNicknameChange} disabled={!isChanged}>
            닉네임 변경
          </SaveButton>
        </ProfileWrapper>
      </PageWrapper>
  );
};

export default MemberPage;
