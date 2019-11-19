import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './pages/home';
import Config from './pages/config';
import Test from './pages/Test';

export default createAppContainer(
  createSwitchNavigator({
    Navigation: createBottomTabNavigator({
      Home,
      Config,
      Test,
    }),
  }),
  {
    initialRouteName: 'Navigation',
  },
);
