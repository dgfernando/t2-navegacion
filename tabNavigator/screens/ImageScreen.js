import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

export default function ImageScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1726491703868-c74b074ffdcd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1654676653686-0b5e4a8ae190?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1615526510403-36543ebc5ccf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1612592046138-1514dc06a1cd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1726402919430-a4521f2b1fa6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1654676653699-2a9cee2435d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
      marginVertical: 10,
    },
  });

