/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { Container, Tbutton, Text } from './styles';

export default function Home() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const password = useSelector(state => state.config.password);
  const ip = useSelector(state => state.config.ip);

  async function handleClick(state) {
    setLoading(true);

    if (password === '' || ip === '') {
      Alert.alert('Erro', 'Configure a senha e o IP antes de qualquer coisa!');
    } else if (password !== 'admin' && password !== 'Admin') {
      Alert.alert(
        'Erro',
        'A senha configurada por você não corresponde com a senha da tranca',
      );
    } else {
      await axios
        .get(`http://${ip}/${state ? 'on' : 'off'}`, {
          timeout: 2000,
        })
        .then(response => {
          if (response.data.status === 'off') {
            setOpen(false);
          } else {
            setOpen(true);
          }
        })
        .catch(() => {
          Alert.alert(
            'Erro',
            'Parece que voce não esta conectado na rede onde esta localizada a tranca ou esta tentando acessar um IP errado',
          );
        });
    }

    setLoading(false);
  }

  async function handleAtt() {
    setLoading(true);

    if (password === '' || ip === '') {
      Alert.alert('Erro', 'Configure a senha e o IP antes de qualquer coisa!');
    } else if (password !== 'admin' && password !== 'Admin') {
      Alert.alert(
        'Erro',
        'A senha configurada por você não corresponde com a senha da tranca',
      );
    } else {
      await axios
        .get(`http://${ip}/status`, {
          timeout: 2000,
        })
        .then(response => {
          if (response.data.status === 'off') {
            setOpen(false);
          } else {
            setOpen(true);
          }
        })
        .catch(() => {
          Alert.alert(
            'Erro',
            'Parece que voce não esta conectado na rede onde esta localizada a tranca ou esta tentando acessar um IP errado',
          );
        });
    }

    setLoading(false);
  }

  useEffect(() => {
    handleAtt();
  }, []);

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

      {open ? (
        <Tbutton loading={loading} onPress={() => handleClick(false)}>
          Trancar Cofre
        </Tbutton>
      ) : (
        <Tbutton loading={loading} onPress={() => handleClick(true)}>
          Abrir Cofre
        </Tbutton>
      )}

      <Tbutton loading={loading} onPress={() => handleAtt()}>
        Atualizar
      </Tbutton>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-balance" size={20} color={tintColor} />
  ),
};
