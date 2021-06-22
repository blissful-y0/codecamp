import {css, Global} from '@emotion/react';

const reset = css`
  body {
    margin: 0px;
  }
  * {
    /* margin: 0px; */
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    /* font-family: 'NotoSans'; */
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
