import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator({
  Text: TextScreen
}, {
  initialRouteName: 'Text',
  defaultNavigationOptions: {
    title: 'Counter App',
    headerTitleStyle: { alignSelf: 'center' }
  }
});

export default createAppContainer(navigator);