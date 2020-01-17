const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const firebase = require("firebase-admin")
const serviceAccount = require("./serviceAccountKey.json")

// console.log that server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://quizapp-f9dec.firebaseio.com"
})

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "BACKEND EXPRESS IS CONNECTED TO REACT"})
});

app.get("/question", (req, res) => {
  res.send({ express: "How old are you?"})
});

const questions = [
  {"What is the color of the sky?": {
    a: "Blue",
    b: "Red",
    c: "Green",
    d: "Purple"
  }},
  {"What is the shape of the moon?": {
    a: "Square",
    b: "Triangle",
    c: "Round",
    d: "Hexagon"
  }}
]
const db = firebase.firestore()

const insertQuestionstoDb = () => {
  questions.forEach(item => {
    db.collection("questions").doc().set(item)
    .catch(err => Error("Error inserting to db: ", err))
  })
}
insertQuestionstoDb()