/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Header({title = ''}) {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderColor: '#EBF4FF',
        borderBottomWidth: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={['#319795', '#3182CE']}
        style={{width: '100%', height: 5}}
      />
      <View
        style={{
          width: '85%',
          height: '80%',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={{fontWeight: 'bold', color: '#319795', fontSize: 17}}>
          {title}
        </Text>
      </View>
    </View>
  );
}
