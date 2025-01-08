import {
  ButtonGroup,
  EditPageWrapper,
  NicknameInput, NicknameInputContainer, NickNameLabel,
  SaveButton
} from "@components/member/member-edit.style.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ContentHeader from "@components/@common/contentHeader";
import {URL_PATH} from "@/constant";

const MemberEditPage = () => {
  const [nickname, setNickname] = useState("산타 선남");
  const navigate = useNavigate();

  const handleSave = () => {
    navigate(URL_PATH.member);
  };

  return (
      <EditPageWrapper>
        <ContentHeader title={"내 정보 수정"}/>
        <NicknameInputContainer>
          <NickNameLabel htmlFor="nickname">닉네임</NickNameLabel>
          <NicknameInput
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
          />
        </NicknameInputContainer>
        <ButtonGroup>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </ButtonGroup>
      </EditPageWrapper>
  );
};

export default MemberEditPage;
