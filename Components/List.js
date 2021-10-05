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

import LinearGradient from 'react-native-linear-gradient';

export const ListComponent = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',

        alignItems: 'center',
      }}>
      <View
        style={{
          width: '70%',
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: '#4A5568',
          }}>
          {'Drei einfache Schritte zu deinem neuen Job'}
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '35%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Image1.png')}
          style={{width: 200, height: 200}}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '50%',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            marginStart: 50,
          }}>
          <Text style={{fontSize: 100, fontWeight: 'bold', color: 'grey'}}>
            1.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'grey',
              marginBottom: 25,
              marginStart: 20,
            }}>
            Erstellen dein Lebenslauf
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={['#E6FFFA', '#EBF4FF']}
        style={{
          width: '100%',
          height: '40%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginStart: 20,
          }}>
          <Text style={{fontSize: 100, fontWeight: 'bold', color: 'grey'}}>
            2.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'grey',
              marginBottom: 25,
              marginStart: 20,
            }}>
            Erstellen dein Lebenslauf
          </Text>
        </View>
        <Image
          source={require('../assets/Image2.png')}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </LinearGradient>

      <View
        style={{
          width: '100%',
          height: '40%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginStart: 60,
          }}>
          <Text style={{fontSize: 100, fontWeight: 'bold', color: 'grey'}}>
            3.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'grey',
              marginBottom: 25,
              marginStart: 20,
              width: '40%',
            }}>
            Mit nur einem Klick bewerben
          </Text>
        </View>
        <Image
          source={require('../assets/Image3.png')}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
    </View>
  );
};
