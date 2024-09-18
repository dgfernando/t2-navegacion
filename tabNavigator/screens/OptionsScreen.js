import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const options = [
  { id: '1', name: 'Editar Perfil' },
  { id: '2', name: 'Cambiar tema' },
  { id: '3', name: 'Opciones de privacidad' },
  { id: '4', name: 'Idioma' },
  { id: '5', name: 'Cuentas bloqueadas' },
  { id: '6', name: 'Sobre la app' },
];

export default function OptionsScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  option: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
});
