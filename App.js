import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator({
  //Color: ColorScreen
}, {
  /*
  initialRouteName: 'Color',
  defaultNavigationOptions: {
    title: 'State Test',
    headerTitleStyle: { alignSelf: 'center'}
  }
  */
});

export default createAppContainer(navigator);