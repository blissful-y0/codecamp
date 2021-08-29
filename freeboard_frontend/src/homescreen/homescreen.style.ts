import styled from '@emotion/styled';
import {keyframes} from '@emotion/react';

export const UIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 1500px;
`;

export const SlideInTop = keyframes`
  0% {
    opacity: 1;
    transform: translateY(100px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  /* 50% {
    opacity: 1;
    transform: translateY(30px); */
  }
  /* 80% {
    opacity: 1;
    transform: translateY(0px);
  } */
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Fading = keyframes`
100% {
  opacity; 1
  transform: translateY(300px), translateX(2560px), translateZ(100px), rotate3d(1, 1, 1, 720deg);
  }
`;

export const SteadyText = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 35px;
  margin-right: 5%;
  border: 1px solid black;
  width: 200px;
  text-align: center;
`;

export const TotalTrade = styled.h1`
  animation: ${SlideInTop} 1s linear backwards;
  color: black;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
  text-align: center;
`;

export const TotalUsers = styled.h1`
  animation: ${SlideInTop} 3s linear backwards;
  color: black;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
  text-align: center;
`;

export const TotalDownload = styled.h1`
  animation: ${SlideInTop} 6s linear backwards;
  color: black;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
  text-align: center;
`;

export const TotalReturningUser = styled.h1`
  animation: ${SlideInTop} 9s linear backwards;
  color: black;
  font-weight: bold;
  font-size: 30px;
  width: 200px;
  text-align: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const FirstSection = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  border: 1px solid black;
  background-color: #fff0ba;
`;

export const SecondSection = styled.article`
  /* position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: block; */
  width: 80%;
  height: 40%;
  border: 1px solid black;
`;

export const ThridSection = styled.article`
  width: 80%;
  height: 30%;
  border: 1px solid black;
`;

export const SakuraSection = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  border: 1px solid pink;
  text-align: left;
`;

export const SakuraOne = styled.div`
  display: block;
  position: absolute;
  left: 0;
  width: 100px;
  height: 100px;
  content: '';
  border: 1px solid black;
  background-color: yellow;
  /* animation-duration: 6s; */
  animation: ${Fading} 6s linear infinite;
  /* animation-timing-function: linear;
  animation-iteration-count: infinite; */
  z-index: 1;
  animation-delay: 1.25s;
  top: 10%;
  /* transform: translateY(300px), translateX(2560px), translateZ(100px),
    rotate3d(1, 1, 1, 720deg); */
`;
