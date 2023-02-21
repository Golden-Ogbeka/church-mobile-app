import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTestimonies } from '../../store/slices/testimony';
import SectionLoader from '../../common/Loader/SectionLoader';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import appColors from '../../theme/colors';
import TestimonyCard from '../../components/TestimonyScreen/TestimonyCard';
import SendTestimonyButton from '../../components/TestimonyScreen/SendTestimonyButton';

const TestimoniesScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['TESTIMONIES']>) => {
  const { loading, testimonies } = useAppSelector(state => state.testimonies);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    dispatch(getTestimonies()).unwrap();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    dispatch(getTestimonies()).unwrap();
    setRefreshing(false);
  }, []);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <SectionLoader
          style={{
            alignSelf: 'center',
          }}
        />
      ) : testimonies && testimonies.length ? (
        testimonies.map(testimony => (
          <TestimonyCard testimony={testimony} key={testimony._id} />
        ))
      ) : (
        <Text style={styles.notFoundText}>No testimony found</Text>
      )}
      <SendTestimonyButton navigateToScreen={navigateToScreen} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 19,
    gap: 22,
    position: 'relative',
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});
export default TestimoniesScreen;
