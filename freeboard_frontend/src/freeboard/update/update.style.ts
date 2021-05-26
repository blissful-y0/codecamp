import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1100px;
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const WriterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 5px;
`

export const IDContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100% auto;
`

export const Title = styled.h1`
  padding: 50px;
`

export const Input = styled.input``

export const BlackBox = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  margin: 8px;
`

export const InputWriterInfo = styled.input`
  width: 486px;
  height: 52px;
  padding: 10px;
  box-sizing: border-box;
`

export const WriterInfo = styled.div`
  width: 486px;
  height: 52px;
  padding: 10px;
  color: black;
  font-size: 18px;
  font-weight: bold;
`

export const Paragraph = styled.textarea`
  width: 996px;
  height: 480px;
  text-align: top;
  padding: 10px;
  resize: none;
`

export const AddressAndLink = styled.input`
  width: 996px;
  height: 52px;
  padding: 10px;
  margin: 2px auto;
`

export const Label = styled.label`
  font-size: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const PhotoAttach = styled.button`
  width: 78px;
  height: 78px;
  background-color: #4f4f4f;
  color: white;
  margin: 5px;
`

export const UploadButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${({ disabled }) =>
    disabled === false ? '#ffd600' : 'grey'};
  color: black;
  border: solid white;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
  justify-content: center;
`

export const Address = styled.input`
  width: 70px;
  height: 50px;
  text-align: center;
`

export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const LabelForMainSetting = styled.label`
  font-size: 12px;
  padding: 3px;
`
