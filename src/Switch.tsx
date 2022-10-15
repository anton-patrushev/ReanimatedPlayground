import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

interface ISwitchProps {
  isEnabled: boolean;

  onToggle(): void;
}

export const Switch: React.FC<ISwitchProps> = ({isEnabled, onToggle}) => {
  const innerStyle = isEnabled ? styles.active : styles.inactive;

  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <View style={[styles.innerControl, innerStyle]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: 50,
    borderRadius: 12,
    height: 20,
  },
  innerControl: {
    backgroundColor: '#FFFFFF',
    width: 24,
    height: 24,
    borderRadius: 12,
    top: -2,
  },
  active: {
    transform: [{translateX: 26}],
  },
  inactive: {
    transform: [{translateX: 0}],
  },
});
