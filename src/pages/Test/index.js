/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Tbutton, Text, TInput } from './styles';
import { updateIP } from '../../store/modules/config/actions';

export default function Test() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const ip = useSelector(state => state.config.ip);

  useEffect(() => {
    setValue(ip);
  }, []);

  useEffect(() => {
    setValue(ip);
  }, [ip]);

  function handleClick() {
    if (value === ip) {
      Alert.alert('Erro', 'O novo IP deve ser diferente do anterior');
    } else {
      dispatch(updateIP(value));
    }
  }

  async function handleTest() {
    setValue(ip);

    setLoading(true);

    await axios
      .get(`http://${ip}`, {
        timeout: 2000,
      })
      .then(response => {
        Alert.alert('Sucesso', 'Conexão estabelecida ');
        setLoading(false);
      })
      .catch(() => {
        Alert.alert(
          'Erro',
          'Parece que voce não esta conectado na rede onde esta localizada a tranca ou esta tentando acessar um IP errado',
        );
        setLoading(false);
      });
  }

  return (
    <Container>
      <Icon name="speaker-phone" size={200} color="#3b9eff" />
      <Text>Mudar e testar conexão</Text>

      <TInput
        icon="rss-feed"
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={value || 'IP da tranca'}
      />

      <Tbutton onPress={() => handleClick()}>Mudar IP</Tbutton>
      <Tbutton loading={loading} onPress={() => handleTest()}>
        Testar Conexao
      </Tbutton>
    </Container>
  );
}

Test.navigationOptions = {
  tabBarLabel: 'IP',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="rss-feed" size={20} color={tintColor} />
  ),
};
