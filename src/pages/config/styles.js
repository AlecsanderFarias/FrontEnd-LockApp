import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #7159c1;
  padding: 15px 20px;
`;

export const Tbutton = styled(Button)`
  margin: 20px auto;
  width: 100%;
`;

export const TInput = styled(Input)`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  margin: 20px auto;
  width: 100%;
`;
