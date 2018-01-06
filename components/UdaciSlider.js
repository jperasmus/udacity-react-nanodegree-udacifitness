import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const UdaciSlider = ({ max, step, unit, value, onChange }) => {
  return (
    <View style={styles.row}>
      <Slider
        style={{ flex: 1 }}
        value={value}
        step={step}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
};

export default UdaciSlider;
