import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

/* import Style from './style';*/

export default function Login() {
    return (
      <KeyboardAvoidingView style={styles.background}>
  
        {/*View de logo*/}
        <View style={styles.containerLogo}>
  
          <Text style={styles.textLogo}>Reservations</Text>
          <Text style={styles.textLogo}>     For You</Text>
  
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
          <Text style={styles.forgotpassword}>forgot your password?</Text>
          </View>
  
  
  
          <View style={styles.containertwo}>
  
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
    textLogo:{
      color:'#FFF',
      fontSize: 35,
    },
    forgotpassword:{
      color: '#fff',
      width:'90%',
      textAlign: 'right',
      marginBottom:50
    },
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '90%',
      borderWidth: 0.5,
      borderTopColor: '#5e8d69',
      borderLeftColor: '#5e8d69',
      borderRightColor: '#5e8d69',
      borderBottomColor: '#fff'
    },
    input:{
      color: '#FFF',
      width: '90%',
      backgroundColor: '#578556',
      marginBottom: 15,
      fontSize:25,
      fontStyle: 'italic',
      borderRadius:4,
      borderWidth:0.5,
      borderColor: '#FFF',
      padding:10,
    },
  
    containertwo:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
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