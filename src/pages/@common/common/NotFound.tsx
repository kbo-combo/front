import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {URL_PATH} from '@/constant';
import theme from "@style/theme.style.ts";

const NotFoundPage = ({ message = '존재하지 않는 페이지입니다.', onClick }: { message?: string; onClick?: () => void }) => {
  return (
      <Container>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Message>{message}</Message>
        <HomeButton to={URL_PATH.main} onClick={onClick}>
          메인 화면으로 돌아가기
        </HomeButton>
      </Container>
  );
};
export default NotFoundPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: ${theme.color.background};
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://via.placeholder.com/100');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Message = styled.p`
  font: ${theme.font.text};
  color: ${theme.color.subLight};
  font-size: 2.2rem;
  line-height: 3.0rem;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1.3rem 2.25rem;
  font: ${theme.font.text};
  font-size: 1.75rem;
  color: ${theme.color.background};
  background-color: ${theme.color.primary};
  border-radius: 0.3125rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.color.water};
  }
`;
