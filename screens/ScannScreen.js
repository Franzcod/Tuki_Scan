import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {searchTicketiInEvent} from "../api"
import AwesomeAlert from 'react-native-awesome-alerts';
export default function App({route}) {

    const { eventID } = route.params;
    // console.log(eventID)

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [eventId, setEventId] = useState(eventID);
  const [userData, setUserData] = useState([]);
  
//   const [idTicket, setIdTicket] = useState('81ec400e-d6c0-47bc-9a40-0006e4a0f877');

  useEffect(() => {
      
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    let resp = await searchTicketiInEvent(eventId, data)
    setUserData(resp)
    if(resp){
        Alert.alert(
            "TICKET VALIDO",
            'Prop: '+resp.propietario +'\nUsuario: ' + resp.user.email  +'\nEvento: ' + resp.event.artist  +'\nFecha: ' + resp.event.date +'\nLugar: ' + resp.event.place,  
           
            [
              //sumar a la variable q cuenta los ingresados al evento
              { text: "OK", onPress: () => console.log('') }
            ]
          );
        
        
    }
    else{
        Alert.alert(
            "TICKET NO VALIDO",
            'vuelvas pronto'
           
            [
              
              { text: "OK", onPress: () => setScanned(false) }
            ]
          );
        
    }
    
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No tienes acceso a la camara</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Toca para volver a escanear'} onPress={() => setScanned(false)} />}
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

