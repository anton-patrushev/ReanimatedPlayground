import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {MenuItem} from './MenuItem';
import {disableToggleAction, enableToggleAction} from './redux/toggle/actions';

interface IScreenProps {}

export const Screen: React.FC<IScreenProps> = () => {
  const switchValue = useSelector(state => state.toggle.toggleValue);
  const dispatch = useDispatch();
  // const [switchValue, setSwitchValue] = React.useState(false);

  const toggleValue = () => {
    switchValue
      ? dispatch(disableToggleAction())
      : dispatch(enableToggleAction());
  };

  return (
    <View style={styles.screen}>
      <MenuItem
        value={switchValue}
        toggleValue={toggleValue}
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
