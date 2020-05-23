import React, {useEffect, useState} from "react"
import {Alert, Text, View, StyleSheet} from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"


export const QuestionScreen = () => {

  const [questions, setQuestions] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)

  useEffect(() => {
    // fetch("http://192.168.0.13:5000/question")
    fetch("http://192.168.0.11:5000/question") // P's place's IP
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => Error("Error fetching question", err))
  }, [0])

  let question;
  let answers
  let correctAnswer

  if (questions.length > 0) {

    const currentQuestion = questions[activeQuestion]

    question = currentQuestion["question"]
    answers = currentQuestion["answers"] // now an array
    correctAnswer = currentQuestion["correctAnswer"]
  }

  const selectAnswer = (chosenAnswer) => {
    if (chosenAnswer == correctAnswer) {
      Alert.alert("CORRECT!", `${chosenAnswer} answer was chosen. ✔️`, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Next', onPress: () => setActiveQuestion(+1)},
      ],
      { cancelable: false })
    } else {
      alert(`${chosenAnswer} answer was chosen. Incorrect.`)
    }
  }


  return (
    <View>

      <Text style={styles.questionTitle}>{question ? `${question}` : `Fetching question...`}</Text>

      {question 
      ? answers.map((eachOption, idx) => {
        return (
          <TouchableOpacity style={styles.options} onPress={()=>selectAnswer(eachOption)} key={idx}>
          <Text> {`${String.fromCharCode(97 + idx)}.  ${eachOption}`}</Text>
        </TouchableOpacity> 
        )
      })
      : <Text>"Fetching options..."</Text>}

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
    textAlign: "center",
    fontSize: 20,
  },
  options: {
    padding: 10, 
    backgroundColor: "aquamarine", 
    borderRadius: 10, 
    borderWidth: 1,
    marginTop: 10,
    marginRight: 40,
    marginBottom: 10,
    marginLeft: 40,
    // fontSize: 30,
  },

})

