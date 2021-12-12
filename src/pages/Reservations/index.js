import React from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';

import Reserva from '../../components/Reserva';

function Reservas({ navigation }) {
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
            <Reserva/>
            <Reserva/>
            <Reserva/>
          </ScrollView>
          
        </View>
    );
  }

  function teste(){
    return(
      <Login/>
    )
  }

  const Drawer = createDrawerNavigator();

  export default function ReservaNavegacao() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Reservas">
          <Drawer.Screen name="Reservas" component={Reservas} />
          <Drawer.Screen name="Teste" component={teste} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export const styles = StyleSheet.create({
      background: {
      flex: 1,
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    },
})