import React from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';
import Reserva from '../../components/Reserva';
import Ambiente from '../../components/Ambiente';

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

  function Ambientes({ navigation }){
    return(
      <View style={styles.background2}>
      <Button
        onPress={Reservas}
        title="+ Add new evironment"
        color="#77af88"
        accessibilityLabel="+ Add new evironment"

      />      
        <ScrollView>
          <Ambiente/>
          <Ambiente/>
          <Ambiente/>
          <Ambiente/>
          <Ambiente/>
        </ScrollView>      
      </View>
      
    )
  }

  const Drawer = createDrawerNavigator();

  export default function ReservaNavegacao() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Reservas">
          <Drawer.Screen name="Reservations" component={Reservas} />
          <Drawer.Screen name="Registred Evironments" component={Ambientes} />
{/*          <Drawer.Screen name="Teste" component={teste} />*/}
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
    background2:{
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    },
    teste:{
      backgroundColor:'#5e8d69',
      color: '#5e8d69',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
})