import styled from '@emotion/styled';

export const DialogWrapper = styled.div`
  width: 424px;
  height: 686px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 424px;
  height: 686px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/loginbackground.png');
  background-size: 424px 686px;
`;

// export const BlackImage = styled.div`
//   position: relative;
//   width: 424px;
//   ::before {
//     position: absolute;
//     content: '';
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 1;
//   }
// `;

export const Logo = styled.img`
  width: 236px;
  height: 36px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
`;
/* ::before {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: rgba(255, 255, 255, 0.05); */
/* } */

export const Input = styled.input`
  width: 384px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
  color: #ffffff;
  margin: 5px;
  padding: 10px;
  outline: none;

  ::placeholder {
    color: #ffffff;
  }
`;

export const LoginStatus = styled.div`
  width: 100%;
  height: 30px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input``;

export const LoginButton = styled.button`
  width: 384px;
  height: 50px;
  background: rgba(50, 50, 50, 0.7);
  border-radius: 16px;
  color: white;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
