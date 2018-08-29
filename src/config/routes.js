// @flow
import React from 'react';
import { Icon } from 'react-native-elements';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Home from '../scenes/Home/Home';
import Settings from '../scenes/Settings/Settings';
import Users from '../scenes/Users/Users';
import Profile from '../scenes/Profile/Profile';
import Builds from '../scenes/Builds/Builds';
import Build from '../components/Build';

const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
          <Icon type='feather' name='home' color={tintColor} />
      ),
    })
  },
  Users: {
    screen: Users,
    navigationOptions: ({ navigation }) => ({
      header: null,
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
          <Icon type='feather' name='users' color={tintColor} />
      ),
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      header: null,
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
          <Icon type='material-community' name='face-profile' color={tintColor} />
      ),
    })
  },
  Builds: {
    screen: Builds,
    navigationOptions: ({ navigation }) => ({
      header: null,
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
          <Icon type='entypo' name='briefcase' color={tintColor} />
      ),
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      header: null,
      showIcon: true,
      tabBarIcon: ({ tintColor }) => (
          <Icon type='feather' name="settings" color={tintColor} />
      ),
  })
  },
},
  {
    tabBarPosition: 'top',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    lazy: true,
  }
);

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Build: {
      screen: Build
    },
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
