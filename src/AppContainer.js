import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import homeScreen from './screen/homeScreen';
import aliceInWonderlandScreen from './screen/aliceInWonderlandScreen';
import backpackingScreen from './screen/backpackingScreen';
import fromZerotoOneScreen from './screen/zerotoOneScreen';
import bestSandwicScreen from './screen/bestSandwicScreen';
import dudeWhereScreen from './screen/dudeWhereScreen';
import poemsScreen from './screen/poemsScreen';

const AppNavigator = createStackNavigator(
  {
    HOME: homeScreen,
    BOOK1: aliceInWonderlandScreen,
    BOOK2: backpackingScreen,
    BOOK3: fromZerotoOneScreen,
    BOOK4: bestSandwicScreen,
    BOOK5: dudeWhereScreen,
    BOOK6: poemsScreen,
  },
  {
    initialRouteName: 'HOME',
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
