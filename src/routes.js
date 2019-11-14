import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './pages/home';
import Config from './pages/config';

const navigator = createBottomTabNavigator({
  Home,
  Config,
})


export default createAppContainer(
  
    navigator
  
);
