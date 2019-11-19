import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'LockApp',
      storage: AsyncStorage,
      whitelist: ['config'],
    },
    reducers,
  );

  return persistedReducer;
};
