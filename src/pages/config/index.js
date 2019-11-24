/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */

import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { Container, Tbutton, TInput } from './styles';
import { updatePassword } from '../../store/modules/config/actions';

export default function config() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const password = useSelector(state => state.config.password);

  useEffect(() => {
    setValue(password);
  }, [password]);

  function handleClick() {
    if (value.length < 5) {
      Alert.alert('Erro', 'A senha deve ter no minimo 6 caracteres');
    } else if (value === password) {
      Alert.alert('Erro', 'A senha deve ser diferente da anterior');
    } else {
      dispatch(updatePassword(value));
    }
  }

  return (
    <Container>
      <Icon name="account-balance" size={200} color="#3b9eff" />

      <TInput
        icon="lock"
        value={value}
        onChangeText={text => setValue(text)}
        placeholder="Senha da casa"
      />

      <Tbutton onPress={() => handleClick()}>Mudar senha</Tbutton>
    </Container>
  );
}

config.navigationOptions = {
  tabBarLabel: 'Senha',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="lock-outline" size={20} color={tintColor} />
  ),
};
