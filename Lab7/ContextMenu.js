// ContextMenu.js
import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { ContextMenu } from 'react-native-ios-context-menu';

const ContextMenuExample = () => {
  const handleContextMenuPress = () => {
    ToastAndroid.show('Change Color', ToastAndroid.SHORT);
    // Add logic to change text color
  };

  return (
    <View>
      <ContextMenu
        style={{ width: 200, height: 50, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}
        onPress={handleContextMenuPress}
      >
        <Text>Long press to show Context Menu</Text>
      </ContextMenu>
    </View>
  );
};

export default ContextMenuExample;
