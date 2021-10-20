import React,{useEffect, useState} from 'react';
import {View, StyleSheet,Image,Text , TextInput,Button, Alert} from 'react-native';
import img from "../image/logo_1.png"



const HomeScreen = ({navigation}) => {
    
    const [llave, setLlave] = useState('')

    return (
        <View
            style={{
                backgroundColor: "white", flex: 1,
                padding: 10
            }}
        >
            
            <Image
                style={styles.tinyLogo}
                source={img}
            />

            <TextInput
                style={styles.input}
                onChangeText={setLlave}
                value={llave}
                placeholder="Llave de evento"
            />
            <Button
                title="Verificar"
                onPress={() =>{
                    // console.log('verificar llave: d448f18a-acef-4b25-aa29-e91adea38b3e')
                    navigation.navigate('Event', {llave : llave})
                }}
                color= 'rgb(255,204,0)'
                style={styles.boton}
            />
            <Text style={styles.textito}>Si no tiene la llave, comunicate con el administrador de Tukiteck</Text>
            <Text style={styles.textito}>tukiteckpf@gmail.com</Text>


        </View>
    );
}


const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 350,
      height: 150,
      marginTop: 0
    }
  
    ,input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 100
      },
      textito:{
          padding: 20
      },
      boton:{
        padding: 20,
        color: 'grey',
      }
  });

export default HomeScreen;
