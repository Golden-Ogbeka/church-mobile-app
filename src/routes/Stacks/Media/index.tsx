import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from '../../../screens/Media';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import { screenNames } from '../../../screens/screenNames';
import StreamingPlatformsScreen from '../../../screens/Media/StreamingPlatformsScreen';

const Stack = createNativeStackNavigator();

const MediaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MEDIA}
        component={MediaScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Media',
        }}
      />
      <Stack.Screen
        name={screenNames.STREAMING_PLATFORMS}
        component={StreamingPlatformsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Streaming Platforms',
        }}
      />
    </Stack.Navigator>
  );
};

export default MediaStack;
