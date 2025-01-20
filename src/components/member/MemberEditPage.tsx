import {
  ButtonGroup,
  EditPageWrapper,
  NicknameInput, NicknameInputContainer, NickNameLabel, NicknameLengthIndicator,
  SaveButton, WarningText
} from "@components/member/member-edit.style.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ContentHeader from "@components/@common/contentHeader";
import {URL_PATH} from "@/constant";


const MAX_NICKNAME_LENGTH = 16;

const MemberEditPage = () => {
  const [nickname, setNickname] = useState("산타 선남");
  const navigate = useNavigate();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_NICKNAME_LENGTH) {
      setNickname(value);
    }
  };


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
              onChange={handleNicknameChange}
          />
          <NicknameLengthIndicator>
            {nickname.length} / {MAX_NICKNAME_LENGTH}
          </NicknameLengthIndicator>
        </NicknameInputContainer>
        <WarningText>부적절한 표현이 포함된 닉네임은 변경 될 수 있습니다.</WarningText>
        <ButtonGroup>
          <SaveButton onClick={handleSave}>수정하기</SaveButton>
        </ButtonGroup>
      </EditPageWrapper>
  );
};

export default MemberEditPage;
