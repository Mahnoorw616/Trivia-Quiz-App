import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Quiz</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate('Quiz')}
          color="#ff66b2"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff66b2',
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffccff',
  },
});

export default SplashScreen;
