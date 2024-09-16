import * as React from 'react';
import { Button, Text, View} from 'react-native';

export default function Screen3({route, navigation}) {
    const { message } = route?.params || {};
    const reset = () => {
        navigation.reset({
            index: 0,
            routes: [{name:'Screen1'}],
        });
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de Configuraciones (SettingsScreen)</Text>
      <Text>{message}</Text>
      <Button title='volver al inicio' onPress={() => navigation.navigate('Screen1')}/>
      <Button title='volver' onPress={() => navigation.goBack('Screen2')}/>
      <Button title='resetear' onPress={reset}/>
    </View>
  );
}