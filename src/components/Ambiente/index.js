import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Reserva from '../../components/Reserva';


function None() {
    return {}
  }


export default function Ambiente() {
    return(
 

            <View style={styles.container}>

                <View style={styles.viewtexts}>
                    <Text style={styles.containertext}>Salão de Festas</Text>
                        <Image
                        style={styles.containerimg}
                        source={require('../../img/local.jpg')}
                        />

                    <View style={styles.viewbutton}>
                    <Button
                        
                        onPress={None}
                        title="Edit"
                        color="#e6d24f"
                        accessibilityLabel="Edit"
                    />
                    <Button
                        
                        onPress={None}
                        title="Remove"
                        color="#e07d66"
                        accessibilityLabel="Remove"
                    />
                    </View>
                    
                
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
        marginTop:20,
        width: '110%',
        height: 250,
        backgroundColor: '#77af88',
        maxWidth:'93%',
        borderRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        display:'flex',
        flexDirection: 'column-reverse',
    },
    containerimg:{
        height:'68%',
        width: 320,
        borderRadius:20,
        
        justifyContent:'center'
    },
    viewtexts:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    containertext:{
        width: '100%',
        color:'#FFF',
        fontSize:25,        
        marginBottom:3,
        fontStyle:'italic'
    },
    viewbutton:{
        display:'flex',
        flexDirection:'row',
        marginTop:3
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },
  })