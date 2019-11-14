import React from 'react';
import { SafeAreaView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container } from './styles';

export default function Home() {
  return (
    <Container>


    <Input  icon="lock" placeholder="digite seu nome"/>
    <Button>
      Abrir Cofre
    </Button>
      

    </Container>
  );
}
