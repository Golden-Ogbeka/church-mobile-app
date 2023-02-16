import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import appColors from '../../../theme/colors';
import ProfileImage from '../../../assets/icons/profile.svg';
import { screenNames } from '../../../screens/screenNames';

const LogoHeader = ({
  navigateToScreen,
}: {
  navigateToScreen: (screenName: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/brand/logo.png')}
        style={styles.logoImage}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigateToScreen(screenNames.LOGIN)}>
        <ProfileImage />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: appColors.white,
    paddingLeft: 20,
    paddingRight: 30,
    paddingVertical: 3,
  },
  logoImage: {
    width: 80,
    height: 45,
    resizeMode: 'cover',
  },
  iconContainer: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    backgroundColor: appColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoHeader;
