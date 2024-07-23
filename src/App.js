import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Card from './components/Card';
//custom compenent: ekranda bulunan arayüz bileşenlerinin görünürlük veya logic katmanını 
//ana kod bloğundan soyutlayarak çekip ayrı bir yapımışçasına ele alma işlemi, tekrarlı kodlar için çok faydalı

//<TouchableOpacity> özel bir view yapısı, tüm view stil özelliklerini alır, aynı nativedeki gibi on press eventi sağlıyor
//text'e basılıyormuş gibi efekt veriyor

export default function App() {
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <Card title = "Eddard Stark" text = "Winter is coming..."/>
        <Card title = "Arif Işık" text = "Uzaylılar tarafından kaçırıldım. Evet tarafından..." />
        <Card title = "Serbest" text = "İlhami abi sen söyle, ben başka bir ilde miyim?" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1, 
    backgroundColor: '#e0e0e0',
    justifyContent: 'space-evenly'
  },
})