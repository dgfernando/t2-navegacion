import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Screen1 ({navigation}){
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Inicio (Screen1) </Text>
            <Button title='Ir a detalles' onPress={() => navigation.navigate('Screen2', {message: 'hola'})}/>
            <Button title='Ir a detalles (true)' onPress={() => navigation.navigate('Screen2', { message: 'holap', showScreen3: true })}/>
            <Button title='Ir a detalles (false)' onPress={() => navigation.navigate('Screen2', { message: 'holap', showScreen3: false })}/>
        </View>
    )
}