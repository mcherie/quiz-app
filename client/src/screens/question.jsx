import React, {useEffect, useState} from "react"
import {Text, View, StyleSheet} from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"


export const QuestionScreen = () => {

  const [questions, setQuestions] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)
  // const [correctAnswer, setCorrectAnswer] = useState([])

  useEffect(() => {
    // fetch("http://192.168.0.13:5000/question")
    fetch("http://192.168.0.11:5000/question") // P's place's IP
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => Error("Error fetching question", err))
  }, [0])

  let question;
  let optionA;
  let optionB;
  let optionC;
  let optionD;
  let correctAnswer

  if (questions.length > 0) {
    const currentQuestion = questions[activeQuestion]
    question = currentQuestion["question"]
    optionA = currentQuestion["a"]
    optionB = currentQuestion["b"]
    optionC = currentQuestion["c"]
    optionD = currentQuestion["d"]
    correctAnswer = currentQuestion["answer"]
  }


  return (
    // display the random question
    <View>

      <Text style={styles.questionTitle}>{question ? `${question}` : `Fetching question...`}</Text>


      <TouchableOpacity style={styles.options}>
        <Text>{question ? `a. ${optionA}` : `Fetching options...`}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text>{question ? `b. ${optionB}` : `Fetching options...`}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text>{question ? `c. ${optionC}` : `Fetching options...`}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Text>{question ? `d. ${optionD}` : `Fetching options...`}</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  questionTitle: {
    padding: 20, 
    backgroundColor: "aquamarine", 
    borderRadius: 2, 
    borderWidth: 0.5,
    marginBottom: 50,
    textAlign: "center"
  },
  options: {
    padding: 10, 
    backgroundColor: "aquamarine", 
    borderRadius: 10, 
    borderWidth: 1,
    marginTop: 10,
    marginRight: 50,
    marginBottom: 10,
    marginLeft: 50,
  },

})

