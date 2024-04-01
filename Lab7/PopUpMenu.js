// PopupMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { Menu } from 'react-native-paper';

const PopupMenu = () => {
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
        anchor={<TouchableOpacity onPress={openMenu}><Text>Popup Menu</Text></TouchableOpacity>}
      >
        <Menu.Item onPress={() => handleMenuItemPress('Change Order')} title="Change Order" />
        {/* Add more items as needed */}
      </Menu>
    </View>
  );
};

export default PopupMenu;
