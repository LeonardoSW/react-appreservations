import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import Reserva from '../../components/Reserva';

/* import Style from './style';*/

export default function Reservas(qtd) {
    return (
        <View style={styles.background}>
          <ScrollView style={styles.scroll}>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
          </ScrollView>
        </View>
    );
  }

  export const styles = StyleSheet.create({
    background: {
      marginTop:30,
      flex: 1,
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    },
})