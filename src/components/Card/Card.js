import React from "react";
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style'

//propları fonksiyona ekliyoruz dışarıdan title'ını belirlemek için
const Card = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.body}>
                <Text style = {styles.title}>{props.title}</Text>
                <Text style = {styles.text}>{props.text}</Text>
            </View>
            <View style = {styles.button_container}>
                <TouchableOpacity onPress={() => Alert.alert('Merhaba ' + props.title)}>
                    <Text style = {styles.button_title}>I LIKED</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Card;




