import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Tbutton, Text } from './styles';

export default function Home() {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Container>
      {open ? (
        <>
          <Icon name="lock-open" size={200} color="green" />
          <Text>Status: Aberto</Text>
        </>
      ) : (
        <>
          <Icon name="lock-outline" size={200} color="red" />
          <Text>Status: Trancado</Text>
        </>
      )}

      <Tbutton onPress={() => handleClick()}>
        {open ? 'Trancar ' : 'Abrir '}
        Cofre
      </Tbutton>

      <Tbutton onPress={() => handleClick()}>Atualizar</Tbutton>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-balance" size={20} color={tintColor} />
  ),
};
