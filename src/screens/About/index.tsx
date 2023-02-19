import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { ScrollView } from 'react-native';
import AboutBrandImage from '../../components/AboutScreen/AboutBrandImage';
import { StyleSheet } from 'react-native';
import { DMRegular } from '../../theme/fonts';
import AboutCard from '../../components/AboutScreen/AboutCard';
import aboutItems from '../../components/AboutScreen/aboutItems';

const AboutScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['ABOUT']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 31,
      }}>
      <AboutBrandImage />
      <Text style={styles.visionText}>
        The Vision of The Father's House started in the place of prayer at a
        time in January 2003. Apostle Richard Udoh had just resigned from an
        executive position in one of the leading new generation banks in Nigeria
        with the sole intention to run a full time ministerial assignment with
        The Foursquare Gospel Church, Saabo, Lagos.
      </Text>
      <View style={styles.itemContainer}>
        {aboutItems.map(item => (
          <AboutCard
            title={item.title}
            screenName={item.screenName}
            key={item.title}
            navigateToScreen={navigateToScreen}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  visionText: {
    color: '#888888',
    fontFamily: DMRegular,
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 13.78,
    marginBottom: 14,
  },
  itemContainer: {
    gap: 13,
  },
});

export default AboutScreen;