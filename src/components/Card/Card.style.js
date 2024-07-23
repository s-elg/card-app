import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
      },
    
    body: {
        padding: 10,
      },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 3,
      },
    
    text: {
        fontSize: 18,
        margin: 10,
        marginTop: 3,
      },
    
    button_container: {
        backgroundColor: '#00C2FF',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 12,
      },
    
    button_title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
      }
});


export default styles;
