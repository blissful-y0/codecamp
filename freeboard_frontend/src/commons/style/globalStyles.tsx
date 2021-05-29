import {css, Global} from '@emotion/react';

const reset = css`
  * {
    /* margin: 0px; */
    padding: 0px;
    box-sizing: border-box;
    font: 'NotoSans';
  }

  @font-face {
    font-family: 'NotoSans';
    src: url('/fonts/NotoSans.otf');
  }
`;

const GlobalStyles = () => {
  return <Global styles={reset} />;
};

export default GlobalStyles;
