import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>

      {/*View de logo*/}
      <View style={styles.containerLogo}>
        <Text>Reservations</Text>
        <Text>     For You</Text>
      </View>


      {/*View de acessos*/}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='User'
        />

        <TextInput
          style={styles.input}
          placeholder='Pass'
        />

        {/*View de botões*/}
        <TouchableOpacity style={styles.btnSign}>
          <Text style={styles.btnSignText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignup}>
          <Text style={styles.btnSignupText}>Sign up</Text>
        </TouchableOpacity>
      </View>



    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5e8d69',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input:{
    color: '#222',
    width: '90%',
    backgroundColor: '#578556',
    marginBottom: 15,
    fontSize:25,
    fontStyle: 'italic',
    borderRadius:4,
    padding:10,
  },
  btnSign:{
    color:'#fff',
    backgroundColor:'#75af86',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
    marginBottom:15,
  },
  btnSignText:{
    fontSize:25,
    color:'#FFF'
  },
  btnSignup:{
    color:'#fff',
    backgroundColor:'#75af86',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
  btnSignupText:{
    fontSize:25,
    color:'#FFF',
  }
});
