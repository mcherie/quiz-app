import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"


import { HomeScreen } from "./src/screens/home" 
import { QuestionScreen } from "./src/screens/question"

// import { enableScreens } from "react-native-screens"

// import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import {render} from 'react-dom';

// enableScreens();

// const Stack = createNativeStackNavigator();

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to Quiz App!</Text>
//         <Text style={styles.goToQuiz} onPress={()=> <Question/>}>Go to Quiz</Text>
//       </View>
//     );
//   }
// }

// const App = () => {
//     return <AppContainer />
// }
// export default App;

export default class App extends Component {

  state = { data: null };

  componentDidMount() {
    // Call fetch function below once component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log("You got an error here", err))
  }

  // Fetches GET route from the Express server
  callBackendAPI = async () => {
    // const response = await fetch("http://localhost:5000/express_backend");
    const response = await fetch("http://192.168.0.13:5000/express_backend");
    const body = await response.json(); 

    if (response.status !== 200) {
      throw Error("Error in callBackendAPI func", body.message)
    }
    return body;
  }


  render() {
      return <AppContainer screenProps={`${this.state.data}`}/>  
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen},
  Question: { screen: QuestionScreen}
}, { initialRouteName: "Home"})

const AppContainer = createAppContainer(AppNavigator)


















const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  goToQuiz: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    textDecorationLine: "underline"
  }
});