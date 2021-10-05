import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from './Button.';

export const BottomComponent = () => {
  return (
    <View
      style={{
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: 100,
        borderTopColor: 'grey',
        borderColor: 'transparent',

        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '30%',

          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title={'Kostenlos Registrieren'} />
      </View>
    </View>
  );
};
