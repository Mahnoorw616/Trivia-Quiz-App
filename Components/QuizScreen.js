import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, CheckBox } from 'react-native';
import quizData from './Data/Questions.json';
import { RadioButton } from 'react-native-paper';

const QuizScreen = ({ route, navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (route.params?.restart) {
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setScore(0);
    }
  }, [route.params?.restart]);

  const handleAnswerSelection = (answer) => {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer.toLowerCase();
    const isCorrect = answer.toLowerCase() === correctAnswer;
    const newScore = isCorrect ? 1 : 0;
    const newAnswers = [
      ...userAnswers,
      { questionId: quizData[currentQuestionIndex].id, answer, isCorrect },
    ];

    setUserAnswers(newAnswers);
    setScore(score + newScore);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const handleReviewAndSubmit = () => {
    navigation.navigate('Summary', { score, total: quizData.length, userAnswers });
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <View>
          <Text style={styles.questionText}>
            Question {currentQuestionIndex + 1}: {currentQuestion.question}
          </Text>
          <FlatList
            data={currentQuestion.options}
            renderItem={({ item }) => (
              <View style={styles.optionContainer}>
                <RadioButton
                  value={selectedOption === item}
                  onValueChange={() => setSelectedOption(item)}
                />
                <Text style={styles.optionText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          {currentQuestionIndex < quizData.length - 1 ? (
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleAnswerSelection(selectedOption)}
              disabled={!selectedOption}
            >
              <Text style={styles.submitButtonText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.submitButton} onPress={handleReviewAndSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity style={styles.submitButton} onPress={handleReviewAndSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffccff',
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff66b2',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#ff66b2',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default QuizScreen;
