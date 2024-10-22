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

// app.get("/question", (req, res) => {
//   // res.send({ express: "How old are you?"})
//   db.collection("Driving").get()
//   .then(querySnapshot => {
//     const allQuestions = [];
//     querySnapshot.forEach(doc => {
//       allQuestions.push(doc.data())
//     })
//     // console.log("allQuestions is:" , allQuestions)

//     return allQuestions;
//   })
//   .then(data => res.send(data))
//   .catch(err => Error("Error fetching questions: ", err))

// });

app.get("/question", (req, res) => {
  res.send(questions)
})

const questions = [
  {id: 1, 
    question: "Drivers who don't follow the stopping requirements at a school crossing may receive?", 
    answers: [
      "A substantial fine and one demerit point", 
      "A fine of $400 to $2,000 and six demerit points", 
      "One year of jail time and six demerit points", 
      "A substantial fine and four demerit points"],
    correctAnswer: "A substantial fine and four demerit points",
  },
  {id: 2,
    question: "If the signal light changes from green to amber as you approach an intersection, what should you do?",
    answers: [
      "Sound your horn to warn pedestrians and other drivers that you do not intend to stop.", 
      "Continue through the intersection without slowing or stopping", 
      "Stop. If a stop cannot be made safely, proceed with caution.", 
      "Speed up to clear the intersection as quickly as possible"],
    correctAnswer: "Stop. If a stop cannot be made safely, proceed with caution.",
  },
  {id: 3, 
    question: "A flashing green light at an intersection, where turns to the left and right are permitted, indicates", 
    answers: [
      "You may proceed straight through if the way is clear.", 
      "You may turn to the left if the way is clear.", 
      "You may turn to the right if the way is clear.", 
      "All of the above"],
    correctAnswer: "All of the above",
  },
  {id: 4, 
    question: "New drivers caught drinking and driving will receive _____ for the first occurrence.", 
    answers: [
      "An immediate driver's license suspension at the roadside for 24 hours", 
      "A fine of up to $500 if convicted", 
      "A suspension for 30 days if convicted", 
      "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Drivers of all ages in either Level 1 or Level 2 of Ontario’s graduated-licensing system must also have a blood-alcohol level of zero when driving. New drivers caught drinking and driving will receive an immediate driver’s licence suspension at the roadside for 24 hours and, if convicted, will face a fine of up to $500 and will receive a suspension period as per the Novice Driver Escalating Sanctions scheme. For the first occurrence, you will be suspended for 30 days."
  },
  {id: 5, 
    question: "If you receive a call while driving and you do not have a passenger who can take the call, you should", 
    answers: [
      "Answer the phone immediately to know what is happening", 
      "Answer the phone only if you are expecting an important call", 
      "Pull your vehicle over and park to use your cell phone", 
      "Text back the person who called saying you are driving at the moment"],
    correctAnswer: "Pull your vehicle over and park to use your cell phone",
    explanation: "Make it a habit to pull over and park to use your cell phone, have a passenger take the call, or let it go to voice mail. If you must use a cellular phone when driving, you must use it hands-free."
  },
  {id: 6, 
    question: "If you are involved in an accident in which someone is injured, you must", 
    answers: [
      "Report the accident to your insurance company only", 
      "Report the accident to the Ministry of Transportation only", 
      "Report the accident within 48 hours to the nearest provincial or municipal police officer", 
      "Report the accident at once to the nearest provincial or municipal police officer"],
    correctAnswer: "Report the accident at once to the nearest provincial or municipal police officer",
    explanation: "If you are involved in an accident in which someone is injured, you must report the accident at once to the nearest provincial or municipal police officer."
  },
  {id: 7, 
    question: "How soon after a licensed driver changes his/her name or address is he/she required to notify the Ministry of Transportation?", 
    answers: [
      "Within six days", 
      "Within 15 days", 
      "Within 30 days", 
      "At any time prior to renewal of license"],
    correctAnswer: "Within six days",
    explanation: "If you change your name or address, you are required to notify the Ministry of Transportation within six days."
  },
  {id: 8, 
    question: "When you are in a roundabout", 
    answers: [
      "You may stop for any reason", 
      "You may pass large vehicles and change lanes", 
      "Keep to the right of the centre island and drive in a counter-clockwise direction until you reach your exit", 
      "You may not do any of the above"],
    correctAnswer: "Keep to the right of the centre island and drive in a counter-clockwise direction until you reach your exit",
    explanation: "When you're in a roundabout: - Keep to the right of the centre island and drive in a counter-clockwise direction until you reach your exit; - Don't pass large vehicles or change lanes; - Don't stop inside the roundabout, except to avoid a collision."
  },
  {id: 9, 
    question: "Upon approaching a yield sign, what does the law require you to do?", 
    answers: [
      "Stop, then enter traffic slowly", 
      "Stop, then enter traffic quickly", 
      "Slow down, stop if neccessary, and yield the right-of-way", 
      "Speed up and force your way into traffic"],
    correctAnswer: "Slow down, stop if neccessary, and yield the right-of-way",
    explanation: "When approaching a yield sign you must always slow down, come to a full stop if necessary, and yield the right-of-way."
  },
  {id: 10, 
    question: "Under what circumstances may a driver's licence be cancelled?", 
    answers: [
      "For failure to attend a re-examination", 
      "For failure to satisfactorily complete a driver re-examination", 
      "For possession of an altered driver's license", 
      "Any or all of the above"],
    correctAnswer: "Any or all of the above",
    explanation: "Any or all of these answers are correct."
  },
  {id: 11, 
    question: "When approaching a sign that reads \"merging traffic,\" you must", 
    answers: [
      "Adjust your speed and position to avoid a collision with other vehicles", 
      "Stop your vehicle before proceeding", 
      "Let the cars behind you go first", 
      "Honk your horn first befire proceeding"],
    correctAnswer: "Adjust your speed and position to avoid a collision with other vehicles",
    explanation: "When approaching the “Merging Traffic” sign, you must always adjust your speed and position to avoid a collision with other vehicles."
  },
  {id: 12, 
    question: "If you are approaching an intersection and the traffic lights are not working, you should", 
    answers: [
      "Yield to the traffic to your right", 
      "Treat it as a four-way stop sign", 
      "Stop until no cars are passing and then go", 
      "Slow down and proceed with caution"],
    correctAnswer: "Treat it as a four-way stop sign",
    explanation: "During an electrical failure, traffic lights at intersections will not work. Proceed cautiously and use the intersection the same way you would use an intersection with all-way stop signs."
  },
  {id: 13, 
    question: "When a fully-licensed driver accumulates 15 or more demerit points on his/her record, the driver's licence is suspended", 
    answers: [
      "For three months", 
      "At the discretion of the Ministry", 
      "Only if the license is NOT used for business purposes", 
      "Automatically, and for 30 days from receipt of the licence by the MTO"],
    correctAnswer: "Automatically, and for 30 days from receipt of the licence by the MTO",
    explanation: "Your licence will be suspended for 30 days from the date you hand it over to the Ministry of Transportation. You can lose your licence for 2 years if you fail to surrender it."
  },
  {id: 14, 
    question: "If you are driving and suddenly one of your tires blows out, you should", 
    answers: [
      "Take your foot off the gas pedal to slow down", 
      "Bring the vehicle to a stop off the road", 
      "Concentrate on steering", 
      "All of the above"],
    correctAnswer: "All of the above",
    explanation: "If one of your tires blows while you're driving, you must focus on steering, take your foot off the gas pedal to slow down, and bring your vehicle to a full stop OFF the road."
  },
  {id: 15, 
    question: "A teenage G2 driver with more than 6 months of driving experience may carry ____ between midnight and 5 a.m.", 
    answers: [
      "No passengers aged 19 or under", 
      "Only one passenger aged 19 or under", 
      "No more than two passengers aged 19 or under", 
      "Up to three passengers aged 19 or under"],
    correctAnswer: "Up to three passengers aged 19 or under",
    explanation: "If you are 19 years of age or under and you've had your G2 licence for more than 6 months, you can drive with up to three passengers 19 or under between midnight and 5 a.m."
  },
  {id: 16, 
    question: "If you are convicted of careless driving, you will get six demerit points and can get", 
    answers: [
      "Your license suspended for up to two years", 
      "A fine of up to $2,000", 
      "A jail sentence of up to six months", 
      "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Police can also charge drivers with careless driving or even dangerous driving (a criminal offence) if they do not pay full attention to the driving task. If you are convicted of careless driving, you will get six demerit points, can be fined up to $2,000, and can be sentenced to up to six months in jail. In some cases, your licence may be suspended for up to two years."
  },
  {id: 17, 
    question: "When lights are required, drivers must use low-beam headlights", 
    answers: [
      "Within 150 metres of an oncoming vehicle", 
      "Within 300 metres of an oncoming vehicle", 
      "Within 1 kilometer of an oncoming vehicle", 
      "At their discretion. This is a safety practice, not a law."],
    correctAnswer: "Within 150 metres of an oncoming vehicle",
    explanation: "Cut down glare at night by following the rules of the road for vehicle lights. Use your low-beam headlights within 150 metres of an oncoming vehicle."
  },
  {id: 18, 
    question: "When approaching an intersection where a traffic signal light is red and a police officer motions you to go through, you should", 
    answers: [
      "Stop to make sure s/he wants you to go through", 
      "Wait for the light to turn green", 
      "Call the police officer's attention to the red light", 
      "Obey the police officer's signal and go through at once"],
    correctAnswer: "Obey the police officer's signal and go through at once",
    explanation: "When police officers are directing traffic, you must follow their directions, even if the directions are different from traffic lights or signs."
  },
  {id: 19, 
    question: "When passing a cyclist, leave at least ____ distance between your vehicle and the cyclist.", 
    answers: [
      "1 foot", 
      "0.5 metre", 
      "1 metre", 
      "There is no minimum distance"],
    correctAnswer: "1 metre",
    explanation: "When passing a cyclist, drivers are required to maintain a minimum distance of one metre between their vehicle and the cyclist. If the lane is too narrow to share, change lanes to pass the cyclist."
  },
  {id: 20, 
    question: "When driving on a street designed for two-way traffic, you hear the siren of an emergency vehicle. What does the law require you to do?", 
    answers: [
      "Signal the driver to pass", 
      "Continue at the same speed", 
      "Speed up and get out of the way", 
      "Pull to the right as far as possible and stop"],
    correctAnswer: "Pull to the right as far as possible and stop",
    explanation: "If you hear the siren of an emergency vehicle, pull to the right as far as possible and stop. Don't worry; other drivers will do the same."
  },
  {id: 21, 
    question: "What does this road sign mean", 
    answers: [
      "Idling permitted", 
      "No stopping for more than 3 minutes", 
      "No smoking", 
      "No idling for more than 3 minutes"],
    correctAnswer: "No idling for more than 3 minutes",
    explanation: "",
    image: src="./assets/no-idling.svg"
  },
]

const insertQuestionstoDb = () => {
  questions.forEach(item => {
    db.collection("Driving").doc(`${item.id}`).delete().set(item)
    .catch(err => Error("Error inserting to db: ", err))
  })
}

// insertQuestionstoDb()

