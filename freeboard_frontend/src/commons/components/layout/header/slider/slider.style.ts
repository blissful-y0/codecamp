import styled from '@emotion/styled';

export const SliderWrapper = styled('div')`
  .slick-dots {
    position: absolute;
    top: 80%;
  }
  .slick-dots li button::before {
    font-size: 16px;
    color: #ffffff;
    opacity: 0.2;
  }
  .slick-dots li.slick-active button::before {
    color: none;
    opacity: 1;
  }
`;
export default SliderWrapper;
