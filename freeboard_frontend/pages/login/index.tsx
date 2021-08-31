import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 10%;
`;

export const Title = styled.div`
  font-size: 25px;
  color: grey;
`;

export default function Login() {
  return (
    <Wrapper>
      <Title>해당 페이지를 열람하기 위햐선 로그인을 진행해 주세요.</Title>
    </Wrapper>
  );
}
