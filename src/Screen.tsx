import React from 'react';
import {StyleSheet, View} from 'react-native';

import {MenuItem} from './MenuItem';

interface IScreenProps {}

export const Screen: React.FC<IScreenProps> = () => {
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <View style={styles.screen}>
      <MenuItem
        value={switchValue}
        changeValue={setSwitchValue}
        label="Press on me too !!!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
