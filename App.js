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
  render() {
    return <AppContainer /> 
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