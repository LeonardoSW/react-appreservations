import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Reserva() {
    return(
        <View style={styles.background}>

            <View style={styles.container}>
                <Image
                style={styles.containerimg}
                source={require('../../img/local.jpg')}
                />
            </View>
        </View>
    )
}



export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container:{
        width: '90%',
        backgroundColor: '#77af88',
        maxHeight:'13%',
        maxWidth:'90%',
        borderRadius:20,
        alignItems: 'flex-end',
        display:'flex',
    },
    containerimg:{
        maxHeight:'100%',
        maxWidth:'25%',
        borderRadius:20,
        display:'flex',
    },
    containerText:{
        alignItems: 'center',
        width:'90%'
    }

  })