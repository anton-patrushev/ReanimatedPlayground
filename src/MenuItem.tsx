import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Switch} from './Switch';

interface IMenuItemProps {
  value: boolean;

  changeValue(newValue: boolean): void;
}

export const MenuItem: React.FC<IMenuItemProps> = ({value, changeValue}) => {
  const toggleValue = () => {
    changeValue(!value);
  };

  return (
    <View style={styles.item}>
      <Switch isEnabled={value} onToggle={toggleValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: '100%',
    backgroundColor: '#b4b4b4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
