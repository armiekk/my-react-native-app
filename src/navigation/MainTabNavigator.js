import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

// navigator
import FeedTabNavigator from './FeedTabNavigator';
import DiscoverTabNavigator from './DiscoverTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';
import NotificationTabNavigator from './NotificationTabNavigator';

// screen
import PostEditorScreen from '../screens/PostEditorScreen';

const bottomTabNavigator = createBottomTabNavigator({
  FeedTabNavigator,
  DiscoverTabNavigator,
  ProfileTabNavigator,
  NotificationTabNavigator
});

bottomTabNavigator.navigationOptions = {
  header: null
};

const MainTabNavigator = createStackNavigator({
  BottomNavigator: bottomTabNavigator,
  PostEditor: PostEditorScreen
});

MainTabNavigator.navigationOptions = {
  header: null,
  mode: 'modal',
  initialRouteName: 'BottomNavigator'
};

export default MainTabNavigator;
