import React from 'react';
import { View, StyleSheet } from 'react-native';
import OptionsMenu from './OptionsMenu';
import PopupMenu from './PopUpMenu';
import ContextMenu from './ContextMenu';
import ContextualActionMode from './ContextualActionMode';

const App = () => {
  return (
    <View style={styles.container}>
      <OptionsMenu />
      < PopupMenu />
      <ContextMenu />
      <ContextualActionMode />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
