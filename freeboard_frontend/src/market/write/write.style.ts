import styled from '@emotion/styled';

export const UIWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 53px;
  margin: 50px;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  padding: 10px;
  margin-bottom: 35px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 68%;
  margin-top: 50px;
  padding-left: 70px;
  padding-right: 70px;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  margin-bottom: 10px;
`;

export const Map = styled.div`
  width: 45%;
  height: 250px;
  border: 1px solid black;
`;

export const GetLocationButton = styled.button`
  width: 25%;
  height: 52px;
  border: 1px solid black;
`;

export const GPSAddressWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const UploadButton = styled.button`
  background: #ffd600;
  width: 179px;
  height: 52px;
  margin-top: 50px;
  outline: none;
  border: 0px;
`;

export const ErrorMessage = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
  color: #dd2c00;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -32px;
`;
