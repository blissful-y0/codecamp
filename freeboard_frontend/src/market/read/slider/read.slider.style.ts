import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderWrapper = styled(Slider)`
  .slick-slider {
    width: 600px;
    height: 600px;
    border: 1px solid black;
    outline: none;
    padding-bottom: 70px;
  }
  .slick-slide div {
    display: inline-block;
    width: 500px;
    height: 500px;
    /* border: 1px solid black; */
    outline: none;
  }
  .slick-dots {
    position: absolute;
    top: 98%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .slick-dots li button::before {
    font-size: 13px;
    color: black;
    opacity: 0.2;
  }
  .slick-dots li.slick-active button::before {
    color: none;
    opacity: 1;
  }

  .slick-arrows {
    position: absolute;
    top: 95%auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: black;
  }
  /* .slick-dots.slick-thumb {
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 0;
    margin: 0;
    list-style: none;
    transform: translate(-50%);
    li {
      position: relative;
      display: inline-block;
      &.slick-active {
        span {
          filter: none;
        }
      }
    }
  } */
`;
