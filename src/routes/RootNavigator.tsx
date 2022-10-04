import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import styles from '../constants/styles';
import DetailsPage from '../components/DetailsPage';
import {Contact} from '../model/model';

export type RootStackParamList = {
  Home: undefined;
  Details: Contact;
};
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <View style={styles.appContainer}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => {
            return {
              title: 'Contacts',

              headerTitleAlign: 'center',
              headerRightContainerStyle: styles.headerRightContainer,
            };
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={() => {
            return {
              title: '',
              headerStyle: styles.detailsRightContainer,
            };
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default RootNavigator;
