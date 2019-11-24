import { Alert } from 'react-native';

export function updatePassword(password) {
  Alert.alert('Alterando senha', 'Senha alterada com sucesso');

  return {
    type: '@config/SET_PASSWORD',
    payload: { password },
  };
}

export function updateIP(ip) {
  Alert.alert('Alterando IP', 'IP alterado com sucesso');

  return {
    type: '@config/SET_IP',
    payload: { ip },
  };
}
