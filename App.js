import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//view'ları yan yana sıralamak için

export default function App() {
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
      <View style = {styles.box_1} />
      <View style = {styles.box_2} />
      <View style = {styles.box_3} />
      <View style = {styles.box_4} /> 
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

//flex: ekranının şu kadarını şu kadar oranla kapla demek için

const styles = StyleSheet.create( {
  container: {
    flex: 1, 
    //bunu koymazsak ekranda hiç bir şey çıkmıyor,
    //dıştaki birimin değerini ne koyarsan koy, bir şey değişmeyecek
    //pozitif olmalı
    flexDirection: 'column',
    backgroundColor: 'ivory',
    justifyContent: 'center', //y ekseninde hizzalamak için, kullanmak için flex değerine ihityaç yoktur
    alignItems: 'center' //x ekseninde hizzalamak için, kullanmak için flex değerine ihityaç yoktur
  }, 

  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'lavender',
  },

  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'lemonchiffon',
  },

  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'lavenderblush',
  },

  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'lightsteelblue',
  },
})