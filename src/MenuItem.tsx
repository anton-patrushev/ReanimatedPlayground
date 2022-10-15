import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Switch} from './Switch';

interface IMenuItemProps {
  value: boolean;
  label: string;

  toggleValue(): void;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  value,
  toggleValue,
  label,
}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={toggleValue}
      activeOpacity={0.8}>
      <Switch isEnabled={value} onToggle={toggleValue} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: '80%',
    backgroundColor: '#b4b4b4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  label: {
    paddingTop: 20,
  },
});
