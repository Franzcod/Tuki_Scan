// import React,{useState, useEffect} from 'react';
// import {View, StyleSheet, Text, Button} from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// const ScannScreen = () => {

//     const [hasPermission, setHasPermission] = useState(null);
//     const [scanned, setScanned] = useState(false);
//     const [text, setText] = useState('Not yet scanned')

//     const askForCameraPermission = () => {
//         (async () => {
//             const { status } = await BarCodeScanner.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//           })();
//       }


//     useEffect(() => {
//         askForCameraPermission();
//         console.log(hasPermission)
//     }, []);

//     const handleBarCodeScanned = ({type, data}) => {
//         setScanned(true)
//         setText(data);
//         console.log('Type: ' + type + '\nData: ' + data)
//     }

//     // Check permissions and return the screens
//   if (hasPermission === null) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting for camera permission</Text>
//       </View>)
//   }
//   if (hasPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ margin: 10 }}>No access to camera</Text>
//         <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
//       </View>)
//   }


//     return (
//         <View style={styles.container}>
//         <Text>scanner</Text>
//       </View>)
    
// }

// const styles = StyleSheet.create({})

// export default ScannScreen;


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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

