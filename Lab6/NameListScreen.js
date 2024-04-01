// NameListScreen.js
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const names = ['John', 'Emma', 'Michael', 'Sophia', 'William'];

const NameListScreen = () => {
  const handlePress = (name) => {
    alert(`Selected name: ${name}`);
  };

  const renderItem = ({ item }) => (
    <ListItem onPress={() => handlePress(item)} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default NameListScreen;
