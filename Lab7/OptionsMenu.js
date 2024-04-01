import React from 'react';
import { View, Text, ToastAndroid, TouchableOpacity } from 'react-native';
//import { Menu, Divider } from 'react-native-paper';

const OptionsMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleMenuItemPress = (item) => {
    closeMenu();
    ToastAndroid.show(`Selected: ${item}`, ToastAndroid.SHORT);
  };

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<TouchableOpacity onPress={openMenu}><Text>Options Menu</Text></TouchableOpacity>}
      >
        <Menu.Item onPress={() => handleMenuItemPress('Item 1')} title="Item 1" icon="star" />
        <Menu.Item onPress={() => handleMenuItemPress('Item 2')} title="Item 2" icon="heart" />
        <Menu.Item onPress={() => handleMenuItemPress('Item 3')} title="Item 3" icon="email" />
        <Menu.Item onPress={() => handleMenuItemPress('Item 4')} title="Item 4" icon="bell" />
        <Menu.Item onPress={() => handleMenuItemPress('Item 5')} title="Item 5" icon="camera" />
      </Menu>
    </View>
  );
};

export default OptionsMenu;
