import {
  FirstSection,
  SecondSection,
  ThridSection,
  SakuraSection,
  SakuraOne,
  UIWrapper,
  TotalTrade,
  TextWrapper,
  SteadyText,
  TotalUsers,
  TotalDownload,
  TotalReturningUser,
} from './homescreen.style';
import {memo} from 'react';

function HomeUI({trade, users, downloads, returningUsers}) {
  return (
    <UIWrapper>
      <FirstSection>
        <TextWrapper>
          <SteadyText>누적 거래량 </SteadyText>
          <TotalTrade>{trade.toLocaleString()}만 건</TotalTrade>
        </TextWrapper>
        <TextWrapper>
          <SteadyText>가입 유저수 </SteadyText>
          <TotalUsers>{users.toLocaleString()} 만 명</TotalUsers>
        </TextWrapper>
        <TextWrapper>
          <SteadyText>앱 다운로드 </SteadyText>
          <TotalDownload>{downloads.toLocaleString()} 만 건</TotalDownload>
        </TextWrapper>
        <TextWrapper>
          <SteadyText>매월 사용자</SteadyText>
          <TotalReturningUser>
            {returningUsers.toLocaleString()} 만 명
          </TotalReturningUser>
        </TextWrapper>
      </FirstSection>
      <SecondSection>
        {/* <SakuraSection>
          <SakuraOne />
        </SakuraSection> */}
      </SecondSection>
      <ThridSection></ThridSection>
    </UIWrapper>
  );
}

export default memo(HomeUI);
