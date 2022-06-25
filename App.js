import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import CiljPrikaz from './components/CiljPrikaz';
import CiljUnos from './components/CiljUnos';

export default function App() {
  const [ciljevi, postaviCiljeve] = useState([])
  const [unosVidljiv, postaviVidljivost] = useState(false)

  const noviCilj = (unos) => {
    const noviObjekt = {
    value: unos,
    key: Math.random().toString()
    }
    postaviCiljeve((ciljevi) => [...ciljevi, noviObjekt]);
   };

   const brisiCilj = (ciljID) => {
    postaviCiljeve((ciljevi) => {
      return ciljevi.filter((c) => c.key !== ciljID);
    });
   };
  
  return (
    <View style={ stilovi.glavni }> 
      <CiljUnos postaviCiljeve = {noviCilj}
      vidljiv = {unosVidljiv}/>
      <Button title='Novi unos' onPress={() =>
      postaviVidljivost(true)} />
      <CiljUnos vidljiv = {unosVidljiv}
      postaviCiljeve={noviCilj} />
      <FlatList data = {ciljevi}
      renderItem = {(el) => <CiljPrikaz 
        naslov = {el.item.value} 
        brisanje = {brisiCilj} id = {el.item.key}/>}
      />
    </View>
  );
}

const stilovi = StyleSheet.create({
  glavni: {
    margin: 50
  }
});
