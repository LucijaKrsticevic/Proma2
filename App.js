import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [unos, postaviUnos] = useState('')
  const [ciljevi, postaviCiljeve] = useState([])

  const dodajNovi = () => {
    //console.log(unos);
    postaviCiljeve(ciljevi.concat(unos))
    //postaviUnos('')
  }
  const promjenaUnosa = (tekst) => {
    postaviUnos(tekst);
  }
  return (
    <View style={ stilovi.glavni }> 
      <View>

        <TextInput 
        style={stilovi.unos} 
        placeholder="Unesi novi cilj"
        value={unos}
        onChangeText={promjenaUnosa}
        />

        <Button title='Dodaj' onPress={dodajNovi}/>
      </View>

      <View>
        {ciljevi.map((cilj) => (
          <View key={cilj} style={stilovi.lista}>
          <Text>{cilj}</Text>
          </View>
        ))}
      </View>
    </View>
    
    
  );
}

const stilovi = StyleSheet.create({
  glavni: {
    margin: 50
  },
  unos: {
    width: '70%',
    marginBottom: 5, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1 
  },
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
