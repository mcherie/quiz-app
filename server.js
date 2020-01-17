const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// console.log that server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

const firebase = require("firebase-admin")
// const serviceAccount = require("./serviceAccountKey.json")
firebase.initializeApp({
  credential: firebase.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    project_key_id: process.env.FIREBASE_PROJECT_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
  }),
  databaseURL: "https://quizapp-f9dec.firebaseio.com"
})

const db = firebase.firestore()

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "Backend Express is connected to React"})
});

app.get("/question", (req, res) => {
  // res.send({ express: "How old are you?"})
  db.collection("questions").get()
  .then(querySnapshot => {
    const allQuestions = [];
    querySnapshot.forEach(doc => {
      allQuestions.push(doc.data())
    })
    console.log("allQuestions is:" , allQuestions)

    return allQuestions;
  })
  .then(data => res.send(data))
  .catch(err => Error("Error fetching questions: ", err))

});

const questions = [
  {id: 1,
    question: "What is the color of the sky?",
    a: "Blue",
    b: "Red",
    c: "Green",
    d: "Purple"
  },
  {id: 2,
    question: "What is the shape of the moon?",
    a: "Square",
    b: "Triangle",
    c: "Round",
    d: "Hexagon"
  }
]

const insertQuestionstoDb = () => {
  questions.forEach(item => {
    db.collection("questions").doc().set(item)
    .catch(err => Error("Error inserting to db: ", err))
  })
}
// insertQuestionstoDb()

