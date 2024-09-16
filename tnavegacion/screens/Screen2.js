import * as React from 'react';
import { Alert, View, Text, Button } from 'react-native';

export default function Screen2 ({route, navigation}) {
    const {message, showScreen3} = route.params;
    const controlNav = () => {
        if (showScreen3) {
            navigation.navigate('Screen3');
        } else {
            Alert.alert('No fue posible acceder a la pantalla de configuración.');
        }
    };
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla 2</Text>
      <Text>{message}</Text>
      <Button title='Ir a configuración' onPress={() => navigation.navigate('Screen3', {message: 'que mas'})}/>
      <Button title='volver' onPress={() => navigation.goBack('Screen1')}/>
      <Button title='Reemplazar con configuración' onPress={() => navigation.replace('Screen3', {message: 'que mas'})}/>
      <Button title="Ir a configuración (punto7)" onPress={controlNav} />
    </View>
  );
}