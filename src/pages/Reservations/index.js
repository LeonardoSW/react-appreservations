import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Reserva from '../../components/Reserva';

/* import Style from './style';*/

export default function Reservas(qtd) {
    return (
        <View style={styles.background}>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
            <Reserva/>
        </View>
    );
  }

  function CarregaReservas(){
      for( i = 0; i < 10; i++){
        <Reserva/>
      }
  }

  export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    }
})