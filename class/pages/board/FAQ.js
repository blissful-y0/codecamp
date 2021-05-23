import {
  NavigationBar,
  Profile,
  ProfileBar,
  StatusBar,
  Title,
  Wrapper,
  NavMenu,
  SearchBar,
  Name,
  ProfileWrapper,
  SearchIcon,
  Arrow,
  NavMenuSelected,
  Greyline,
  DownArrow,
  FAQContainer,
  QuestionLabel,
  QuestionContext,
  QuestionWrapper,
  IconBar,
  My,
  Like,
  Location,
  Home,
  IconLabel,
  IconLabelBar
} from '../../styles/board.FAQ'

export default function renderFAQ () {
  return (
    <Wrapper>
      <StatusBar>12:30</StatusBar>
      <SearchBar>
        <SearchIcon src="/icon.png"></SearchIcon>
      </SearchBar>
      <ProfileBar>
        <Title>마이</Title>
        <ProfileWrapper>
          <Profile src="/profile.png"></Profile>
          <Name>임정아</Name>
          <Arrow src="/arrow.png"></Arrow>
        </ProfileWrapper>
      </ProfileBar>
      <NavigationBar>
        <NavMenu>공지사항</NavMenu>
        <NavMenu>이벤트</NavMenu>
        <NavMenuSelected>FAQ</NavMenuSelected>
        <NavMenu>Q&A</NavMenu>
      </NavigationBar>
      <Greyline></Greyline>
      <FAQContainer>
        <QuestionLabel>Q. 01</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>리뷰 작성은 어떻게 하나요?</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
        <QuestionLabel>Q. 02</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>리뷰 수정/삭제는 어떻게 하나요?</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
        <QuestionLabel>Q. 03</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>아이디/비밀번호를 잊어버렸어요.</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
        <QuestionLabel>Q. 04</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>회원탈퇴를 하고 싶어요.</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
        <QuestionLabel>Q. 05</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>출발지 설정은 어떻게 하나요?</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
        <QuestionLabel>Q. 06</QuestionLabel>
        <QuestionWrapper>
          <QuestionContext>비밀번호를 변경하고 싶어요.</QuestionContext>
          <DownArrow src="/downarrow.png"></DownArrow>
        </QuestionWrapper>
      </FAQContainer>
      <Greyline></Greyline>
      <IconBar>
        <IconLabelBar>
          <Home src="/home.png"></Home>
          <IconLabel>홈</IconLabel>
        </IconLabelBar>
        <IconLabelBar>
          <Home src="/location.png"></Home>
          <IconLabel>잇츠로드</IconLabel>
        </IconLabelBar>
        <IconLabelBar>
          <Home src="/like.png"></Home>
          <IconLabel>마이찜</IconLabel>
        </IconLabelBar>
        <IconLabelBar>
          <Home src="/my.png"></Home>
          <IconLabel>마이</IconLabel>
        </IconLabelBar>
      </IconBar>
    </Wrapper>
  )
}
