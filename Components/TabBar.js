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

export const TabBar = () => {
  const [button1, setB1] = useState(true);
  const [button2, setB2] = useState(false);
  const [button3, setB3] = useState(false);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          borderWidth: 1,
          width: 600,
          borderRadius: 20,
          marginLeft: 50,
          marginRight: 50,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            setB1(true);
            setB2(false);
            setB3(false);
          }}
          style={{
            width: '33%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: button1 ? '#81E6D9' : 'transparent',
            borderRightWidth: 1,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text
            style={{color: button1 ? 'white' : 'black', fontWeight: 'bold'}}>
            {'Arbeitnehmer'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setB1(false);
            setB2(true);
            setB3(false);
          }}
          style={{
            width: '33%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            backgroundColor: button2 ? '#81E6D9' : 'transparent',
          }}>
          <Text
            style={{color: button2 ? 'white' : 'black', fontWeight: 'bold'}}>
            {'Arbeitnehmer'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setB1(false);
            setB2(false);
            setB3(true);
          }}
          style={{
            width: '33%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: button3 ? '#81E6D9' : 'transparent',
          }}>
          <Text
            style={{color: button3 ? 'white' : 'black', fontWeight: 'bold'}}>
            {'Arbeitnehmer'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
