import { StatusBar } from 'expo-status-bar';


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  function sayHello() {
    console.log("hello world")
  }
  // componentler bir tane component döndürmeli yani return'un içerisinde bir tane ana parent bulunmalı, react'ın bir kuralıdır
  return ( 
    <View>
      <View>
        <Text>Hello world!!!</Text> 
        <Text>Hello world</Text>
      </View>
      {/* buttondaki title ve onPress zounlu proplar, onPress fonskiyon alır */}
      <Button title='Here press me!' onPress={() => {console.log(sayHello())}} color={'mistyrose'} />
    </View>
  );
}

// arrow functionla kurulmuş hali
// const App = () => {
//   return ( 
//     <View>
//       <View>
//         <Text>Hello world!!!</Text> 
//         <Text>Hello world</Text>
//       </View>
//     </View>
//   );
// }