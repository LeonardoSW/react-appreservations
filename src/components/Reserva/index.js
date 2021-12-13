import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Reserva() {
    return(
  /*      <View style={styles.global}>*/

            <View style={styles.container}>
                <Image
                style={styles.containerimg}
                source={require('../../img/local.jpg')}
                />
                <View style={styles.viewtexts}>
                    <Text style={styles.containertext}>Stéphany Amaoka</Text>
                    <Text style={styles.containertext2}>Salão de Festas</Text>
                    <Text style={styles.containertext3}>Quadra 2 - 19/08 | 20h</Text>
                </View>
            </View>

 /*       </View>*/
    )
}

export const styles = StyleSheet.create({
    global:{
        marginTop: 30,
        backgroundColor: '#5e8d69',
        alignItems:'center',
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    background: {
      flex: 1,
      backgroundColor: '#5e8d69',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container:{
        marginTop:20,
        width: '90%',
        backgroundColor: '#77af88',
        maxHeight:'15%',
        maxWidth:'93%',
        borderRadius:20,
        alignItems: 'flex-start',
        display:'flex',
        flexDirection: 'row-reverse',
    },
    containerimg:{
        maxHeight:'100%',
        maxWidth:'25%',
        borderRadius:20,
        display:'flex',
    },
    viewtexts:{
        display:'flex',
        flexDirection:'column',
        marginTop:1,
    },
    containertext:{
        width: 250,
        color:'#FFF',
        fontSize:25,        
    },
    containertext2:{
        width: 250,
        color:'#FFF',
        fontSize:20,    
    },
    containertext3:{
        width: 250,
        color:'#FFF',
        fontSize:15,    
    }

  })