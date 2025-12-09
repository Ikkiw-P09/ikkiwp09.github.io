import React from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';

const SearchScreen = () => {
  return (
    <View>
      <TextInput placeholder="Search..." />
      <FlatList
        data={[]} // Add search results data here
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
