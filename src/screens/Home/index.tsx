import { View, Text, Alert } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import Button from '../../common/Button';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const { todayDevotional } = useAppSelector(state => state.todayDevotional);
  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(getDayDevotional()).unwrap();
  // }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: DMRegular,
          color: appColors.secondaryColor,
        }}>
        HomeScreen
      </Text>
      <Button title="Announcement" onPress={() => console.log('Pressed')} />
    </View>
  );
};

export default HomeScreen;
