import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #7159c1;
  padding: 15px 20px;
`;

export const Tbutton = styled(Button)`
  margin: 10px auto;
  width: 100%;
`;

export const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  margin: 20px auto;
  width: 100%;
`;

export const TInput = styled(Input)`
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
`;
