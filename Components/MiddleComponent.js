/* eslint-disable react-native/no-inline-styles */
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

import {TabBar} from './TabBar';
import {ListComponent} from './List';

import LinearGradient from 'react-native-linear-gradient';

export const MiddleComponent = () => {
  return (
    <View style={{width: '100%', height: 2000}}>
      <LinearGradient
        colors={['#E6FFFA', '#EBF4FF']}
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50, textAlign: 'center'}}>
            {'Deine Job website'}{' '}
          </Text>
        </View>
        <View
          style={{
            width: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 400, height: 400, resizeMode: 'cover'}}
            source={require('../assets/Job.png')}
          />
        </View>
      </LinearGradient>
      <View style={{height: 50, marginTop: 20}}>{TabBar()}</View>
      <View style={{width: '100%', height: '50%'}}>{ListComponent()}</View>
    </View>
  );
};
