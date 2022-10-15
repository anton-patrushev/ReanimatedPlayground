import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';

interface ISwitchProps {
  isEnabled: boolean;

  onToggle(): void;
}

export const Switch: React.FC<ISwitchProps> = ({isEnabled, onToggle}) => {
  const sharedValue = useSharedValue(0);

  useEffect(() => {
    sharedValue.value = withTiming(isEnabled ? 1 : 0, {duration: 200});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnabled]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(sharedValue.value, [0, 1], [0, 26])},
      ],
      backgroundColor: interpolateColor(
        sharedValue.value,
        [0, 1],
        ['#ff0000', '#00ff00'],
      ),
    };
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.8}>
      <Animated.View style={[styles.innerControl, animatedStyles]} />
    </TouchableOpacity>
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
});
