import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 1000px;
  background-image: url("/background.png");
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WrapperImage = styled.div`
  /* width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;

export const Location = styled.img`
  /* margin-bottom: -27px; */
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  /* margin-bottom: 70px; */
`;

export const Input = styled.input`
  background-color: transparent;
  color: white;
  border: transparent;
  height: 50px;
  width: 80vw;
  text-align: left;
  /* text-decoration: underline;
  text-underline-position: under; */
  padding: 50% auto;
  border-bottom: 1px solid white;
  font-size: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  color: white;
  margin-top: -20px;
`;

export const IDErrorMessageClass = styled.label`
  color: red;
`;

export const PWDErrorMessageClass = styled.label``;

export const Delete = styled.img`
  width: auto;
  height: 30%;
`;

export const Box = styled.div`
  width: 63px;
  height: 10px;
  background-color: white;
  background-image: -webkit-linear-gradient(
    -45deg,
    gray 25%,
    transparent 25%,
    transparent 50%,
    gray 50%,
    gray 75%,
    transparent 75%,
    transparent
  );
  border-radius: 1px;
  margin-top: -20px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: -15px;
`;

export const Rectangle = styled.div`
  width: 540px;
  height: 76px;
  margin: 20px 49px 44px 51px;
  padding: 25px 0;
  border-radius: 38px;
  background-color: rgba(255, 20, 147, 0.8);
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const Bar = styled.div`
  background-color: white;
  width: 1px;
  height: 50%;
`;

export const YellowRectangle = styled.div`
  width: 540px;
  height: 76px;
  margin: 20px 49px 44px 51px;
  padding: 25px 0;
  border-radius: 38px;
  background-color: transparent;
  text-align: center;
  color: rgba(255, 255, 0);
  font-size: 25px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 0);
`;
