import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Text>Stories Section</Text>
        {/* Implement stories */}
      </View>
      <View>
        <Text>Posts Section</Text>
        {/* Implement posts */}
      </View>
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
    </ScrollView>
  );
};

export default HomeScreen;
