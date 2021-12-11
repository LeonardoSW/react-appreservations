import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Reservations from './src/pages/Reservations';

export default function App(){
    return(
        <Reservations/>
    );
}
