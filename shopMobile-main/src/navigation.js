import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './Screens/screen2';
import Screen3 from './Screens/screen3';
import Products from './Screens/products'

import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen
          name="Products"
          component={Products} />
        <Stack.Screen
          name="Details"
          component={Screen} />
      </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Cart"
        component={Screen} />
      <Stack.Screen
        name="Screen3"
        component={Screen3} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#04283e' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'CartStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}/>
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarLabel: 'Cart',
            title: 'Cart'
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  ); 
};    
      {/* <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            //headerTitle: (props) => <Text>TITLE</Text>,
            headerStyle: {
              //textAlign: 'center', 
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              //textAlign: 'center', 
              fontWeight: 'bold',
              color: '#fff'
            },
            title: 'Overview',
            // headerLeft: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     style={{flex:1}}
            //   />
            // ),
            // headerRight: () => (
            //   <Button
            //     onPress={() => Alert.alert('This is a button!', 'Description', [
            //       {
            //         text: 'CLICK',
            //         onPress: ()=> console.log('CLICK Pressed')
            //       },
            //       {
            //         text: 'CLICK2',
            //         onPress: ()=> console.log('CLICK2 Pressed')
            //       }
            //     ])}
            //     title="Info"
            //     style={{flex:1}}
            //   />
            // ),
          }}
        />
        <Stack.Screen 
          name="Screen" 
          component={Screen} 
          options={({route})=>{ 
           return { title: route?.params?.title }
          }}
        />
      </Stack.Navigator> */}

export default Navigation;



