import React,{useEffect, useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {View, StyleSheet,Image,Text , Button } from 'react-native';
import {getEvent} from "../api"

const Event = ( { route, navigation }) => {

    const { llave } = route.params;

    const [event, setEvent] = useState([])


    const loadEvent = async (id) => {
        const data = await getEvent(id)
        // console.log(data)
        setEvent(data)
        // console.log(data.error)
    }

    useEffect(() => {
        loadEvent(llave);
    }, [event])

    return (
        
            !event.error ? (<View style={{
                backgroundColor: "white", flex: 1,
                padding: 10, 
                // justifyContent: 'center'
            }}>
                
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: `${event.image}`,
                    }}
                />
                <Text style={styles.texto}>{event.name}</Text>
                <Text style={styles.texto}>{event.artist}</Text>
                <Text style={styles.texto_2}>{event.place}</Text>
                <Text style={styles.texto_2}>{event.date} // {event.time}hs</Text>
                <Text style={styles.texto_2}>Total: <Text style={styles.span}>{event.availableTickets}</Text></Text>
                <Text style={styles.texto_2}>Vendidos: <Text style={styles.span}>0000</Text>(00%)</Text>
                <Text style={styles.texto_2}>Ingresados: <Text style={styles.span}>0000</Text>(00%)</Text>
                <View
                    style={styles.contBtn}
                >
                    <Button
                        title="Scanner"
                        onPress={() => Alert.alert(llave)}
                        color= 'rgb(255,204,0)'
                        style={styles.boton}
                        onPress={() =>{
                            console.log('scan press')
                            navigation.navigate('ScannScreen')
                        }}
                        // onPress={() => navigation.goBack()}
                    /> 
                </View>
            </View>) 
            : 
            (<Text>No hay acceso a ningun evento, verificar llave.</Text>)
        
    );
}


const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 350,
      height: 150,
      marginTop: 0
    },
    texto: {
        fontSize: 40,
        fontWeight: "bold"
    },
    texto_2: {
        fontSize: 30,
        color: 'grey',
        fontWeight: "bold"
    },
    span:{
        color: 'black'
    },
    boton:{
        margin: 50,
    },
    contBtn:{
        backgroundColor: 'white',
        padding: 5,
        marginTop: 30
    }
  });


export default Event;



// <View style={{
//     backgroundColor: "white", flex: 1,
//     padding: 10, 
//     justifyContent: 'center'
// }}>
    
//     <Image
//         style={styles.tinyLogo}
//         source={{
//         uri: `${event.image}`,
//         }}
//     />
//     <Text style={styles.texto}>{event.name}</Text>
//     <Text style={styles.texto}>{event.artist}</Text>
//     <Text style={styles.texto_2}>{event.place}</Text>
//     <Text style={styles.texto_2}>{event.date} // {event.time}hs</Text>
//     <Text style={styles.texto_2}>Total: <Text style={styles.span}>{event.availableTickets}</Text></Text>
//     <Text style={styles.texto_2}>Vendidos: <Text style={styles.span}>0000</Text>(00%)</Text>
//     <Text style={styles.texto_2}>Ingresados: <Text style={styles.span}>0000</Text>(00%)</Text>
//     <View
//         style={styles.contBtn}
//     >
//         <Button
//             title="Scanner"
//             onPress={() => Alert.alert(llave)}
//             color= 'rgb(255,204,0)'
//             style={styles.boton}
//             onPress={() =>{
//                 console.log('scan press')
//                 navigation.navigate('ScannScreen')
//             }}
//             // onPress={() => navigation.goBack()}
//         /> 
//     </View>
// </View>
