import { View, Text, FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { DevotionalType } from '../../types/types';
import ItemCard from './ItemCard';

const DevotionalList = ({
  changeSelectedDevotional,
  selectedDevotional,
}: {
  changeSelectedDevotional: (devotional: DevotionalType) => void;
  selectedDevotional: DevotionalType | undefined;
}) => {
  const { devotionals } = useAppSelector(state => state.devotionals);

  return (
    <FlatList
      style={{
        flexGrow: 0,
      }}
      horizontal={true}
      data={devotionals}
      inverted
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ItemCard
          devotional={item}
          selected={
            selectedDevotional ? item._id === selectedDevotional._id : false
          }
          changeSelectedDevotional={changeSelectedDevotional}
        />
      )}
      keyExtractor={item => item._id}
    />
  );
};

export default DevotionalList;
