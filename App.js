import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SquareScreen from './src/screens/SquareScreen.js'

const navigator = createStackNavigator({
  Square: SquareScreen
}, {
  initialRouteName: 'Square',
  defaultNavigationOptions: {
    title: 'Color Square App',
    headerTitleStyle: { alignSelf: 'center' }
  }
});

export default createAppContainer(navigator);