import styled from '@emotion/styled';
import {IProps} from '../query/Query.types';

export const RegisterButton = styled.button`
  background-color: ${(props: IProps) =>
    props.aaa === true ? 'blue' : 'yellow'};
`;
