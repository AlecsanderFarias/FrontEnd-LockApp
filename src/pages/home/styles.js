import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #7159c1;
  padding: 15px 20px;
`;

export const Tinput = styled(Input)`
  margin: 20px auto;
`;

export const Tbutton = styled(Button)`
  width: 100%;
`;
