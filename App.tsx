import React from 'react';
import { View, StyleSheet } from 'react-native';
import ApplePayComponent from './ApplePayComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ApplePayComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
