import React, {useEffect, useState} from "react"
import {Alert, Text, View, StyleSheet, Image, ScrollView, Button} from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"

import { listOfQuestions } from "../assets/listOfQuestions"


export const QuestionScreen = ({navigation}) => {

  const [questions, setQuestions] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(18)

  useEffect(() => {
    // fetch("http://192.168.0.12:5000/question")
    // // fetch("http://192.168.0.11:5000/question") // P's place's IP
    //   .then(res => res.json())
    //   .then(data => setQuestions(data))
    //   .catch(err => Error("Error fetching question", err))
    setQuestions(listOfQuestions)
  }, [0])
 
  // let allQuestions = listOfQuestions

  // console.log("allQuestions is", allQuestions)

  let question;
  let image
  let answers
  let correctAnswer
  let explanation

  let totalQuestions
  let numberOfQuesAnswered = 1
  // let correctAnswerCount = 0

  if (questions.length > 0) {

    totalQuestions = questions.length

    if (activeQuestion < totalQuestions) {
      const currentQuestion = questions[activeQuestion]

      question = currentQuestion["question"]
      answers = currentQuestion["answers"] // now an array
      correctAnswer = currentQuestion["correctAnswer"]
      explanation = currentQuestion["explanation"] ? currentQuestion["explanation"] : ""
      image = currentQuestion["image"] ? currentQuestion["image"] : null
    } else {
      navigation.navigate("Home")
    }

  }

  const selectAnswer = (chosenAnswer) => {
    if (chosenAnswer == correctAnswer) {
      // correctAnswerCount++
      numberOfQuesAnswered++
      Alert.alert("CORRECT ✔️", `${explanation}`, 
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Next', onPress: () => setActiveQuestion((activeQuestion * 1) + 1)},
      ],
      { cancelable: false })
    } else {
      alert(`Answer chosen was INCORRECT.`)
    }
  }


  return (
    <ScrollView >
      <Button style= {{alignSelf: "left"}} title="Previous question" onPress={() => setActiveQuestion((activeQuestion * 1) - 1)} />

      <Text style={styles.questionTitle}>{question ? `${question}` : `Fetching question...`}</Text>

      {image ? <Image style={{resizeMode: "contain", height: 220, alignSelf: "center"}} source={image}/> : null}
      

      {answers 
      ? answers.map((eachOption, idx) => {
        return (
          <TouchableOpacity style={styles.options} onPress={()=>selectAnswer(eachOption)} key={idx}>
          <Text> {`${String.fromCharCode(97 + idx)}.  ${eachOption}`}</Text>
        </TouchableOpacity> 
        )
      })
      : <Text>"Fetching options..."</Text>}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  questionTitle: {
    padding: 20, 
    backgroundColor: "aquamarine", 
    borderRadius: 2, 
    borderWidth: 0.5,
    marginBottom: 23,
    textAlign: "center",
    fontSize: 20,
  },
  options: {
    padding: 10, 
    backgroundColor: "aquamarine", 
    borderRadius: 10, 
    borderWidth: 1,
    marginTop: 20,
    marginRight: 40,
    // marginBottom: ,
    marginLeft: 40,
    // fontSize: 30,
  },

})

