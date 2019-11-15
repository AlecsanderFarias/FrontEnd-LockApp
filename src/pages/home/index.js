import React, { useState } from 'react';
import { useEffect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Tbutton, Tinput } from './styles';

export default function Home({}) {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Container>
      <Icon name="lock" size={200} color={open ? 'green' : 'red'} />

      <Tbutton onPress={() => handleClick()}>Abrir Cofre</Tbutton>
    </Container>
  );
}
