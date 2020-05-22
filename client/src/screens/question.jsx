import React, {useEffect, useState} from "react"
import { Text, View } from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"


export const QuestionScreen = () => {

  const [questions, setQuestions] = useState([])

  // async function fetchQuestion() {
  //   const newQuestion = await fetch("http://192.168.0.14:5000/question")
  //   newQuestion
  //   .json()
  //   fetch("http://192.168.0.14:5000/question")
  //   .then(res => res.json())
  //   .then(data => setQuestion(data))
  //   .then(data => data)
  //   .catch(err => Error("Error fetching question", err))
  // }

  useEffect(() => {
    // fetch("http://192.168.0.13:5000/question")
        fetch("http://192.168.0.11:5000/question") // P's place's IP
    .then(res => res.json())
    .then(data => setQuestions(data))
    .catch(err => Error("Error fetching question", err))
  }, [0])

let firstQuestion;
let firstQuestionA;
let firstQuestionB;
let firstQuestionC;
let firstQuestionD;

  if (questions.length > 0) {
    // console.log("question is:", questions)
    const firstObject = questions[0]
    // console.log("first object is:", firstObject)
    firstQuestion = firstObject["question"]
    // console.log("first question is:", firstQuestion)
    firstQuestionA = firstObject["a"]
    firstQuestionB = firstObject["b"]
    firstQuestionC = firstObject["c"]
    firstQuestionD = firstObject["d"]

  }


  return (
    // display the random question
    <View>
    <Text>{firstQuestion ? `${firstQuestion}` : `Fetching question...`}</Text>
    <TouchableOpacity>    
      <Text>{firstQuestion ? `a. ${firstQuestionA}` : `Fetching options...`}</Text>
    </TouchableOpacity>
    <TouchableOpacity>    
      <Text>{firstQuestion ? `b. ${firstQuestionB}` : `Fetching options...`}</Text>
    </TouchableOpacity>
    <TouchableOpacity>    
      <Text>{firstQuestion ? `c. ${firstQuestionC}` : `Fetching options...`}</Text>
    </TouchableOpacity>
    <TouchableOpacity>    
      <Text>{firstQuestion ? `d. ${firstQuestionD}` : `Fetching options...`}</Text>
    </TouchableOpacity>
    </View>
  )
}

