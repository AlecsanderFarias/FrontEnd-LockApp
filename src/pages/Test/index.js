/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
 Container, Tbutton, Text, TInput 
} from './styles';

export default function Test() {
  const [value, setValue] = useState(true);

  function handleClick() {}

  return (
    <Container>
      <Icon name="speaker-phone" size={200} color="#3b9eff" />
      <Text>Mudar e testar conexão</Text>

      <TInput
        icon="rss-feed"
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="IP da tranca"
      />

      <Tbutton onPress={() => handleClick()}>Mudar IP</Tbutton>
      <Tbutton onPress={() => handleClick()}>Testar Conexao</Tbutton>
    </Container>
  );
}

Test.navigationOptions = {
  tabBarLabel: 'IP',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="rss-feed" size={20} color={tintColor} />
  ),
};
