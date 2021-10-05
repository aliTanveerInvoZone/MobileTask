/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({title = '', onPress}) {
  return (
    <TouchableOpacity style={{}}>
      <LinearGradient
        style={{
          width: 250,
          height: 40,

          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#319795', '#3182CE']}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
