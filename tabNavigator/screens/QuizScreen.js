import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function QuizScreen() {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  const questions = [
    {
      text: 'Cuál era el nombre original de Minecraft?',
      options: [
        { id: '1', label: 'Cave Game', value: 'Cave Game' },
        { id: '2', label: 'Dig and Build', value: 'Dig and Build' },
        { id: '3', label: 'Infiniminer', value: 'Infiniminer' },
      ],
      selectedValue: question1,
      stateSetter: setQuestion1,
    },
    {
      text: 'Quién le regaló su sombrero de paja a Luffy?',
      options: [
        { id: '1', label: 'Zoro', value: 'Zoro' },
        { id: '2', label: 'Garp', value: 'Garp' },
        { id: '3', label: 'Shanks', value: 'Shanks' },
      ],
      selectedValue: question2,
      stateSetter: setQuestion2,
    },
    {
      text: 'Cuántas clases hay en Team Fortress 2?',
      options: [
        { id: '1', label: '9', value: '9' },
        { id: '2', label: '7', value: '7' },
        { id: '3', label: '8', value: '8' },
      ],
      selectedValue: question3,
      stateSetter: setQuestion3,
    },
  ];

  const handleOptionChange = (question, value) => {
    question.stateSetter(value);
  };

  const enviar = () => {
    Alert.alert('Quiz Completado', `Respuestas: 
    1: ${question1} 
    2: ${question2} 
    3: ${question3}`);
  };

  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          <RadioGroup
            radioButtons={question.options}
            onPress={(value) => handleOptionChange(question, value)}
            selectedValue={question.selectedValue}
            layout="row"
          />
        </View>
      ))}
      <Button title="Enviar respuestas" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
});