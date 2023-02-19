import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AboutScreen from '../../../screens/About';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import HistoryScreen from '../../../screens/About/HistoryScreen';
import PastorsScreen from '../../../screens/About/PastorsScreen';
import SinglePastorScreen from '../../../screens/About/SinglePastorScreen';
import StatementOfFaithScreen from '../../../screens/About/StatementOfFaithScreen';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.ABOUT}
        component={AboutScreen}
        options={{
          ...stackHeaderStyles,
          title: 'About the Church',
        }}
      />
      <Stack.Screen
        name={screenNames.HISTORY}
        component={HistoryScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Our History',
        }}
      />
      <Stack.Screen
        name={screenNames.PASTORS}
        component={PastorsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Our Pastors',
        }}
      />
      <Stack.Screen
        name={screenNames.SINGLE_PASTOR}
        component={SinglePastorScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Our Pastors',
        }}
      />
      <Stack.Screen
        name={screenNames.STATEMENT_OF_FAITH}
        component={StatementOfFaithScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Statement of Faith',
        }}
      />
    </Stack.Group>
  );
};

export default AboutStack;
