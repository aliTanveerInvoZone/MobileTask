/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './Components/Header';
import {MiddleComponent} from './Components/MiddleComponent';
import {BottomComponent} from './Components/BottomComponent';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header title={'Login'} />
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          {MiddleComponent()}
        </ScrollView>
        {BottomComponent()}
      </View>
    </SafeAreaView>
  );
};

export default App;
