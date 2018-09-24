import { createBottomTabNavigator } from 'react-navigation';

// navigator
import FeedTabNavigator from './FeedTabNavigator';
import DiscoverTabNavigator from './DiscoverTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';
import NotificationTabNavigator from './NotificationTabNavigator';

export default createBottomTabNavigator({
  FeedTabNavigator,
  DiscoverTabNavigator,
  ProfileTabNavigator,
  NotificationTabNavigator
});
