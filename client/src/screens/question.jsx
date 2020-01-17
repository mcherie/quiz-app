import React, {useEffect, useState} from "react"
import { Text } from "react-native"


export const QuestionScreen = () => {

  const [question, setQuestion] = useState("")

  useEffect(() => {
    async function fetchQuestion() {
      const newQuestion = await fetch("http://192.168.0.14:5000/question")
      newQuestion
      .json()
      .then(res => setQuestion(res))
      .catch(err => Error("Error fetching question", err))

    }
    fetchQuestion();
  })

  return (
    // display the random question
  <Text>{question.express}</Text>
  )
}