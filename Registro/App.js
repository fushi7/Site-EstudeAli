import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
export default function App() {
  return (
    <View style={styles.container}>
      
      <Card>
        <AssetExample/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({

 
});
