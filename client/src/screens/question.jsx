import React, {useEffect, useState} from "react"
import { Text } from "react-native"


export const QuestionScreen = () => {

  const [question, setQuestion] = useState([])

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
    fetch("http://192.168.0.14:5000/question")
    .then(res => res.json())
    .then(data => setQuestion(data))
    .catch(err => Error("Error fetching question", err))
  }, [0])

let firstQuestion;
  if (question.length > 0) {
    console.log("question is:", question)
    const firstObject = question[0]
    console.log("first object is:", firstObject)
    firstQuestion = firstObject["question"]
    console.log("first question is:", firstQuestion) 
  }


  return (
    // display the random question
    <Text>{firstQuestion ? `${firstQuestion}` : `Fetching question...`}</Text>
  )
}

