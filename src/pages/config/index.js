/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Tbutton, TInput } from './styles';

export default function config() {
  const [value, setValue] = useState(true);

  function handleClick() {}

  return (
    <Container>
      <Icon name="account-balance" size={200} color="#3b9eff" />

      <TInput
        icon="lock"
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Senha da casa"
      />

      <Tbutton onPress={() => handleClick()}>Definir senha da casa</Tbutton>
    </Container>
  );
}

config.navigationOptions = {
  tabBarLabel: 'Senha',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="lock-outline" size={20} color={tintColor} />
  ),
};
