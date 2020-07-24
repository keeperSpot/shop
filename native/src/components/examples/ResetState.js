import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';

import { resetState } from 'common/actions/demo';

import { styles } from 'styles/default';

export const ResetState = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Hello Redux</Text>
      <Text style={styles.sectionDescription}>
        Make the state saved to local disk. Users can now start the application where they left. And
        the state is encrypted too.
      </Text>
      <TouchableOpacity onPress={() => dispatch(resetState())} type='primary'>
        <Text style={styles.sectionDescription}>Click reset the state.</Text>
      </TouchableOpacity>
    </View>
  );
};
