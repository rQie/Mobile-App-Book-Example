import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screen/homeScreen';
import AliceInWonderland from './screen/aliceInWonderland';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AliceInWonderland: AliceInWonderland,
  },
  {
    initialRouteName: 'HomeScreen',
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
