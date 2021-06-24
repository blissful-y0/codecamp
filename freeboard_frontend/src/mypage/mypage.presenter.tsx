import {
  PageWrapper,
  ProfileBar,
  Title,
  Wrapper,
  UserName,
} from './mypage.style';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export function MyPageUI() {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <ProfileBar>
            <Title>MYPAGE</Title>
            <AccountCircleIcon
              style={{width: '80px', height: '80px', color: '#bdbdbd'}}
            />
            <UserName>김아무개y</UserName>
          </ProfileBar>
        </Wrapper>
      </PageWrapper>
    </>
  );
}

export default MyPageUI;
