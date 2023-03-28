import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {FloatingTabBar as TabBar} from 'react-navigation-tabbar-collection';

const Tab = createBottomTabNavigator();

const DemoScreen = ({route}) => (
  <View style={styles.screen}>
    <Text>{route.name}</Text>
  </View>
);

export default BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        tabBar={props => (
          <TabBar
            {...props}
            openIcon={({color, size}) => (
              <Icon name="appstore-o" size={size} color={color} />
            )}
            closeIcon={({color, size}) => (
              <Icon name="close" size={size} color={color} />
            )}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={DemoScreen}
          options={{
            title: 'Home',
            icon: ({focused, color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
        <Tab.Screen
          name="News"
          component={DemoScreen}
          options={{
            title: 'News',
            icon: ({focused, color, size}) => (
              <Icon name="sharealt" size={size} color={color} />
            ),
            color: 'info',
          }}
        />
        <Tab.Screen
          name="Chat"
          component={DemoScreen}
          options={{
            title: 'Chat',
            icon: ({focused, color, size}) => (
              <Icon name="API" size={size} color={color} />
            ),
            color: 'warning',
          }}
        />
        <Tab.Screen
          name="Likes"
          component={DemoScreen}
          options={{
            title: 'Likes',
            icon: ({focused, color, size}) => (
              <Icon name="hearto" size={size} color={color} />
            ),
            color: 'danger',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={DemoScreen}
          options={{
            title: 'Settings',
            icon: ({focused, color, size}) => (
              <Icon name="setting" size={size} color={color} />
            ),
            color: 'success',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
