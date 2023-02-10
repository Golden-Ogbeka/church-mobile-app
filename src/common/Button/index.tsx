import {
  View,
  Text,
  TouchableHighlight,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ButtonProps,
} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import appColors from '../../theme/colors';
import { DMBold } from '../../theme/fonts';

interface Props {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

const Button = ({
  title,
  buttonStyle,
  textStyle,
  onPress,
  ...rest
}: Props & ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle]}
      onPress={onPress}
      {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: appColors.secondaryColor,
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: appColors.white,
    fontFamily: DMBold,
    fontSize: 13,
  },
});

export default Button;