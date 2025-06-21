import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import quizData from './Data/Questions.json';

const SummaryScreen = ({ route, navigation }) => {
  const { score, total, userAnswers } = route.params;

  const handleRestartQuiz = () => {
    navigation.navigate('Quiz', { restart: true });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.summaryText}>
        You answered {score} out of {total} questions correctly.
      </Text>
      <Text style={styles.subHeader}>Review Your Answers:</Text>
      {quizData.map((question, index) => {
        const userAnswer = userAnswers.find((ans) => ans.questionId === question.id);
        return (
          <View key={index} style={styles.answerReview}>
            <Text style={styles.questionText}>{question.question}</Text>
            <Text
              style={userAnswer && userAnswer.isCorrect ? styles.correctAnswer : styles.incorrectAnswer}
            >
              Your answer: {userAnswer ? userAnswer.answer : 'No Answer'} 
              ({userAnswer && userAnswer.isCorrect ? 'Correct' : 'Incorrect'})
            </Text>
          </View>
        );
      })}
      <View style={styles.restartButton}>
        <Button 
          title="Restart Quiz" 
          onPress={handleRestartQuiz} 
          color="#ff66b2"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffccff',
  },
  summaryText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#ff66b2',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#ff66b2',
  },
  answerReview: {
    marginBottom: 15,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  correctAnswer: {
    color: 'green',
    fontWeight: 'bold',
  },
  incorrectAnswer: {
    color: 'red',
    fontWeight: 'bold',
  },
  restartButton: {
    marginTop: 30,
  },
});

export default SummaryScreen;
